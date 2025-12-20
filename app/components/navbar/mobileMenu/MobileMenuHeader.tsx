'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ThemeToggle from '../../buttons/ThemeToggle';
import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';

import type { MobileMenuHeaderProps } from '@/app/types/components/mobileMenuHeader';

export default function MobileMenuHeader({ closeMenu }: MobileMenuHeaderProps) {
  const isDark = useThemeStore((s) => s.isDark);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const logoSrc = mounted && isDark ? assets.logo_dark : assets.logo;

  return (
    <div className="flex items-center justify-between">
      <Link href="#top" onClick={closeMenu} className="inline-flex items-center">
        <Image src={logoSrc} alt="Logo" className="w-24" priority />
      </Link>

      <ThemeToggle />
    </div>
  );
}
