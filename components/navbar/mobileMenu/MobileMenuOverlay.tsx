'use client';

import type { MobileMenuOverlayProps } from '@/types/components/mobileMenuOverlay';

export default function MobileMenuOverlay({ isOpen, onClose }: MobileMenuOverlayProps) {
  return (
    <button
      type="button"
      aria-hidden={!isOpen}
      tabIndex={isOpen ? 0 : -1}
      onClick={isOpen ? onClose : undefined}
      className={`fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm md:hidden ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      } transition-opacity duration-300`}
    />
  );
}
