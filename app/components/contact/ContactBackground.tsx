import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function ContactBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden dark:hidden">
      <Image
        src={assets.footer_bg_color}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.25] opacity-100"
      />

      {/* Véu para manter leitura boa */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white" />
    </div>
  );
}
