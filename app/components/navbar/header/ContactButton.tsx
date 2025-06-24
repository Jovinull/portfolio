'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <Link
      href="#contact"
      className="border-theme text-theme flex items-center gap-2 rounded-full border px-6 py-2 shadow-sm backdrop-blur-md transition-colors hover:text-[var(--color-accent)]"
    >
      Contato
      <Image src={assets.arrow_icon} alt="seta" className="w-3" />
    </Link>
  );
};

export default ContactButton;
