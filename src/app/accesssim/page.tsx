"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BrainCircuit, Rocket, ShieldCheck, Users, Banknote, Building2, Code2, GraduationCap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AccessSimPage() {
  return (
    <div className="relative min-h-screen pb-24 pt-24 sm:pt-32">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          aria-hidden
          className="absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[120px] transition-opacity"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />
        <span
          aria-hidden
          className="absolute top-1/3 right-0 size-[500px] rounded-full opacity-10 blur-[100px] transition-opacity"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 flex flex-col items-start gap-4"
        >
          <Button variant="ghost" size="sm" className="gap-2 -ml-3 text-muted-foreground hover:text-foreground" render={<Link href="/" />} >
            <ArrowLeft className="size-4" />
            Voltar ao Portfólio
          </Button>

          <Badge variant="outline" className="border-primary/30 text-primary font-mono tracking-widest uppercase">
            Deeptech & Empreendedorismo
          </Badge>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            AccessSim
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Plataforma inovadora que utiliza <strong className="text-foreground font-semibold">Inteligência Artificial e Realidade Aumentada</strong> para automatizar a avaliação de acessibilidade arquitetônica (NBR 9050). Uma <span className="text-foreground">startup validada nacionalmente</span> que transicionou de Inova Simples para Microempresa (ME), tracionada com mais de R$ 193 mil em fomento.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Fomento Total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur md:col-span-2 lg:col-span-2 hover:border-primary/50 transition-colors"
          >
            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-colors" />
            <Banknote className="mb-6 size-10 text-emerald-400" />
            <h3 className="text-3xl font-bold tracking-tight text-foreground">+R$ 193.900 captados</h3>
            <p className="mt-2 text-lg text-muted-foreground">Em subvenção e bolsas para P&D (Lucro de incentivo)</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20">Fomento validado</Badge>
              <Badge variant="secondary" className="bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20">Crescimento acelerado</Badge>
            </div>
          </motion.div>

          {/* Card 2: Evolução Corporativa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur hover:border-primary/50 transition-colors"
          >
            <Building2 className="mb-6 size-10 text-indigo-400" />
            <h3 className="text-2xl font-bold tracking-tight text-foreground">De Inova Simples a ME</h3>
            <p className="mt-2 text-muted-foreground">Estruturação societária completa, nascida como Inova Simples e amadurecida para Microempresa de base tecnológica.</p>
          </motion.div>

          {/* Card 3: Centelha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur hover:border-primary/50 transition-colors"
          >
            <div>
              <ShieldCheck className="mb-6 size-10 text-amber-400" />
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Centelha Sergipe (Fase 3)</h3>
              <p className="mt-2 text-muted-foreground">Aprovada no ano de 2025 em 17º Lugar nacional no programa Centelha.</p>
            </div>
            <div className="mt-8">
              <span className="text-3xl font-bold text-foreground">R$ 130k</span>
              <span className="ml-2 text-sm text-muted-foreground uppercase tracking-wider">Subvenção</span>
            </div>
          </motion.div>

          {/* Card 4: Catalisa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur hover:border-primary/50 transition-colors md:col-span-2"
          >
            <div className="absolute -left-12 -bottom-12 size-40 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors" />
            <div>
              <Rocket className="mb-6 size-10 text-blue-400" />
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Sebrae Catalisa ICT (Fase 2)</h3>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Classificada em 42º Lugar em 2025. Aprovação com bolsas de pesquisa da FADEX de 9 meses, somando R$ 63.900.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/50 pt-6">
              <div>
                <span className="block text-2xl font-bold text-foreground">1</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Mestre</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-foreground">2</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Graduados</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-foreground">1</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Graduando</span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Liderança e Cepedi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur md:col-span-2 lg:col-span-3 hover:border-primary/50 transition-colors"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Users className="mb-6 size-10 text-purple-400" />
                <h3 className="text-3xl font-bold tracking-tight text-foreground">Liderança de Alto Nível</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Como CTO, orquestro uma engrenagem de talentos. Além da equipe de 4 pesquisadores de alto nível pelo Catalisa, oriento diretamente <strong>2 desenvolvedores recém-contratados</strong> para atuarem no Front e Backend (Python e React Native) construindo nosso motor de IA.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 relative overflow-hidden">
                <GraduationCap className="mb-4 size-8 text-primary" />
                <h4 className="text-xl font-bold text-foreground mb-2">Mentoria no Cepedi (Bolsa Futuro Digital)</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A AccessSim foi convidada como empresa demandante no programa. De Maio a Agosto de 2025, atuamos como Product Owners, propondo e orientando um desafio de desenvolvimento de MVP Institucional e Gestão de Leads para um squad de <strong>5 estudantes bolsistas</strong>.
                </p>
                <Badge variant="outline" className="border-primary/30 text-primary">Total: 11 pessoas lideradas</Badge>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Galeria de Fotos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-16 mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Registros da Trajetória</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Foto 1: Mentoria Catalisa */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/accesssim/mentoria-catalisa.jpeg"
                  alt="Mentoria com Mirella Zanuto no Catalisa ICT"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-foreground">Sebrae Catalisa ICT</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Sessão estratégica de mentoria com Mirella Zanuto durante nossa aceleração pelo programa Catalisa.
                </p>
              </div>
            </div>

            {/* Foto 2: Primeiro Cliente */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/accesssim/primeiro-cliente.jpeg"
                  alt="Apresentação para o primeiro cliente em Pedrinhas-SE"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-foreground">Tração e Validação</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Apresentação do nosso MVP para o primeiro cliente (escritório de arquitetura em Pedrinhas, Sergipe).
                </p>
              </div>
            </div>

            {/* Foto 3: Cepedi */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all hover:border-primary/50 sm:col-span-2 lg:col-span-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/accesssim/cepedi-reuniao.jpeg"
                  alt="Reunião com a equipe de estudantes do Cepedi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-foreground">Bolsa Futuro Digital (Cepedi)</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Kick-off e alinhamento como Product Owners orientando um dos nossos squads de 5 desenvolvedores.
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight mb-6">Conheça minha contribuição técnica</h2>
          <Button variant="default" size="lg" className="rounded-full px-8 h-12 gap-2" render={<Link href="/experiencia" />}>
            Ver detalhes em Experiências
            <ChevronRight className="size-4" />
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
