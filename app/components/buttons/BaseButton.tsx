'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

interface Props {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: StaticImageData;
  variant?: 'primary' | 'theme' | 'ghost';
  download?: boolean;
  isIconOnly?: boolean;
  className?: string;
}

const BaseButton = ({
  href,
  onClick,
  children,
  icon,
  variant = 'theme',
  download = false,
  isIconOnly = false,
  className = '',
}: Props) => {
  const classes = clsx('btn', `btn-${variant}`, isIconOnly ? 'px-3 py-3' : 'px-6 py-2', className);

  const content = (
    <>
      {children}
      {icon && <Image src={icon} alt="icon" className="w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} download={download} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default BaseButton;
