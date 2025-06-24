import ActionButton from './ActionButton';
import { assets } from '@/assets/assets';

const ActionButtons = () => (
  <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
    <ActionButton href="#contact" variant="primary" icon={assets.right_arrow_white}>
      Fale comigo
    </ActionButton>
    <ActionButton href="/vitae.pdf" download variant="theme" icon={assets.download_icon}>
      Meu Currículo
    </ActionButton>
  </div>
);

export default ActionButtons;
