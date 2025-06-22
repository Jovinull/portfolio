'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Carrega tema salvo ou sistema
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Background decorativo apenas no modo claro */}
      {!isDark && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] scale-120">
          <Image
            src={assets.header_bg_color}
            alt="Background decorativo"
            className="w-full"
          />
        </div>
      )}

      <header className="w-full fixed top-0 left-0 z-50">
        <nav className="flex items-center justify-between px-6 md:px-8 py-5 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link href="#top" className="cursor-pointer flex items-center">
            <Image
              src={isDark ? assets.logo_dark : assets.logo}
              alt="Logo"
              className="w-24 md:w-28"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <ul
            className="
              hidden md:flex items-center gap-6 lg:gap-8 
              rounded-full px-12 py-3 
              bg-neutral-100 dark:bg-neutral-900
              backdrop-blur-md shadow-sm
            "
          >
            {['Início', 'Sobre', 'Serviços', 'Projetos', 'Fale Comigo'].map((item, i) => (
              <li key={i}>
                <Link
                  href={`#${item === 'Início' ? 'top' : item.toLowerCase().replace(' ', '')}`}
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

          {/* Botões lado direito */}
          <div className="hidden md:flex items-center gap-4">
            {/* Botão Contato */}
            <Link
              href="#contact"
              className="
                flex items-center gap-2 
                px-6 py-2 rounded-full
                border
                bg-white border-indigo-600 text-indigo-900 hover:bg-indigo-50
                dark:bg-neutral-950 dark:border-indigo-400 dark:text-indigo-100 dark:hover:bg-indigo-800
                transition-all
              "
            >
              Contato
              <Image
                src={assets.arrow_icon}
                alt="Ícone de seta"
                className="w-3"
              />
            </Link>
            {/* Botão Tema */}
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
            >
              <Image
                src={isDark ? assets.sun_icon : assets.moon_icon}
                alt="Tema"
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* Ícone Hamburguer Mobile */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <Image
              src={
                menuOpen
                  ? isDark
                    ? assets.close_white
                    : assets.close_black
                  : isDark
                  ? assets.menu_white
                  : assets.menu_black
              }
              alt="Menu"
              className="w-6 h-6"
            />
          </button>

          {/* Menu Mobile com slide lateral */}
          <div
            className={`fixed top-0 right-0 h-full w-64 
            bg-white dark:bg-neutral-950 shadow-lg 
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden z-[999] px-6 py-10 flex flex-col gap-8`}
          >
            {/* Logo Mobile */}
            <Link href="#top" onClick={closeMenu} className="w-fit">
              <Image
                src={isDark ? assets.logo_dark : assets.logo}
                alt="Logo"
                className="w-24"
              />
            </Link>

            {/* Menu Links */}
            <ul className="flex flex-col gap-6">
              {['Início', 'Sobre', 'Serviços', 'Projetos', 'Fale Comigo'].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      href={`#${item === 'Início' ? 'top' : item.toLowerCase().replace(' ', '')}`}
                      onClick={closeMenu}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            <Link
              href="#contact"
              className="
                flex items-center gap-2 
                px-6 py-2 rounded-full
                border
                bg-white border-indigo-600 text-indigo-900 hover:bg-indigo-50
                dark:bg-neutral-950 dark:border-indigo-400 dark:text-indigo-100 dark:hover:bg-indigo-800
                transition-all
              "
            >
              Contato
              <Image
                src={assets.arrow_icon}
                alt="Ícone de seta"
                className="w-3"
              />
            </Link>

            </ul>

            {/* Botão Tema no Mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition self-start"
            >
              <Image
                src={isDark ? assets.sun_icon : assets.moon_icon}
                alt="Tema"
                className="w-5 h-5"
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
