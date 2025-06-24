import { assets } from '@/assets/assets';
import Image from 'next/image';

const Greeting = () => (
  <h3 className="font-Ovo mb-3 flex items-end gap-2 text-xl md:text-2xl">
    Olá! Eu sou Felipe Jovino
    <Image src={assets.hand_icon} alt="Ícone de mão acenando" className="w-6" />
  </h3>
);

export default Greeting;
