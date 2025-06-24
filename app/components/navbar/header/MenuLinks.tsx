'use client';

import Link from 'next/link';

interface Props {
  onClick?: () => void;
}

const MenuLinks = ({ onClick }: Props) => {
  const links = ['Início', 'Sobre', 'Serviços', 'Projetos', 'Fale Comigo'];

  return (
    <ul
      className={`md:bg-theme border-theme text-theme flex flex-col items-start gap-6 md:flex-row md:items-center md:rounded-full md:border md:px-8 md:py-3 md:shadow-sm md:backdrop-blur-md lg:gap-8`}
    >
      {links.map(item => (
        <li key={item}>
          <Link
            href={`#${item === 'Início' ? 'top' : item.toLowerCase().replace(' ', '')}`}
            onClick={onClick}
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
