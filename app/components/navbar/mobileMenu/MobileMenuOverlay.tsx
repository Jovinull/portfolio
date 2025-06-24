'use client';

import { MobileMenuOverlayProps } from '@/app/types/components/mobileMenuOverlay';

const MobileMenuOverlay = ({ isOpen }: MobileMenuOverlayProps) => {
  return (
    <div
      className={`fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm md:hidden ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      } transition-opacity duration-300`}
    />
  );
};

export default MobileMenuOverlay;
