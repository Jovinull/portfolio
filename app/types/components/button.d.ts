import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface BaseButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: StaticImageData;
  variant?: 'primary' | 'theme' | 'ghost';
  download?: boolean;
  isIconOnly?: boolean;
  className?: string;
}
