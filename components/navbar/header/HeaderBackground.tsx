import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function HeaderBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden dark:hidden">
      <Image
        src={assets.header_bg_color}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-top-right
          scale-[1.35]
          opacity-100
        "
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/15 to-white" />
    </div>
  );
}
