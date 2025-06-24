'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/app/store/useThemeStore';

import HeaderBackground from './header/HeaderBackground';
import Logo from './header/Logo';
import MenuLinks from './header/MenuLinks';
import ContactButton from '../buttons/ContactButton';
import ThemeToggle from '../buttons/ThemeToggle';
import MobileMenu from './mobileMenu/MobileMenu';
import MenuToggleButton from '../buttons/MenuToggleButton';

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

      <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
        <nav className="mx-auto grid max-w-[1280px] grid-cols-2 items-center px-6 py-5 md:grid-cols-3 md:px-8">
          {/* Esquerda */}
          <div className="justify-self-start">
            <Logo />
          </div>

          {/* Centro */}
          <div className="hidden justify-self-center md:flex">
            <MenuLinks />
          </div>

          {/* Direita */}
          <div className="flex items-center gap-4 justify-self-end">
            {/* Botões desktop */}
            <div className="hidden items-center gap-4 md:flex">
              <ContactButton />
              <ThemeToggle />
            </div>

            {/* Botão mobile */}
            <div className="md:hidden">
              <MenuToggleButton isOpen={menuOpen} toggleMenu={toggleMenu} />
            </div>
          </div>

          {/* Menu Mobile */}
          <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
