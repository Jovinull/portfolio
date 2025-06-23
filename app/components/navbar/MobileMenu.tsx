'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/themeStore';
import Image from 'next/image';
import Link from 'next/link';
import MenuLinks from './MenuLinks';
import ContactButton from './ContactButton';
import ThemeToggle from './ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const { isDark } = useThemeStore();

  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-64 
        bg-white dark:bg-neutral-950 shadow-lg 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden z-[999] px-6 py-10 flex flex-col gap-8
      `}
    >
      {/* Logo */}
      <Link href="#top" onClick={closeMenu} className="w-fit">
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-24"
        />
      </Link>

      {/* Links */}
      <MenuLinks onClick={closeMenu} />

      <ContactButton />
      <ThemeToggle />
    </div>
  );
};

export default MobileMenu;
