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
      <MobileMenuHeader closeMenu={closeMenu} />
      <MenuLinks onClick={closeMenu} />
      <ContactButton />
    </div>
  );
};

export default MobileMenuContainer;
