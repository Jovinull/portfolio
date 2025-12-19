import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';

export default function About() {
  return (
    <section id="sobre" className="bg-theme text-theme w-full scroll-mt-20 px-[12%] py-10">
      <h4 className="font-display text-subtitle mb-2 text-center text-lg">Introdução</h4>
      <h2 className="font-display mb-10 text-center text-5xl">Sobre mim</h2>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        {/* Imagem */}
        <div className="flex flex-1 justify-center">
          <Image
            src={assets.user_image}
            alt="Foto de Jovino"
            width={350}
            height={350}
            priority
            className="w-[250px] rounded-3xl sm:w-[300px] md:w-[350px]"
          />
        </div>

        {/* Texto + cards */}
        <div className="flex flex-1 flex-col">
          <p className="mb-10 max-w-2xl font-sans text-balance">
            Desenvolvedor Full Stack com paixão por criar soluções digitais inovadoras. Com
            experiência sólida em desenvolvimento web, APIs, IoT e IA, atuo desde o design até a
            implementação final. Já colaborei em projetos educacionais, pesquisa aplicada, sistemas
            embarcados e plataformas de gestão pública.
          </p>

          <ul className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={`${title}-${index}`}
                className="border-theme hover-card rounded-xl border-[0.5px] p-6"
              >
                {/* Ícone claro/escuro sem depender de Zustand */}
                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  className="mb-3 w-7 transition-all duration-300 dark:hidden"
                />
                <Image
                  src={iconDark}
                  alt=""
                  aria-hidden="true"
                  className="mb-3 hidden w-7 transition-all duration-300 dark:block"
                />

                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-theme-secondary text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="font-display text-theme mt-10 mb-4">Ferramentas que utilizo</h4>
          <ul className="flex flex-wrap items-center gap-4">
            {toolsData.map((tool, index) => (
              <li
                key={`tool-${index}`}
                className="border-theme hover-card flex aspect-square w-12 items-center justify-center rounded-lg border sm:w-14"
              >
                <Image src={tool} alt="Ferramenta" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
