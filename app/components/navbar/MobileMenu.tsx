'use client';

import MobileMenuOverlay from './MobileMenuOverlay';
import MobileMenuContainer from './MobileMenuContainer';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  return (
    <>
      <MobileMenuOverlay isOpen={isOpen} />
      <MobileMenuContainer isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
};

export default MobileMenu;
