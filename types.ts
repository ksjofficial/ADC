
export interface NavItem {
  label: string;
  href: string;
}

export interface Champion {
  name: string;
  role: string;
  country: string;
  countryCode: string;
  imageUrl: string;
  bio: string;
  category: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Activity {
  id: number;
  title: string;
  description: string;
}
