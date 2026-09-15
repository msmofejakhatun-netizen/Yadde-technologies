import { ProductItem, ApproachCard } from '../types';

export const COMPANY_INFO = {
  name: 'YADDE TECHNOLOGIES',
  shortName: 'Yadde Technologies',
  tagline: 'SOFTWARE & DIGITAL SOLUTIONS',
  domain: 'yaddetechnologies.in',
  url: 'https://yaddetechnologies.in/',

  // Hero Section Copy (strictly matching user specification)
  heroHeadline: 'YADDE TECHNOLOGIES',
  heroSubtitle: 'Software & Digital Solutions',
  heroDescription:
    'Yadde Technologies develops and publishes its own software products and digital applications designed to solve practical everyday business and technology needs.',

  // About Section Copy
  aboutTitle: 'About Yadde Technologies',
  aboutParagraph1:
    'Yadde Technologies is a software and technology company focused on developing and publishing its own digital products and applications.',
  aboutParagraph2:
    'Our goal is to create practical, reliable and easy-to-use technology that helps people and businesses handle everyday digital tasks more efficiently.',

  // Official Organization & Business Verification Details
  // Keep consistent with Google Payments profile & Dun & Bradstreet (D-U-N-S) organization record.
  legalName: '[ENTER EXACT LEGAL COMPANY NAME]',
  registeredAddress: '[ENTER EXACT REGISTERED ADDRESS]',
  email: '[OFFICIAL COMPANY EMAIL]',
  phone: '[OFFICIAL COMPANY PHONE]',

  // Contact Information
  contactTitle: 'Contact Yadde Technologies',
  contactDescription:
    'For business enquiries, product-related questions or general information, please contact Yadde Technologies.',

  // Copyright
  copyright: '© 2026 Yadde Technologies. All Rights Reserved.',
};

/**
 * Our Approach - 3 Core Cards
 */
export const APPROACH_CARDS: ApproachCard[] = [
  {
    title: 'Innovation',
    description: 'Building useful digital products with modern technology.',
  },
  {
    title: 'Simplicity',
    description: 'Creating software that is practical and easy to use.',
  },
  {
    title: 'Reliability',
    description: 'Focusing on dependable and maintainable products.',
  },
];

/**
 * Products Data Structure
 * Easily editable array so future products and Android apps can be added
 * without modifying UI layout or design.
 */
export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'smart-billing',
    name: 'Smart billing',
    shortDescription:
      'Multiplatform billing and inventory management application designed for practical everyday retail operations.',
    platform: 'Android & Desktop',
    status: 'Coming Soon',
    playStoreUrl: undefined, // Add official Google Play URL when published
    features: [
      'Multiplatform synchronized ledger and point-of-sale workflow',
      'Designed for everyday retail and local merchant billing efficiency',
      'Offline-resilient data handling and local transaction safety',
    ],
  },
];
