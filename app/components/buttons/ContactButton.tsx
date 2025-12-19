import clsx from 'clsx';
import BaseButton from './BaseButton';

type ContactButtonProps = {
  isFullWidth?: boolean;
  href?: string; // default: #contact
  label?: string; // default: "Fale comigo"
};

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
