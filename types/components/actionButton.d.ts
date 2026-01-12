import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

export interface ActionButtonProps {
  href: string;
  children: ReactNode;
  icon: StaticImageData;
  variant?: 'primary' | 'theme';
  download?: boolean;
}
