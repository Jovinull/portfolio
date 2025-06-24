'use client';

import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';

const About = () => {
  return (
    <section id="about" className="bg-theme text-theme w-full scroll-mt-20 px-[12%] py-10">
      <h4 className="font-display text-subtitle mb-2 text-center text-lg">Introdução</h4>
      <h2 className="font-display mb-10 text-center text-5xl">Sobre mim</h2>

      <div className="flex flex-col lg:flex-row">
        {/* Imagem */}
        <div className="flex-1">
          <Image
            src={assets.user_image}
            alt="Jovino"
            className="mx-auto w-[250px] rounded-3xl sm:w-[300px] md:w-[350px] lg:w-[350px]"
          />
        </div>

        {/* Descrição + Itens */}
        <div className="flex-1">
          <p className="font-display mb-10 max-w-2xl">
            Desenvolvedor Full Stack com paixão por criar soluções digitais inovadoras. Com
            experiência sólida em desenvolvimento web, APIs, IoT e IA, atuo desde o design até a
            implementação final. Já colaborei em projetos educacionais, pesquisa aplicada, sistemas
            embarcados e plataformas de gestão pública.
          </p>

          <ul className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-theme hover-card cursor-pointer rounded-xl border-[0.5px] p-6"
              >
                <Image src={icon} alt={title} className="mb-3 w-7 transition-all duration-300" />
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="text-theme font-display mt-10 mb-4">Ferramentas que utilizo</h4>
          <ul className="flex flex-wrap items-center gap-4">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="border-theme hover-card flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border sm:w-14"
              >
                <Image src={tool} alt="Ferramenta" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
