import { assets } from '@/assets/assets';
import BaseButton from './BaseButton';
import Image from 'next/image';

export default function ActionButtons() {
  return (
    <div className="mt-6 flex flex-row items-center justify-center gap-4">
      <BaseButton
        href="/vitae.pdf"
        download
        variant="theme"
        endIcon={
          <>
            <Image
              src={assets.download_icon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 dark:hidden"
            />
            <Image
              src={assets.download_icon_dark}
              alt=""
              aria-hidden="true"
              className="hidden h-5 w-5 dark:block"
            />
          </>
        }
      >
        Meu Currículo
      </BaseButton>
    </div>
  );
}
