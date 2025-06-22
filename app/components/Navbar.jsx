'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white">
      <nav className="flex items-center justify-between px-6 md:px-8 py-5 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link href="#top" className="cursor-pointer flex items-center">
          <Image
            src={assets.logo}
            alt="Logo do Jovino"
            className="w-24 md:w-28"
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-10">
          <li>
            <Link href="#top" className="hover:text-neutral-500 transition-colors">
              Início
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-neutral-500 transition-colors">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-neutral-500 transition-colors">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="#work" className="hover:text-neutral-500 transition-colors">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-neutral-500 transition-colors">
              Fale Comigo
            </Link>
          </li>
        </ul>

        {/* Botão Desktop */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="flex items-center gap-2 border border-neutral-800 px-6 py-2 rounded-full hover:bg-neutral-100 transition-all"
          >
            Contato
            <Image
              src={assets.arrow_icon}
              alt="Arrow icon"
              className="w-3"
            />
          </Link>
        </div>

        {/* Ícone Hamburguer Mobile */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <Image
            src={menuOpen ? assets.close_black : assets.menu_black}
            alt="Menu"
            className="w-6 h-6"
          />
        </button>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white px-6 py-4 shadow-md md:hidden z-50">
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  href="#top"
                  onClick={closeMenu}
                  className="hover:text-neutral-500 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={closeMenu}
                  className="hover:text-neutral-500 transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={closeMenu}
                  className="hover:text-neutral-500 transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  onClick={closeMenu}
                  className="hover:text-neutral-500 transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="hover:text-neutral-500 transition-colors"
                >
                  Fale Comigo
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center gap-2 border border-neutral-800 px-5 py-2 rounded-full hover:bg-neutral-100 transition-all w-fit"
                >
                  Contato
                  <Image
                    src={assets.right_arrow}
                    alt="Arrow icon"
                    className="w-3"
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
