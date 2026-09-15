export interface AppItem {
  id: string;
  name: string;
  category: string;
  status: 'COMING SOON';
  description: string;
  iconType: 'billing' | 'railway';
}

export interface CompanyInfo {
  name: string;
  brandFirst: string;
  brandSecond: string;
  tagline: string;
  websiteUrl: string;
  supportEmail: string;
  heroHeadline: string;
  heroText: string;
  aboutText: string;
  comingSoonHeading: string;
  comingSoonText: string;
  supportText: string;
  copyright: string;
}
