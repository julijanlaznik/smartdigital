
import { Project, Step, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Porsche Performance',
    type: 'Automotive',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fast-driving-on-a-highway-4112-large.mp4',
    isVertical: false,
  },
  {
    id: '2',
    title: 'Lifestyle Brand Launch',
    type: 'Reels',
    imageUrl: 'https://picsum.photos/400/800?random=2',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-running-on-the-beach-4148-large.mp4',
    isVertical: true,
  },
  {
    id: '3',
    title: 'Urban Explorer',
    type: 'Brand Content',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-walking-in-a-city-at-night-4228-large.mp4',
    isVertical: false,
  },
  {
    id: '4',
    title: 'Tech Gadget Intro',
    type: 'Commercial',
    imageUrl: 'https://picsum.photos/400/800?random=4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-4217-large.mp4',
    isVertical: true,
  },
  {
    id: '5',
    title: 'Watch Collection',
    type: 'Photo',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    isVertical: false,
  },
  {
    id: '6',
    title: 'Modern Workspace',
    type: 'Brand Content',
    imageUrl: 'https://picsum.photos/400/800?random=6',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-at-a-laptop-in-a-bright-room-4235-large.mp4',
    isVertical: true,
  },
];

export const PROCESS_STEPS: Step[] = [
  {
    number: '01',
    title: 'Strategie',
    description: 'Nezačínáme točit bez plánu. Definujeme cíle, cílovku a komunikační linku pro maximální konverzi.',
  },
  {
    number: '02',
    title: 'Produkce',
    description: 'Vybavení nejvyšší třídy a zkušený tým. Realizujeme foto a video session s důrazem na každý detail.',
  },
  {
    number: '03',
    title: 'Postprodukce',
    description: 'Zde se rodí emoce. Cinematic grading, sound design a dynamický střih, který udrží pozornost.',
  },
  {
    number: '04',
    title: 'Distribuce',
    description: 'Dodáváme hotové formáty připravené pro Reels, TikTok, YouTube nebo TV kampaně.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jiří D.',
    role: 'CEO',
    company: 'ČVB',
    content: 'Spolupráce se Smart Digital posunula naši vizuální prezentaci o úroveň výš. Jejich videa nám generují reálné leady.',
    logo: 'https://picsum.photos/100/40?random=10',
  },
  {
    name: 'Vojta N.',
    role: 'Marketing Director',
    company: 'Spectra wash',
    content: 'Konečně partner, který nad obsahem přemýšlí strategicky. Nejsou to jen hezké obrázky, ale obsah, který prodává.',
    logo: 'https://picsum.photos/100/40?random=11',
  },
];
