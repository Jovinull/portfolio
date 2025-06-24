'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/themeStore';
import Image from 'next/image';

const MobileMenuBackground = () => {
  const { isDark } = useThemeStore();

  if (isDark) return null;

  return (
    <div className="fixed top-0 right-0 -z-10 h-full w-full overflow-hidden">
      <Image
        src={assets.header_bg_color}
        alt="Mobile Menu Background"
        className="h-full w-full scale-125 object-cover opacity-100"
      />
    </div>
  );
};

export default MobileMenuBackground;
