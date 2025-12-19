'use client';

import { useEffect, useRef } from 'react';

import MenuLinks from '../header/MenuLinks';
import ContactButton from '../../buttons/ContactButton';
import MobileMenuHeader from './MobileMenuHeader';
import MobileMenuBackground from './MobileMenuBackground';

import type { MobileMenuContainerProps } from '@/app/types/components/mobileMenuContainer';

export default function MobileMenuContainer({ isOpen, closeMenu }: MobileMenuContainerProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Foco no menu ao abrir
  useEffect(() => {
    if (isOpen) menuRef.current?.focus();
  }, [isOpen]);

  // ESC fecha
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeMenu]);

  // Trava scroll do body quando menu está aberto
  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      tabIndex={-1}
      className={`bg-theme text-theme fixed top-0 right-0 z-[60] flex h-dvh w-72 transform flex-col gap-8 px-6 py-8 shadow-xl backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      // Fecha quando clicar em qualquer <a> dentro do menu
      onClick={e => {
        const target = e.target as HTMLElement;
        if (target.closest('a')) closeMenu();
      }}
    >
      <MobileMenuBackground />

      <MobileMenuHeader closeMenu={closeMenu} />

      <MenuLinks variant="mobile" />

      <ContactButton isFullWidth />
    </div>
  );
}
