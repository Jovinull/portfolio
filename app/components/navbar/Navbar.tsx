'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/app/store/themeStore';

import HeaderBackground from './header/HeaderBackground';
import Logo from './header/Logo';
import MenuLinks from './header/MenuLinks';
import ContactButton from './header/ContactButton';
import ThemeToggle from './header/ThemeToggle';
import MobileMenu from './mobileMenu/MobileMenu';
import MenuToggleButton from './header/MenuToggleButton';

const Navbar = () => {
  const { setTheme } = useThemeStore();
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
      <HeaderBackground />

      <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
        <nav className="flex items-center justify-between px-6 md:px-8 py-5 max-w-[1280px] mx-auto">
          <Logo />

          {/* Menu Desktop */}
          <div className="hidden md:flex">
            <MenuLinks />
          </div>

          {/* Botões Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <ContactButton />
            <ThemeToggle />
          </div>

          {/* Ícone Mobile */}
          <MenuToggleButton isOpen={menuOpen} toggleMenu={toggleMenu} />

          {/* Menu Mobile */}
          <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
