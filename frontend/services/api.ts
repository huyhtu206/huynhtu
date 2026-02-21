import {
    WindowsMenuItem,
    OfficeVersion,
    OfficeLanguage,
    DownloadItem,
    GhostItem,
    NewsItem,
    ServiceItem
} from '../types';
import {
    WINDOWS_MENU,
    OFFICE_VERSIONS,
    OFFICE_LANGUAGES,
    SOFTWARE_DATABASE,
    NEWS_LIST,
    SERVICES_LIST,
    GHOST_OS_DATABASE
} from '../constants_data';

// Temporarily disabled backend for GitHub Pages deployment
// Directly returning local data from constants_data

const OFFICE_C2R = OFFICE_VERSIONS.filter(v => v.generation === 'C2R' || v.generation === 'Subscription');
const OFFICE_MSI = OFFICE_VERSIONS.filter(v => v.generation === 'MSI');
const OFFICE_MAC = OFFICE_VERSIONS.filter(v => v.id.includes('mac'));

export const api = {
    // Windows
    getWindowsMenu: async () => WINDOWS_MENU,

    // Office
    getOfficeC2RVersions: async () => OFFICE_C2R,
    getOfficeMsiVersions: async () => OFFICE_MSI,
    getOfficeMacVersions: async () => OFFICE_MAC,
    getOfficeLanguages: async () => OFFICE_LANGUAGES,

    // Software & Others
    getSoftware: async () => SOFTWARE_DATABASE as DownloadItem[],
    getGhost: async () => GHOST_OS_DATABASE as GhostItem[],
    getServices: async () => SERVICES_LIST as ServiceItem[],
    getNews: async () => NEWS_LIST as NewsItem[],
};
