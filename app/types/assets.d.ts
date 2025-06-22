import { StaticImageData } from 'next/image';

export interface WorkItem {
  title: string;
  description: string;
  bgImage: string;
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
