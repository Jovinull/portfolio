'use client';

import MobileMenuOverlay from './MobileMenuOverlay';
import MobileMenuContainer from './MobileMenuContainer';

import { MobileMenuProps } from '@/app/types/components/mobileMenu';

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  return (
    <>
      <MobileMenuOverlay isOpen={isOpen} />
      <MobileMenuContainer isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
};

export default MobileMenu;
