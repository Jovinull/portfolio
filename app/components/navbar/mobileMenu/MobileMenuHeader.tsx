'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../../buttons/ThemeToggle';

import { MobileMenuHeaderProps } from '@/app/types/components/mobileMenuHeader';

const MobileMenuHeader = ({ closeMenu }: MobileMenuHeaderProps) => {
  const { isDark } = useThemeStore();

  return (
    <div className="flex items-center justify-between">
      <Link href="#top" onClick={closeMenu}>
        <Image src={isDark ? assets.logo_dark : assets.logo} alt="Logo" className="w-24" />
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default MobileMenuHeader;
