export type PageRoute =
  | 'home'
  | 'about'
  | 'products'
  | 'contact'
  | 'privacy-policy'
  | 'terms'
  | '404';

export interface ProductItem {
  id: string;
  name: string;
  shortDescription: string;
  platform: string;
  status: 'Coming Soon' | 'Published';
  playStoreUrl?: string;
  features?: string[];
}

export interface ApproachCard {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
