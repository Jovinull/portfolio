'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';

export default function Logo() {
  const isDark = useThemeStore((s) => s.isDark);

  // evita mismatch/flash estranho em alguns cenários de SSR/hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const src = mounted && isDark ? assets.logo_dark : assets.logo;

  return (
    <Link href="#top" className="inline-flex cursor-pointer items-center">
      <Image src={src} alt="Logo" className="w-24 md:w-28" priority />
    </Link>
  );
}
