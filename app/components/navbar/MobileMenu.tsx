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

  if (!isOpen) return null; // Não renderiza nada se estiver fechado

  return (
    <>
      {/* Overlay que fecha ao clicar fora */}
      <div
        onClick={closeMenu}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden"
      />

      {/* Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 z-[999]
          px-6 py-8 flex flex-col gap-8
          transform transition-transform duration-300 ease-in-out
          shadow-lg backdrop-blur-md
          bg-theme text-theme
        `}
      >
        {/* Topo */}
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

        <MenuLinks onClick={closeMenu} />
        <ContactButton />
      </div>
    </>
  );
};

export default MobileMenu;
