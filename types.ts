
export type ContentType = 'Video' | 'Reels' | 'Commercial' | 'Automotive' | 'Brand Content' | 'Photo';

export interface Project {
  id: string;
  title: string;
  type: ContentType;
  videoUrl?: string;
  imageUrl: string;
  isVertical: boolean;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  logo: string;
}
