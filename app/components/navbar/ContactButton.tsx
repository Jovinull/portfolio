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
        px-6 py-2 rounded-full border
        bg-white border-indigo-600 text-indigo-900 hover:bg-indigo-50
        dark:bg-neutral-950 dark:border-indigo-400 dark:text-indigo-100 dark:hover:bg-indigo-800
        transition-all
      "
    >
      Contato
      <Image src={assets.arrow_icon} alt="seta" className="w-3" />
    </Link>
  );
};

export default ContactButton;
