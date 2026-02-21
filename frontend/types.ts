
import { ReactNode } from 'react';

export type DocSectionType = 'text' | 'code' | 'image' | 'alert' | 'steps' | 'table' | 'windows-menu' | 'software-catalog' | 'form' | 'accordion' | 'iso-form' | 'service-grid' | 'ghost-grid' | 'content' | 'ghost-catalog' | 'windows-release-grid' | 'callout' | 'services-grid' | 'news-grid' | 'download-grid' | 'activation-view';

export type PlatformType = 'windows' | 'mac' | 'linux';

export interface DownloadItem {
  id: string;
  title: string;
  version: string; // Current/Default version
  versions?: string[]; // List of available versions
  versionLinks?: Record<string, string>; // Maps version string to specific download URL
  size: string;
  description: string;
  link: string; // Default download link
  tag?: string;
  tags?: string[];
  icon?: string; // Lucide icon name
  iconUrl?: string; // External image URL for the icon
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
  tags: string[]; // e.g., "Gaming", "Office", "Lite"
  arch: 'x64' | 'x32';
  boot: 'UEFI' | 'Legacy' | 'Both';
  files: {
    type: 'GHO' | 'TIB' | 'ISO';
    size: string;
    link: string;
    md5: string;
  }[];
  softwareList: string[]; // List of installed apps
  features: string[]; // System tweaks
  image: string; // Thumbnail
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string; // HTML or Markdown string
  category: string;
  image?: string;
  author?: string;
  tags?: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
  link: string;
}

export interface AccordionItem {
  question: string;
  answer: string;
  open?: boolean;
}

export interface FormField {
  label: string;
  type: 'text' | 'textarea' | 'email' | 'select';
  placeholder?: string;
  options?: string[];
}

export interface IsoFormBlock {
  variant: 'windows' | 'office';
  title: string;
  description: string;
}

export interface WindowsIsoItem {
  language: string;
  arch: 'x64' | 'x86' | 'arm64' | 'Universal';
  filename: string;
  link: string;
  version: string;
  sha256: string;
  size?: string; // New: "5.4 GB"
  buildNumber?: string; // New: "22631.2428"
  releaseDate?: string; // New: "2023-10-31"
}

export interface ActivationKeyItem {
  edition: string;
  key: string;
  ticket: string; // Link
}

export interface WindowsEdition {
  id: string;
  title: string;
  subTitle?: string; // e.g. "25H2"
  badge?: string; // "Hot", "New"
  buildVersion: string; // "Build - 26200..."
  releaseDate?: string;
  isoList: WindowsIsoItem[];
}

export interface DocBlock {
  type: DocSectionType;
  content: string | string[] | DownloadItem[] | NewsItem[] | FormField[] | AccordionItem[] | IsoFormBlock | ServiceItem[] | GhostItem[] | WindowsEdition[] | WindowsMenuItem[] | ActivationKeyItem[];
  language?: string;
  variant?: 'info' | 'warning' | 'tip' | 'danger';
  title?: string;
  menuType?: 'windows' | 'office' | 'office-mac' | 'hwid' | 'ohook';
  officeVersions?: any[]; // Using any[] to avoid circular dependency or import issues for now, or Import OfficeVersion
}

export interface DocPage {
  id: string;
  title: string;
  description: string;
  blocks: DocBlock[];
  headings: { id: string; text: string; level: number }[];
}

export interface NavItem {
  id: string;
  title: string;
  pages?: NavItem[];
  isSection?: boolean;
  badge?: string; // "new", "beta", etc.
}

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
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
  id: string; // e.g. "0365ProPlusRetail"
  name: string; // Display name if different? Usually matches ID
  includedApps: string[]; // "Access, Excel..."
  links: {
    online_x64?: string;
    online_x86?: string;
    offline?: string;
  };
  isNew?: boolean; // For <Heart> icon
}

export interface OfficeVersion {
  id: string; // 'm365', '2024'
  title: string; // "Microsoft 365 / Sub"
  description?: string;
  generation?: string;
  products: OfficeProduct[];
}

export interface OfficeLanguage {
  code: string; // "en-us"
  name: string; // "English"
  region?: string; // "United States" or full string "English [en-US]"
}

export interface OfficeMenuData {
  versions: OfficeVersion[];
  languages: OfficeLanguage[];
}