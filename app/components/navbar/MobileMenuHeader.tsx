'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/themeStore';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

interface MobileMenuHeaderProps {
  closeMenu: () => void;
}

const MobileMenuHeader = ({ closeMenu }: MobileMenuHeaderProps) => {
  const { isDark } = useThemeStore();

  return (
    <div className="flex items-center justify-between">
      <Link href="#top" onClick={closeMenu}>
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-24"
        />
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default MobileMenuHeader;
