import clsx from 'clsx';
import BaseButton from './BaseButton';
import type { ContactButtonProps } from '@/types/components/contactButton';

export default function ContactButton({
  isFullWidth = false,
  href = '#contact',
  label = 'Fale comigo',
}: ContactButtonProps) {
  return (
    <BaseButton
      href={href}
      variant="theme"
      className={clsx(isFullWidth && 'w-full justify-center')}
    >
      {label}
    </BaseButton>
  );
}
