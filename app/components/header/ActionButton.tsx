'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ActionButtonProps } from '@/app/types/components/actionButton';

const ActionButton = ({
  href,
  children,
  icon,
  variant = 'primary',
  download = false,
}: ActionButtonProps) => {
  return (
    <Link href={href} download={download} className={`btn btn-${variant}`}>
      {children}
      <Image src={icon} alt="Ícone" className="w-4" />
    </Link>
  );
};

export default ActionButton;
