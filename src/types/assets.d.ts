import type { StaticImageData } from 'next/image';

export type WorkItem = {
  title: string;
  description: string;
  bgImage: string;
  featured?: boolean;
};

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

export type TimelineEntryType =
  | 'work'
  | 'startup'
  | 'education'
  | 'research'
  | 'award'
  | 'publication'
  | 'patent'
  | 'community';

export type TimelineBadgeTone = 'accent' | 'neutral';

export type TimelineBadgeIcon = 'bolt' | 'cpu' | 'shield' | 'award' | 'star';

export type TimelineBadge = {
  label: string;
  tone?: TimelineBadgeTone;
  icon?: TimelineBadgeIcon;
};

export type TimelineEntry = {
  id: string;
  year: number;
  title: string;
  description: string;
  type: TimelineEntryType;
  org?: string;
  period?: string;
  highlight?: boolean;
  sort?: number;
  badges?: TimelineBadge[];
};