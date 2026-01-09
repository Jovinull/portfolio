'use client';

import { FiMenu, FiX } from 'react-icons/fi';
import BaseButton from './BaseButton';
import type { MenuToggleButtonProps } from '@/src/types/components/menu';

export default function MenuToggleButton({ isOpen, toggleMenu }: MenuToggleButtonProps) {
  const iconNode = isOpen ? (
    <FiX className="text-theme h-5 w-5" aria-hidden="true" />
  ) : (
    <FiMenu className="text-theme h-5 w-5" aria-hidden="true" />
  );

  return (
    <BaseButton
      onClick={toggleMenu}
      isIconOnly
      ariaLabel={isOpen ? 'Fechar menu' : 'Abrir menu'}
      variant="ghost"
      className="border-theme bg-theme/70 rounded-md border p-2 shadow-sm backdrop-blur-md hover:scale-105 hover:opacity-80 md:hidden"
      startIcon={iconNode}
    />
  );
}
