'use client';

import Link from 'next/link';

interface Props {
  onClick?: () => void;
}

const MenuLinks = ({ onClick }: Props) => {
  const links = ['Início', 'Sobre', 'Serviços', 'Projetos', 'Fale Comigo'];

  return (
    <ul className="flex flex-col md:flex-row gap-6 lg:gap-8">
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
