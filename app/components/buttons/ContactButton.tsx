import { assets } from '@/assets/assets';
import BaseButton from './BaseButton';

const ContactButton = () => (
  <BaseButton href="#contact" variant="theme" icon={assets.arrow_icon}>
    Contato
  </BaseButton>
);

export default ContactButton;
