import { AppItem, CompanyInfo } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'YADDE TECHNOLOGIES',
  brandFirst: 'YADDE',
  brandSecond: 'TECHNOLOGIES',
  tagline: 'Simple Apps for Everyday Needs',
  websiteUrl: 'https://yaddetechnologies.in/',
  supportEmail: 'support@yaddetechnologies.in',
  heroHeadline: 'Simple Apps for Everyday Needs',
  heroText:
    'YADDE TECHNOLOGIES is building simple and useful mobile applications designed to make everyday tasks easier.',
  aboutText:
    'YADDE TECHNOLOGIES focuses on creating simple and useful mobile applications for everyday users and businesses.',
  comingSoonHeading: 'Something New Is Coming',
  comingSoonText:
    'Our applications are currently under development. Stay tuned for their upcoming release.',
  supportText:
    'For questions, feedback or support regarding YADDE TECHNOLOGIES and its applications, please contact us.',
  copyright: '© 2026 YADDE TECHNOLOGIES. All rights reserved.',
};

export const APPS_LIST: AppItem[] = [
  {
    id: 'smartbilling',
    name: 'SmartBilling',
    category: 'Billing & Invoicing',
    status: 'COMING SOON',
    description:
      'SmartBilling is a simple billing and invoice management application being developed to help businesses and shopkeepers manage their billing needs conveniently.',
    iconType: 'billing',
  },
  {
    id: 'train-kahan-hai',
    name: 'Train Kahan Hai',
    category: 'Railway Information',
    status: 'COMING SOON',
    description:
      'Train Kahan Hai is an upcoming railway information application being developed to help users access useful train-related information conveniently.',
    iconType: 'railway',
  },
];
