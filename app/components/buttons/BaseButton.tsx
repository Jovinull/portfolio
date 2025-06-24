'use client';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import { BaseButtonProps } from '@/app/types/components/button';

const BaseButton = ({
  href,
  onClick,
  children,
  icon,
  variant = 'theme',
  download = false,
  isIconOnly = false,
  className = '',
}: BaseButtonProps) => {
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
