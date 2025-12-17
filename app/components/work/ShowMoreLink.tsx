import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function ShowMoreLink() {
  return (
    <a
      href=""
      className="hover:bg-lightHover mx-auto my-20 flex w-max items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-700 px-10 py-3 text-gray-700 duration-500 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-white/10"
    >
      Mostrar Mais
      <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4 dark:hidden" />
      <Image
        src={assets.right_arrow_bold_dark}
        alt="Right arrow"
        className="hidden w-4 dark:block"
      />
    </a>
  );
}
