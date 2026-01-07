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

export type TimelineEntryType =
  | 'work'
  | 'startup'
  | 'education'
  | 'research'
  | 'award'
  | 'publication'
  | 'patent'
  | 'community';

export type TimelineEntry = {
  id: string;
  year: number;
  title: string;
  description: string;
  type: TimelineEntryType;

  /** Organização/empresa/instituição (curto) */
  org?: string;

  /** Período (curto e humano) */
  period?: string;

  /**
   * Técnica anti-“monstro”:
   * - no modo padrão, mostramos só highlights
   * - o usuário pode alternar pra "Tudo"
   */
  highlight?: boolean;

  /**
   * Ordem dentro do ano (maior = mais em cima).
   * Ajuda a deixar o ano “curado” no modo Destaques.
   */
  sort?: number;
};
