'use client';

import Link from 'next/link';

interface Props {
  onClick?: () => void;
}

const MenuLinks = ({ onClick }: Props) => {
  const links = ['Início', 'Sobre', 'Serviços', 'Projetos', 'Fale Comigo'];

  return (
    <ul
      className={`
        flex flex-col md:flex-row gap-6 lg:gap-8
        md:items-center items-start
        md:rounded-full md:px-8 md:py-3
        md:bg-neutral-100 md:dark:bg-neutral-900
        md:backdrop-blur-md md:shadow-sm
      `}
    >
      {links.map((item) => (
        <li key={item}>
          <Link
            href={`#${item === 'Início' ? 'top' : item.toLowerCase().replace(' ', '')}`}
            onClick={onClick}
            className="
              text-neutral-900 dark:text-neutral-100
              hover:text-indigo-600 dark:hover:text-indigo-400
              transition-colors
            "
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
