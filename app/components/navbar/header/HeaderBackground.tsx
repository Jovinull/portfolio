'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import Image from 'next/image';

const HeaderBackground = () => {
  const { isDark } = useThemeStore();

  if (isDark) return null;

  return (
    <div className="absolute top-0 right-0 -z-10 w-11/12 translate-y-[-40%] scale-80">
      <Image src={assets.header_bg_color} alt="bg" className="w-full" />
    </div>
  );
};

export default HeaderBackground;
