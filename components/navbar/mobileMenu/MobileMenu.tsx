'use client';

import MobileMenuOverlay from './MobileMenuOverlay';
import MobileMenuContainer from './MobileMenuContainer';

import type { MobileMenuProps } from '@/types/components/mobileMenu';

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  return (
    <>
      <MobileMenuOverlay isOpen={isOpen} onClose={closeMenu} />
      <MobileMenuContainer isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}
