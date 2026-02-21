export type PlatformType = 'windows' | 'mac' | 'linux';

export interface DownloadItem {
    title: string;
    version: string;
    versions?: string[];
    size: string;
    description: string;
    link: string;
    tag?: string;
    tags?: string[];
    icon?: string;
    category?: string;
    downloads?: string;
    author?: string;
    platforms: PlatformType[];
    commands?: {
        windows?: string;
        mac?: string;
        linux?: string;
    };
    cliCommand?: string;
}

export interface GhostItem {
    id: string;
    title: string;
    version: string;
    author: string;
    description: string;
    tags: string[];
    arch: 'x64' | 'x32';
    boot: 'UEFI' | 'Legacy' | 'Both';
    files: {
        type: 'GHO' | 'TIB' | 'ISO';
        size: string;
        link: string;
        md5: string;
    }[];
    softwareList: string[];
    features: string[];
    image: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    price: string;
    features: string[];
    icon: string;
    link: string;
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    summary: string;
    content: string;
    category: string;
    image?: string;
    author?: string;
    tags?: string[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface WindowsIsoItem {
    language: string;
    arch: 'x64' | 'x86' | 'arm64' | 'Universal';
    sha256: string;
    link: string;
    filename: string;
    version?: string;
    buildNumber?: string;
    releaseDate?: string;
    size?: string;
}

export interface WindowsSubcategory {
    id: string;
    title: string;
    items: {
        id: string;
        name: string;
        releases?: {
            id: string;
            title?: string;
            files: {
                language: string;
                arch: 'x64' | 'x86' | 'arm64' | 'Universal';
                sha256: string;
                link: string;
                filename: string;
                version?: string;
                buildNumber?: string;
                releaseDate?: string;
                size?: string;
            }[];
        }[];
    }[];
}

export interface WindowsMenuItem {
    id: string;
    title: string;
    subcategories?: WindowsSubcategory[];
    faqs?: FAQItem[];
}

export interface OfficeProduct {
    id: string;
    name: string;
    includedApps: string[];
    links: {
        online_x64?: string;
        online_x86?: string;
        offline?: string;
    };
    isNew?: boolean;
}

export interface OfficeVersion {
    id: string;
    title: string;
    products: OfficeProduct[];
}

export interface OfficeLanguage {
    code: string;
    name: string;
    region?: string;
}
