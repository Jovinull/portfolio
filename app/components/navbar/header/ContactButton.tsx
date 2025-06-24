'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <Link
      href="#contact"
      className="
        flex items-center gap-2
        px-6 py-2
        rounded-full
        backdrop-blur-md shadow-sm
        border border-theme
        text-theme
        hover:text-[var(--color-accent)]
        transition-colors
      "
    >
      Contato
      <Image src={assets.arrow_icon} alt="seta" className="w-3" />
    </Link>
  );
};

export default ContactButton;
