'use client';

import { useEffect, useRef } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);

  // Fechar clicando fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          transition-opacity duration-300
        `}
      />

      {/* Menu */}
      <div
        ref={menuRef}
        className={`
          fixed top-0 right-0 h-full w-64 z-[999]
          px-6 py-8 flex flex-col gap-8
          shadow-lg backdrop-blur-md bg-theme text-theme md:hidden
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
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
