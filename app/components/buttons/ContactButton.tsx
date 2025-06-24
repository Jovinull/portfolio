import { assets } from '@/assets/assets';
import BaseButton from './BaseButton';

const ContactButton = ({ isFullWidth = false }: { isFullWidth?: boolean }) => (
  <BaseButton
    href="#contact"
    variant="theme"
    icon={assets.arrow_icon}
    className={isFullWidth ? 'w-full justify-center' : ''}
  >
    Contato
  </BaseButton>
);

export default ContactButton;
