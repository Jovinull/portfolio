'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Foto de perfil */}
      <div>
        <Image
          src={assets.profile_img}
          alt="Foto de perfil de Felipe dos Santos (Jovino)"
          className="w-32 rounded-full"
        />
      </div>

      {/* Saudação */}
      <h3 className="font-Ovo mb-3 flex items-end gap-2 text-xl md:text-2xl">
        Olá! Eu sou Felipe Jovino
        <Image src={assets.hand_icon} alt="Ícone de mão acenando" className="w-6" />
      </h3>

      {/* Título */}
      <h1 className="font-Ovo text-3xl sm:text-6xl lg:text-[66px]">
        Full Stack Developer, Maker e Pesquisador.
      </h1>

      {/* Descrição */}
      <p className="mx-auto mt-4 max-w-2xl text-lg">
        Desenvolvedor Full Stack apaixonado por tecnologia, microeletrônica, sistemas embarcados, IA
        e pesquisa acadêmica. Atualmente curso Sistemas de Informação no Instituto Federal de
        Sergipe (IFS) e atuo com Next.js, Node.js, AdonisJS, PostgreSQL, ESP32 e Python,
        desenvolvendo soluções inovadoras para web, IoT e automação.
      </p>

      {/* Ações */}
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <a href="#contact" className="btn btn-primary">
          Fale comigo
          <Image src={assets.right_arrow_white} alt="Ícone de seta" className="w-4" />
        </a>

        <a href="/vitae.pdf" download className="btn btn-theme">
          Meu Currículo
          <Image src={assets.download_icon} alt="Ícone de download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
