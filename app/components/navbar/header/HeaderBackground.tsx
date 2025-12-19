import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function HeaderBackground() {
  return (
    <div className="pointer-events-none absolute top-0 right-0 -z-10 w-11/12 translate-y-[-40%] scale-80 dark:hidden">
      <Image src={assets.header_bg_color} alt="" aria-hidden="true" className="w-full" priority />
    </div>
  );
}
