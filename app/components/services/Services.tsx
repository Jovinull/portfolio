import React from 'react';
import Image from 'next/image';
import { assets, serviceData } from '@/assets/assets';
import type { ServiceItem } from '@/app/types/assets';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="w-full scroll-mt-10 px-12 py-10">
      {/* Cabeçalho da seção */}
      <div className="mx-auto max-w-2xl text-center">
        <h4 className="font-display text-subtitle mb-2 text-lg">O que ofereço</h4>
        <h2 className="font-display text-5xl">Meus Serviços</h2>
        <p className="text-theme-secondary mt-5 mb-12 font-sans">
          Sou desenvolvedor frontend com mais de 5 anos de experiência em diversos projetos, criando
          interfaces responsivas, performáticas e acessíveis.
        </p>
      </div>

      {/* Grid de cards de serviço */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {serviceData.map(({ icon, title, description, link }: ServiceItem, idx) => (
          <div
            key={idx}
            className={`border-theme hover-card cursor-pointer rounded-lg border px-8 py-12 transition-transform duration-300 hover:-translate-y-1`}
          >
            <div className="flex justify-center">
              <Image src={icon} alt={title} width={40} height={40} />
            </div>

            <h3 className="mt-4 text-center text-lg font-semibold">{title}</h3>

            <p className="text-theme-secondary mt-2 text-center text-sm leading-6">{description}</p>

            <div className="mt-5 flex justify-center">
              <a
                href={link}
                className="text-accent flex items-center gap-2 text-sm hover:underline"
              >
                Saiba mais
                <Image src={assets.right_arrow_bold} alt="seta-direita" width={16} height={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
