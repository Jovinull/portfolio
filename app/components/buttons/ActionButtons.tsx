import BaseButton from './BaseButton';
import { FiDownload } from 'react-icons/fi';
import { useThemeStore } from '@/app/store/useThemeStore';

export default function ActionButtons() {
  const isDark = useThemeStore((s) => s.isDark);

  return (
    <div className="mt-6 flex flex-row items-center justify-center gap-4">
      <BaseButton
        href="/vitae.pdf"
        download
        variant="theme"
        endIcon={
          <FiDownload
            aria-hidden="true"
            className={isDark ? 'h-5 w-5 text-white' : 'h-5 w-5 text-black'}
          />
        }
      >
        Meu Currículo
      </BaseButton>
    </div>
  );
}
