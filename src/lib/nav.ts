export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home", description: "Visão geral e manifesto" },
  { href: "/sobre", label: "Sobre", description: "Trajetória e propósito" },
  {
    href: "/experiencia",
    label: "Experiência",
    description: "Liderança, squads e produtos em produção",
  },
  {
    href: "/projetos",
    label: "Projetos",
    description: "Patentes, deeptech e open source",
  },
  {
    href: "/pesquisa",
    label: "Pesquisa",
    description: "Mestrado, artigos e IA aplicada",
  },
  {
    href: "/formacao",
    label: "Formação",
    description: "Certificações, cursos e ensino",
  },
  { href: "/contato", label: "Contato", description: "Vamos conversar" },
];
