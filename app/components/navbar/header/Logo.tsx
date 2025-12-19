import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';

export default function Logo() {
  return (
    <Link href="#top" className="inline-flex cursor-pointer items-center">
      <Image src={assets.logo} alt="Logo" className="w-24 md:w-28 dark:hidden" priority />
      <Image
        src={assets.logo_dark}
        alt="Logo"
        className="hidden w-24 md:w-28 dark:block"
        priority
      />
    </Link>
  );
}
