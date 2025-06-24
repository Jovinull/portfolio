import { assets } from '@/assets/assets';
import BaseButton from './BaseButton';

const ActionButtons = () => (
  <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
    <BaseButton href="#contact" variant="primary" icon={assets.right_arrow_white}>
      Fale comigo
    </BaseButton>
    <BaseButton href="/vitae.pdf" download variant="theme" icon={assets.download_icon}>
      Meu Currículo
    </BaseButton>
  </div>
);

export default ActionButtons;
