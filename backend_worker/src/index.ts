import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

// Software Link Database
// Software Link Database (Direct Download Links)
const SOFTWARE_LINKS: Record<string, string | Record<string, string>> = {
    // Browsers
    'chrome': 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B78ED6A38-92EF-90D1-16A2-15243AD53573%7D%26lang%3Den%26browser%3D4%26usagestats%3D0%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Ddefaultbrowser/update2/installers/ChromeSetup.exe',
    'firefox': {
        'default': 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=vi',
        '123.0': 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=vi',
        '122.0': 'https://ftp.mozilla.org/pub/firefox/releases/122.0/win64/vi/Firefox%20Setup%20122.0.exe',
        '115.0 ESR': 'https://download.mozilla.org/?product=firefox-esr-latest-ssl&os=win64&lang=vi'
    },
    'edge': 'https://tools.google.com/dlpage/res/edgedl/chrome/install/-1/EdgeSetup.exe',
    'brave': 'https://updates-cdn.bravesoftware.com/sparkle/Brave-Browser/stable/x64/BraveBrowserSetup.exe',

    // Utilities
    'unikey': {
        'default': 'https://www.unikey.org/assets/unikey46RC2-230919-win64.zip',
        '4.6 RC2': 'https://www.unikey.org/assets/unikey46RC2-230919-win64.zip',
        '4.3 RC5': 'https://www.unikey.org/assets/unikey43RC5-200929-win64.zip',
        '4.2 RC4': 'https://sourceforge.net/projects/unikey/files/unikey-win/4.2%20RC4/unikey42RC4-140823-win64.zip/download'
    },
    'winrar': {
        'default': 'https://www.rarlab.com/rar/winrar-x64-624.exe',
        '6.24': 'https://www.rarlab.com/rar/winrar-x64-624.exe',
        '6.23': 'https://www.rarlab.com/rar/winrar-x64-623.exe',
        '5.91': 'https://www.rarlab.com/rar/winrar-x64-591.exe'
    },
    '7zip': 'https://www.7-zip.org/a/7z2301-x64.exe',
    'rufus': 'https://github.com/pbatard/rufus/releases/download/v4.4/rufus-4.4.exe',

    // Office & PDF
    'office-c2r': 'https://github.com/ratzlaff/Office-C2R-Install/raw/master/Office%20Install.exe',
    'foxit': 'https://cdn01.foxitsoftware.com/pub/foxit/reader/desktop/win/12.x/12.1/en_us/FoxitPDFReader121_L10N_Setup.exe',
    'sumatrapdf': 'https://www.sumatrapdfreader.org/dl/SumatraPDF-3.5.2-64-install.exe',

    // Graphics
    'photoshop': 'https://creativecloud.adobe.com/apps/download/photoshop',
    'illustrator': 'https://creativecloud.adobe.com/apps/download/illustrator',
    'figma': 'https://www.figma.com/download/desktop/win',

    // Development
    'vscode': 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user',
    'git': 'https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe',
    'nodejs': {
        'default': 'https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi',
        '20.11.1': 'https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi',
        '18.19.0': 'https://nodejs.org/dist/v18.19.0/node-v18.19.0-x64.msi',
        '16.20.2': 'https://nodejs.org/dist/v16.20.2/node-v16.20.2-x64.msi'
    },
    'python': 'https://www.python.org/ftp/python/3.12.2/python-3.12.2-amd64.exe',

    // Multimedia
    'vlc': 'https://get.videolan.org/vlc/3.0.20/win64/vlc-3.0.20-win64.exe',
    'spotify': 'https://download.scdn.co/SpotifySetup.exe',
    'obs': 'https://cdn-fastly.obsproject.com/downloads/OBS-Studio-30.0.2-Full-Installer-x64.exe',

    // Communication
    'zalo': 'https://zalo.me/pc',
    'telegram': 'https://telegram.org/dl/desktop/win64',
    'discord': 'https://discord.com/api/download?platform=win',

    // Support
    'anydesk': 'https://download.anydesk.com/AnyDesk.exe',
    'ultraviewer': 'https://ultraviewer.net/UltraViewer_setup_6.6_en.exe',

    // Security
    'kaspersky': 'https://dm.kaspersky-labs.com/en-US/Free/21.15.8.493/startup.exe',
    'malwarebytes': 'https://downloads.malwarebytes.com/file/mb4_offline'
}

app.get('/', (c) => {
    return c.json({
        status: 'online',
        message: 'Huynhtu API - Download Service',
        docs: 'https://api.huynhtu.com/docs'
    })
})

// Pattern: /windows/software/:id
app.get('/windows/software/:id', (c) => {
    const id = c.req.param('id')
    const version = c.req.query('v')
    const item = SOFTWARE_LINKS[id]

    if (item) {
        let link: string | undefined;
        if (typeof item === 'string') {
            link = item;
        } else if (version && item[version]) {
            link = item[version];
        } else {
            link = item.default;
        }

        if (link) {
            return c.redirect(link, 302)
        }
    }

    return c.json({ error: 'Software or version not found' }, 404)
})

export default app
