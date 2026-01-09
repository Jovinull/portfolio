import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

export interface BaseButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';

  children?: ReactNode;

  icon?: StaticImageData;
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  variant?: 'primary' | 'theme' | 'ghost' | 'solid';

  download?: boolean;

  isIconOnly?: boolean;
  ariaLabel?: string;

  className?: string;
  disabled?: boolean;

  target?: '_self' | '_blank';
  rel?: string;
}
