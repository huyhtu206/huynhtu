/**
 * API Service — fetches data from the Rust Cloudflare Worker backend.
 *
 * In development (VITE_API_URL is empty), falls back to the local constants.ts data.
 * In production, set VITE_API_URL=https://api.huynhtu.dev in your .env file.
 */

const PROXY_URL = (import.meta as any).env?.VITE_PROXY_URL;
const BASE_URL: string = (import.meta as any).env?.VITE_API_URL || PROXY_URL || '';


// If no backend URL is configured, we are in local/offline mode.
const isBackendConfigured = !!((import.meta as any).env?.VITE_API_URL);

async function fetchJson<T>(path: string): Promise<T | null> {
    const fetchUrl = (import.meta as any).env?.VITE_API_URL;
    if (!fetchUrl) return null;
    try {
        const res = await fetch(`${fetchUrl}${path}`, {
            headers: { 'Content-Type': 'application/json' },
            // 5 second timeout
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json() as T;
    } catch (err) {
        console.warn(`[API] Failed to fetch ${path}:`, err);
        return null;
    }
}

// ------- Public API functions -------

/** GET /api/navigation */
export async function fetchNavigation() {
    return fetchJson<any[]>('/api/navigation');
}

/** GET /api/software */
export async function fetchSoftware() {
    return fetchJson<any[]>('/api/software');
}

/** GET /api/news */
export async function fetchNews() {
    return fetchJson<any[]>('/api/news');
}

/** GET /api/office/msi */
export async function fetchOfficeMSI() {
    return fetchJson<any[]>('/api/office/msi');
}

/** GET /api/office/mac */
export async function fetchOfficeMac() {
    return fetchJson<any[]>('/api/office/mac');
}

/** GET /api/pages/:slug */
export async function fetchPage(slug: string) {
    return fetchJson<{ id: string; title: string; description: string }>(`/api/pages/${slug}`);
}

/** GET /api/catalog/search?q=... */
export async function searchCatalog(query: string) {
    return fetchJson<any[]>(`/api/catalog/search?q=${encodeURIComponent(query)}`);
}

/** GET /api/catalog/download?id=... */
export async function getCatalogDownload(updateId: string) {
    return fetchJson<string[]>(`/api/catalog/download?id=${updateId}&hide=true`);
}

export function getResolveUrl(category: string, id?: string, name?: string, language?: string) {
    const params = new URLSearchParams();
    params.append('category', category);
    if (id) params.append('id', id);
    if (name) params.append('name', name);
    if (language) params.append('language', language);
    params.append('hide', 'true');

    // For download redirects, we MUST have a domain to avoid local route reload.
    const domain = BASE_URL;
    return `${domain}/api/download/resolve?${params.toString()}`;
}

export function getDriverUrl(vendor: string, version: string, model?: string, osid?: string) {
    const domain = BASE_URL;
    const params = new URLSearchParams();
    params.append('vendor', vendor);
    params.append('version', version);
    if (model) params.append('model', model);
    if (osid) params.append('osid', osid);
    params.append('hide', 'true');
    return `${domain}/api/download/driver?${params.toString()}`;
}

export async function checkDriverVersion(vendor: string, version: string) {
    return fetchJson<any>(`/api/download/driver?vendor=${vendor}&version=${version}&check=true`);
}

export default { fetchNavigation, fetchSoftware, fetchNews, fetchOfficeMSI, fetchOfficeMac, fetchPage, searchCatalog, getCatalogDownload, getResolveUrl, getDriverUrl, checkDriverVersion };
