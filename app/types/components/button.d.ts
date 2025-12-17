import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

export interface BaseButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  icon?: StaticImageData;
  variant?: 'primary' | 'theme' | 'ghost';
  download?: boolean;
  isIconOnly?: boolean;
  className?: string;
}
