import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  children: ReactNode;
  icon: StaticImageData;
  variant?: 'primary' | 'theme';
  download?: boolean;
}

const ActionButton = ({ href, children, icon, variant = 'primary', download = false }: Props) => {
  return (
    <Link href={href} download={download} className={`btn btn-${variant}`}>
      {children}
      <Image src={icon} alt="Ícone" className="w-4" />
    </Link>
  );
};

export default ActionButton;
