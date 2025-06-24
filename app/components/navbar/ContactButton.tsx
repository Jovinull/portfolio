'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <Link href="#contact" className="btn btn-theme">
      Contato
      <Image src={assets.arrow_icon} alt="seta" className="w-3" />
    </Link>
  );
};

export default ContactButton;
