'use client';

import Image from 'next/image';
import Link from 'next/link';

import ThemeToggle from '../../buttons/ThemeToggle';
import { assets } from '@/assets/assets';

import type { MobileMenuHeaderProps } from '@/app/types/components/mobileMenuHeader';

export default function MobileMenuHeader({ closeMenu }: MobileMenuHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <Link href="#top" onClick={closeMenu} className="inline-flex items-center">
        <Image src={assets.logo} alt="Logo" className="w-24 dark:hidden" priority />
        <Image src={assets.logo_dark} alt="Logo" className="hidden w-24 dark:block" priority />
      </Link>

      <ThemeToggle />
    </div>
  );
}
