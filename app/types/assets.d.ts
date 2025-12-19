import type { StaticImageData } from 'next/image';

export interface WorkItem {
  title: string;
  description: string;
  /**
   * Pode ser URL externa, path interno (/img.png) ou StaticImageData (import de imagem).
   */
  bgImage: string | StaticImageData;
}

export interface ServiceItem {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

export type Tools = StaticImageData;
