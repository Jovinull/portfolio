'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  const { isDark } = useThemeStore();

  return (
    <Link href="#top" className="cursor-pointer">
      <Image
        src={isDark ? assets.logo_dark : assets.logo}
        alt="Logo"
        className="w-24 md:w-28"
        priority
      />
    </Link>
  );
};

export default Logo;
