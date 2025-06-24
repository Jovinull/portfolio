'use client';

interface MobileMenuOverlayProps {
  isOpen: boolean;
}

const MobileMenuOverlay = ({ isOpen }: MobileMenuOverlayProps) => {
  return (
    <div
      className={`
        fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        transition-opacity duration-300
      `}
    />
  );
};

export default MobileMenuOverlay;
