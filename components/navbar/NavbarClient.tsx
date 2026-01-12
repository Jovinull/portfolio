'use client';

import { useEffect, useState } from 'react';

import ContactButton from '../buttons/ContactButton';
import ThemeToggle from '../buttons/ThemeToggle';
import MenuToggleButton from '../buttons/MenuToggleButton';
import MobileMenu from './mobileMenu/MobileMenu';

export default function NavbarClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(v => !v);
  const closeMenu = () => setMenuOpen(false);

  // Fecha ao trocar para desktop (evita menu preso aberto)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="flex items-center gap-4">
      {/* Botões desktop */}
      <div className="hidden items-center gap-4 md:flex">
        <ContactButton />
        <ThemeToggle />
      </div>

      {/* Botão mobile */}
      <div className="md:hidden">
        <MenuToggleButton isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Menu Mobile */}
      <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
    </div>
  );
}
