import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function Greeting() {
  return (
    <h3 className="font-display mb-3 flex items-end justify-center gap-2 text-xl md:text-2xl">
      Olá! Eu sou Felipe Jovino
      <Image src={assets.hand_icon} alt="" aria-hidden="true" className="w-6" />
    </h3>
  );
}
