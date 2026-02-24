/**
 * Cloudflare Worker: HuynhTu API & Download Proxy
 * Handles dynamic driver resolution, short links, and download proxying.
 */

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Route: API Driver Download
        if (path === "/api/download/driver") {
            return await handleDriverRequest(request, env);
        }

        // Route: API URL Proxy (direct)
        const urlParam = url.searchParams.get('url');
        if (urlParam && path.startsWith("/api/proxy")) {
            return await proxyRequest(urlParam, request);
        }

        // Route: Short Link Resolver (Anything else)
        const code = path.slice(1);
        if (code && code.length > 2 && !path.startsWith("/api/")) {
            const targetUrl = await env.LINKS.get(code);
            if (targetUrl) {
                return await proxyRequest(targetUrl, request);
            }
        }

        return new Response("HuynhTu API: Route not found or missing parameters.", {
            status: 404,
            headers: { "Access-Control-Allow-Origin": "*" }
        });
    },
};

/**
 * Ported logic from drivers.rs
 */
async function handleDriverRequest(request, env) {
    const url = new URL(request.url);
    const vendor = url.searchParams.get("vendor")?.toUpperCase();
    const version = url.searchParams.get("version") || "latest";
    const model = url.searchParams.get("model") || "X541UA";
    const osid = url.searchParams.get("osid") || "45"; // Win10 x64
    const check = url.searchParams.has("check");
    const hide = url.searchParams.has("hide");

    if (!vendor) {
        return new Response("Missing vendor", { status: 400 });
    }

    let downloadUrl = "";

    switch (vendor) {
        case "NVIDIA":
            downloadUrl = `https://us.download.nvidia.com/Windows/${version}/${version}-desktop-win10-win11-64bit-international-dch-whql.exe`;
            break;
        case "AMD":
            downloadUrl = `https://drivers.amd.com/drivers/whql-amd-software-adrenalin-edition-${version}-win10-win11-oct2024.exe`;
            break;
        case "INTEL_GFX":
            downloadUrl = `https://downloadmirror.intel.com/823385/gfx_win_101.${version}.exe`;
            break;
        case "INTEL_WIFI":
            downloadUrl = `https://downloadmirror.intel.com/820549/WiFi-${version}-Driver64-Win10-Win11.exe`;
            break;
        case "ASUS":
            const asusApi = `https://www.asus.com/support/api/product.asmx/GetPDDrivers?cpu=&osid=${osid}&website=vn&model=${model}`;
            try {
                const resp = await fetch(asusApi);
                const json = await resp.json();
                downloadUrl = json.Result?.Obj?.[0]?.Files?.[0]?.DownloadUrl?.Global || asusApi;
            } catch (e) {
                downloadUrl = asusApi;
            }
            break;
        case "LENOVO":
            const lenovoUrl = `https://pcsupport.lenovo.com/vn/vi/products/${model}/downloads/driver-list`;
            try {
                const resp = await fetch(lenovoUrl);
                const text = await resp.text();
                const patterns = [
                    "https://download.lenovo.com/pccbbs/",
                    "https://download.lenovo.com/consumer/",
                    "https://download.lenovo.com/km/media/attachment/"
                ];
                for (const p of patterns) {
                    const start = text.indexOf(p);
                    if (start !== -1) {
                        const rest = text.substring(start);
                        const end = rest.indexOf(".exe");
                        if (end !== -1) {
                            downloadUrl = rest.substring(0, end + 4);
                            break;
                        }
                    }
                }
                if (!downloadUrl) downloadUrl = lenovoUrl;
            } catch (e) {
                downloadUrl = lenovoUrl;
            }
            break;
        case "HP_UPD":
            downloadUrl = `https://ftp.hp.com/pub/softlib/software13/upd-pcl6-x64-${version}.exe`;
            break;
        case "REALTEK":
            downloadUrl = `https://cdn.realtek.com/pc/audio/High_Definition_Audio_LinK_${version}.zip`;
            break;
        default:
            return new Response("Vendor not supported", { status: 404 });
    }

    if (check) {
        const resp = await fetch(downloadUrl, { method: "HEAD" });
        return new Response(JSON.stringify({
            vendor, version, url: downloadUrl, exists: resp.status === 200, status: resp.status
        }), { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
    }

    if (hide) {
        const code = Math.random().toString(36).substring(2, 10);
        await env.LINKS.put(code, downloadUrl);
        return Response.redirect(`${url.origin}/${code}`, 302);
    }

    // ALWAYS use proxyRequest to avoid Mixed Content (HTTP) security errors
    return await proxyRequest(downloadUrl, request);
}

/**
 * Proxy function with header cleaning
 */
async function proxyRequest(targetUrl, originalRequest) {
    try {
        const response = await fetch(targetUrl, {
            method: "GET",
            headers: {
                'User-Agent': originalRequest.headers.get('User-Agent') || 'Mozilla/5.0 Cloudflare-Worker',
            },
            redirect: 'follow',
        });

        const newHeaders = new Headers(response.headers);
        const filename = targetUrl.split('/').pop().split('?')[0] || 'download_file';

        newHeaders.set('Content-Disposition', `attachment; filename="${filename}"`);
        newHeaders.set('Content-Type', 'application/octet-stream');
        newHeaders.delete('x-amz-request-id');
        newHeaders.delete('x-amz-id-2');
        newHeaders.delete('Server');
        newHeaders.set('Access-Control-Allow-Origin', '*');

        const status = (response.status >= 300 && response.status < 400) ? 200 : response.status;

        return new Response(response.body, {
            status: status,
            headers: newHeaders,
        });
    } catch (err) {
        return new Response(`Proxy Error: ${err.message}`, { status: 500 });
    }
}
