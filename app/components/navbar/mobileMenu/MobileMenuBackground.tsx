'use client';

import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function MobileMenuBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
      <Image
        src={assets.header_bg_color}
        alt=""
        aria-hidden="true"
        className="h-full w-full scale-125 object-cover opacity-100"
        priority
      />
    </div>
  );
}
