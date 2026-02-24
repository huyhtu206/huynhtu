import { ReactNode } from 'react';

export type DocSectionType = 'text' | 'code' | 'callout' | 'list' | 'download-grid' | 'news-grid' | 'form' | 'accordion' | 'iso-form' | 'services-grid' | 'software-catalog' | 'ghost-catalog' | 'windows-release-grid' | 'quickstart-hero' | 'grid-cards' | 'office-downloader' | 'activation-section' | 'office-msi-downloader' | 'sponsor-page' | 'driver-page';


export type PlatformType = 'windows' | 'mac' | 'linux';

export interface DownloadItem {
  title: string;
  version: string; // Current/Default version
  versions?: string[]; // List of available versions
  size: string;
  description: string;
  link: string;
  tag?: string; // Deprecated, use tags
  tags?: string[];
  icon?: string;
  category?: string;
  downloads?: string; // e.g. "1,234,567"
  author?: string;
  // Multi-platform support
  platforms: PlatformType[];
  commands?: {
    windows?: string; // winget
    mac?: string;     // brew
    linux?: string;   // apt or snap
  };
  // Fallback for backward compatibility
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
  version: string; // New
  sha256: string; // New
}

export interface WindowsEdition {
  id: string;
  title: string;
  subTitle?: string; // e.g. "25H2"
  badge?: string; // "Hot", "New"
  buildVersion: string; // "Build - 26200..."
  releaseDate?: string;
  isoList: WindowsIsoItem[];
  msProductId?: number; // Microsoft Software Download Product ID
}

export interface GridCardItem {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  badge?: string;
}

export interface OfficeC2RProduct {
  productId: string;
  includedApps: string;
  onlineX64: string;
  onlineX32: string;
  offlineX32X64: string;
}

export interface OfficeC2RCategory {
  id: string;
  title: string;
  subTitle?: string;
  buildVersion?: string;
  description?: string;
  products: OfficeC2RProduct[];
}

export interface OfficeDownloaderData {
  languages: { label: string; value: string }[];
  categories: OfficeC2RCategory[];
}

export interface ActivationKey {
  product: string;
  key?: string;
  ticketLink?: string;
  label?: string; // For varied table headers
}

export interface ActivationSection {
  title: string;
  headers: { label: string; key: keyof ActivationKey }[];
  items: ActivationKey[];
}

export interface DocBlock {
  type: DocSectionType;
  content: string | string[] | DownloadItem[] | NewsItem[] | FormField[] | AccordionItem[] | IsoFormBlock | ServiceItem[] | GhostItem[] | WindowsEdition[] | GridCardItem[] | OfficeDownloaderData | ActivationSection[];
  language?: string;
  variant?: 'info' | 'warning' | 'tip' | 'danger';
  title?: string;
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