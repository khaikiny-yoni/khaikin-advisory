export const ROUTE_PATHS = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  MORTGAGE: '/mortgage',
  FAMILY_FINANCE: '/family-finance',
  CREDIT: '/credit',
  TESTIMONIALS: '/testimonials',
  CONTACT: '/contact',
} as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  path: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export const COMPANY_INFO = {
  name: 'KHAIKIN - Private Advisory',
  slogan: 'מזהים את ההזדמנות - משיגים את התוצאה',
  advisor: {
    name: 'יהונתן חייקין',
    title: 'יועץ פיננסי',
    experience: 'ניסיון מ-2004',
    education: 'מסלול מקצועי: 2004 - ייעוץ משכנתאות | 7 שנים בבנק מוביל | 2011 - ביטוחי משכנתאות | 2022 - ייעוץ כלכלת משפחה',
  },
  contact: {
    phone: '054-7295318',
    email: 'yoni@yoni-k.com',
    whatsapp: '972547295318',
    address: 'רחוב רפאל דלה פרגולה 25, ירושלים, ישראל',
  },
  social: {
    facebook: '',
    linkedin: '',
    instagram: '',
  },
  hours: {
    weekdays: 'ראשון - חמישי: 09:00 - 18:00',
    friday: 'שישי: 09:00 - 13:00',
    saturday: 'שבת: סגור',
  },
} as const;
