'use client';

import { useRef, useEffect } from 'react';
import MenuLinks from '../header/MenuLinks';
import ContactButton from '../header/ContactButton';
import MobileMenuHeader from './MobileMenuHeader';

interface MobileMenuContainerProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenuContainer = ({ isOpen, closeMenu }: MobileMenuContainerProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Detecta clique fora para fechar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <div
      ref={menuRef}
      className={`bg-theme text-theme fixed top-0 right-0 z-[999] flex h-full w-64 transform flex-col gap-8 px-6 py-8 shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
    >
      <MobileMenuHeader closeMenu={closeMenu} />
      <MenuLinks onClick={closeMenu} />
      <ContactButton />
    </div>
  );
};

export default MobileMenuContainer;
