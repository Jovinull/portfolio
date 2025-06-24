import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface ActionButtonProps {
  href: string;
  children: ReactNode;
  icon: StaticImageData;
  variant?: 'primary' | 'theme';
  download?: boolean;
}
