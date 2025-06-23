'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/app/store/themeStore';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

import MenuLinks from './MenuLinks';
import ContactButton from './ContactButton';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { isDark, setTheme } = useThemeStore();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme === 'dark' || (!theme && prefersDark));
  }, [setTheme]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Background decorativo */}
      {!isDark && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] scale-120">
          <Image src={assets.header_bg_color} alt="bg" className="w-full" />
        </div>
      )}

      <header className="w-full fixed top-0 left-0 z-50">
        <nav className="flex items-center justify-between px-6 md:px-8 py-5 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link href="#top" className="cursor-pointer">
            <Image
              src={isDark ? assets.logo_dark : assets.logo}
              alt="Logo"
              className="w-24 md:w-28"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex">
            <MenuLinks />
          </div>

          {/* Botões */}
          <div className="hidden md:flex items-center gap-4">
            <ContactButton />
            <ThemeToggle />
          </div>

          {/* Ícone Mobile */}
          <button onClick={toggleMenu} className="md:hidden">
            <Image
              src={
                menuOpen
                  ? isDark
                    ? assets.close_white
                    : assets.close_black
                  : isDark
                  ? assets.menu_white
                  : assets.menu_black
              }
              alt="menu"
              className="w-6 h-6"
            />
          </button>

          {/* Menu Mobile */}
          <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
