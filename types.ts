
export type SectionType = 'landing' | 'portals' | 'films' | 'ads' | 'space' | 'events' | 'about' | 'contact';

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  image: string;
  videoUrl?: string;
  category: 'film' | 'ad' | 'space' | 'event';
  year: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}
