"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, Calendar, ChevronDown, ExternalLink, Terminal, Code2, Database, Globe, Server, Smartphone, Braces, GitBranch, Layers, Monitor, Cpu, Menu, X } from "lucide-react"
import { MatrixRain } from "@/components/matrix-rain"
import { TypewriterEffect } from "@/components/typewriter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { InteractiveTerminal } from "@/components/interactive-terminal"

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Stacks", href: "#stacks" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contato", href: "#contact" },
]

const frontendSkills = [
  { name: "React", level: 75 },
  { name: "Next.js", level: 60 },
  { name: "TypeScript", level: 65 },
  { name: "Tailwind CSS", level: 75 },
  { name: "JavaScript", level: 95 },
  { name: "HTML/CSS", level: 95 },
]

const backendSkills = [
  { name: "Node.js", level: 80 },
  { name: "Express", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "MongoDB", level: 75 },
  { name: "Prisma", level: 65 },
  { name: "REST APIs", level: 80 },
]

const tools = [
  "Git", "VS Code", "Figma", "Linux", "Postman", "GitHub Actions"
]

const projects = [
  {
    title: "API | Encurtador de URL",
    description: "API REST para encurtamento de URLs com tracking de acessos, expiracao de links e redirecionamento automatico, construida com Fastify, TypeScript, Prisma e SQLite.",
    tags: ["Fastify", "TypeScript", "Prisma", "SQLite"],
    github: "https://github.com/KauanRossa/encurtadorURL",
    live: "https://github.com/KauanRossa/encurtadorURL",
  },
  {
    title: "API | Gerenciador de Bibliotecas",
    description: "API REST completa para gerenciamento de biblioteca com autenticacao JWT, controle de permissoes e sistema de emprestimos, construida com Fastify, TypeScript, Prisma e SQLite.",
    tags: ["Fastify", "TypeScript", "Prisma", "SQLite"],
    github: "https://github.com/KauanRossa/GerencialBibliotecaAPI",
    live: "https://github.com/KauanRossa/GerencialBibliotecaAPI",
  },
  {
    title: "GitFav",
    description: "Esse projeto e uma aplicacao web simples que permite aos usuarios favoritar e remover perfis do Github e exibir as informacoes como quantidade de repositorios e seguidores, junto com um link que leva para o perfil do usuario no github.",
    tags: ["HTML", "CSS", "Git e Github", "Figma", "Javascript"],
    github: "https://github.com/KauanRossa/GitFav",
    live: "https://github.com/KauanRossa/GitFav",
  },
  {
    title: "Corte Ja | Em Desenvolvimento",
    description: "Plataforma completa (App + Web) de agendamento para barbearias com autenticacao JWT, geolocalizacao, sistema de agendamentos, chat em tempo real, notificacoes e arquitetura multi-tenant, desenvolvida com Node.js, Express, MongoDB, Vite e React Native.",
    tags: ["React Native", "Vite", "Node.js", "Express", "MongoDB", "JWT", "GeoJSON", "integracao com APIs externas (W API e RESEND) entre outros"],
    github: "https://github.com/KauanRossa",
    live: "https://corteja.com.br/",
  },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#" className="flex items-center gap-2 font-mono text-sm text-primary">
          <Terminal className="h-4 w-4" />
          <span>{"~/portfolio"}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="text-primary/50">{"$ "}</span>
              {link.label.toLowerCase()}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary transition-all hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(0,255,136,0.15)] sm:inline-block"
          >
            {"<Contato />"}
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-3 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <span className="text-primary/50">{"$"}</span>
                {link.label.toLowerCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-2.5 text-center font-mono text-sm text-primary transition-all hover:border-primary hover:bg-primary/20"
            >
              {"<Contato />"}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 pt-16 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground sm:mb-6 sm:px-4">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Disponivel para oportunidades
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mb-3 font-mono text-xs text-muted-foreground sm:mb-4 sm:text-sm">
            {"// Ola, meu nome e"}
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Kauan Paiano Rossa
          </h1>
          <h2 className="mb-4 text-base text-muted-foreground sm:mb-6 sm:text-xl md:text-2xl">
            <TypewriterEffect />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base">
            Desenvolvedor Full Stack Junior de{" "}
            <span className="text-primary">Criciuma, SC</span>. Apaixonado por
            criar aplicacoes web modernas, performaticas e com experiencias
            incriveis para o usuario.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#projects"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] sm:w-auto"
            >
              <Code2 className="h-4 w-4" />
              Ver Projetos
            </a>
            <a
              href="https://github.com/KauanRossa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-secondary/50 px-6 py-3 font-mono text-sm text-foreground transition-all hover:border-primary/50 hover:text-primary sm:w-auto"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <a href="#about" className="mt-10 inline-block animate-bounce text-muted-foreground sm:mt-16">
            <ChevronDown className="h-6 w-6" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader number="01" title="Sobre Mim" />
        </ScrollReveal>

        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          <ScrollReveal delay={100}>
            <div className="overflow-hidden rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <span className="ml-2">sobre-mim.ts</span>
              </div>
              <div className="overflow-x-auto">
                <pre className="font-mono text-xs leading-relaxed sm:text-sm">
                  <code>
                  <span className="text-[#c678dd]">{"const"}</span>{" "}
                  <span className="text-[#e5c07b]">dev</span>{" "}
                  <span className="text-foreground">{"= {"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#e06c75]">nome</span>
                  <span className="text-foreground">{": "}</span>
                  <span className="text-primary">{'"Kauan Paiano Rossa"'}</span>
                  <span className="text-foreground">{","}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#e06c75]">idade</span>
                  <span className="text-foreground">{": "}</span>
                  <span className="text-[#d19a66]">19</span>
                  <span className="text-foreground">{","}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#e06c75]">cidade</span>
                  <span className="text-foreground">{": "}</span>
                  <span className="text-primary">{'"Criciuma, SC"'}</span>
                  <span className="text-foreground">{","}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#e06c75]">nascimento</span>
                  <span className="text-foreground">{": "}</span>
                  <span className="text-primary">{'"11/03/2006"'}</span>
                  <span className="text-foreground">{","}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#e06c75]">role</span>
                  <span className="text-foreground">{": "}</span>
                  <span className="text-primary">{'"Full Stack Junior"'}</span>
                  <span className="text-foreground">{","}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#e06c75]">paixao</span>
                  <span className="text-foreground">{": "}</span>
                  <span className="text-primary">{'"Games"'}</span>
                  {"\n"}
                  <span className="text-foreground">{"}"}</span>
                </code>
                </pre>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col justify-center gap-4 sm:gap-6">
              <p className="leading-relaxed text-muted-foreground">
                Tenho <span className="font-semibold text-foreground">19 anos</span> e sou de{" "}
                <span className="font-semibold text-foreground">Criciuma, Santa Catarina</span>.
                Desde cedo fui fascinado por tecnologia e comecei a programar para transformar
                ideias em realidade.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Hoje atuo como <span className="font-semibold text-foreground">Desenvolvedor Full-Stack</span>, com experiencia no desenvolvimento de sistemas web e mobile, manutencao e evolucao de ERPs, criacao de dashboards estrategicos e construcao de aplicacoes SaaS do zero. Trabalho com tecnologias como HTML, CSS, JavaScript, AngularJS, React, React Native, Node.js, Python, Progress 4GL e MySQL.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Tenho perfil analitico, foco em performance e escalabilidade, e estou sempre buscando evoluir tecnicamente, principalmente na area de backend e arquitetura de software. Gosto de criar solucoes que realmente resolvem problemas e geram impacto no negocio.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Criciuma, SC
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  11/03/2006
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary/80 transition-all duration-1000 ease-out group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(0,255,136,0.4)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

function StacksSection() {
  return (
    <section id="stacks" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader number="02" title="Tech Stack" />
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal delay={100}>
            <div className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.05)] sm:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Frontend</h3>
                  <p className="font-mono text-xs text-muted-foreground">client-side</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.05)] sm:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Backend</h3>
                  <p className="font-mono text-xs text-muted-foreground">server-side</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.05)] sm:p-6 md:col-span-2 lg:col-span-1">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Ferramentas</h3>
                  <p className="font-mono text-xs text-muted-foreground">dev-tools</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-md border border-border bg-background p-4">
                <div className="font-mono text-xs leading-relaxed text-muted-foreground">
                  <span className="text-primary">{">"}</span>{" "}
                  <span className="text-foreground">Sempre aprendendo</span>
                  {"\n"}
                  <span className="text-primary">{">"}</span>{" "}
                  Atualmente estudando{" "}
                  <span className="text-primary">Go</span> e{" "}
                  <span className="text-primary">Clean Architecture</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4">
            {[
              { icon: Globe, label: "Frontend", desc: "React, Next.js" },
              { icon: Database, label: "Database", desc: "PostgreSQL, MongoDB e Prisma" },
              { icon: Braces, label: "Backend", desc: "Node.js, Express" },
              { icon: Smartphone, label: "Responsivo", desc: "Mobile-first" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card p-3 text-center transition-all hover:border-primary/30 sm:gap-2 sm:p-4"
              >
                <item.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                <span className="text-xs font-medium text-foreground sm:text-sm">{item.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground sm:text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.05)]">
        <div className="border-b border-border bg-secondary/30 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={project.github}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={project.live}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors sm:text-lg">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader number="03" title="Projetos" />
        </ScrollReveal>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/KauanRossa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Ver mais no GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const timeline = [
    {
      period: "jan 2024 - Presente",
      title: "Desenvolvedor Full Stack Junior",
      company: "Agrosys",
      description:
        "Trabalhando diretamente na evolucao e manutencao do ERP da empresa. Sou responsavel pelo desenvolvimento de novas funcionalidades, melhorias em modulos existentes e criacao de dashboards estrategicos para apoio a tomada de decisao. Atuo principalmente com Progress 4GL no backend, desenvolvendo regras de negocio complexas, batches automatizados e rotinas de processamento de dados. Tambem trabalho com integracoes, consultas SQL, otimizacao de performance e modelagem de logica voltada para gestao empresarial. Minha atuacao envolve nao apenas programacao, mas tambem analise de requisitos, entendimento de regras de negocio e entrega de solucoes alinhadas as necessidades reais da empresa.",
      tags: ["Progress", "Python", "AngularJs", "PHP", "sqlite","Jquery","HTMl","CSS"],
    },
    {
      period: "mar 2021 - dez 2023",
      title: "Ensino Medio Tecnico em Informatica",
      company: "Cedup Abilio Paulo",
      description:
        "Inicio da jornada na programacao com HTML, CSS e JavaScript basico. Criacao dos primeiros sites e descoberta da paixao pelo desenvolvimento web.",
      tags: ["DELPHI", "PHP", "JAVA", "Figma","HTML","CSS","JavaScript"],
    },
  ]

  return (
    <section id="experience" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader number="04" title="Experiencia & Educacao" />
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="flex flex-col gap-8 sm:gap-12">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 150}>
                <div className="relative pl-10 md:hidden">
                  <div className="absolute left-[13px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(0,255,136,0.4)]" />
                  <TimelineCard item={item} />
                </div>

                <div
                  className={`hidden md:flex md:items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 ? (
                      <TimelineCard item={item} />
                    ) : (
                      <div className="flex items-center justify-start font-mono text-xs text-primary md:justify-start md:pt-6">
                        <GitBranch className="mr-2 h-4 w-4" />
                        {item.period}
                      </div>
                    )}
                  </div>

                  <div className="relative flex items-start justify-center pt-6">
                    <div className="h-3 w-3 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(0,255,136,0.4)]" />
                  </div>

                  <div className="flex-1">
                    {index % 2 !== 0 ? (
                      <TimelineCard item={item} />
                    ) : (
                      <div className="flex items-center font-mono text-xs text-primary pt-6">
                        <GitBranch className="mr-2 h-4 w-4" />
                        {item.period}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  item,
}: {
  item: {
    title: string
    company: string
    description: string
    tags: string[]
    period: string
  }
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,255,136,0.05)] sm:p-6">
      <div className="mb-1 font-mono text-xs text-primary md:hidden">{item.period}</div>
      <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
      <p className="mb-3 font-mono text-xs text-muted-foreground">{item.company}</p>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-xs text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function TerminalSection() {
  return (
    <section id="terminal" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeader number="05" title="Terminal" centered />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mb-8 text-center text-sm text-muted-foreground sm:mb-10 sm:text-base">
            Quer saber algo sobre mim? Use o terminal abaixo. Digite{" "}
            <span className="font-mono text-primary">help</span> para ver os comandos disponiveis.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <InteractiveTerminal />
        </ScrollReveal>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <SectionHeader number="06" title="Contato" centered />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mb-8 text-sm text-muted-foreground sm:mb-10 sm:text-base">
            Estou sempre aberto a novas oportunidades e conexoes. Se voce tem um projeto
            interessante ou uma vaga que combina com meu perfil, entre em contato!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="rounded-lg border border-border bg-card p-5 sm:p-8">
            <div className="mb-6 font-mono text-xs text-muted-foreground">
              <span className="text-primary">{">"}</span> Vamos construir algo incrivel juntos
            </div>

            <div className="flex flex-col items-center gap-5 sm:gap-6">
              <a
                href="mailto:kauanprog@gmail.com"
                className="group flex w-full items-center justify-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-5 py-3 font-mono text-xs text-primary transition-all hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
              >
                <Mail className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                <span className="truncate">kauanprog@gmail.com</span>
              </a>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/KauanRossa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(0,255,136,0.1)]"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kauan-paiano-rossa-845802269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(0,255,136,0.1)]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground sm:text-xs">
          <Terminal className="h-3 w-3 text-primary" />
          <span>Desenvolvido com</span>
          <span className="text-primary">Next.js</span>
          <span>&</span>
          <span className="text-primary">Tailwind CSS</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground sm:text-xs">
          <Layers className="h-3 w-3 text-primary" />
          <span>{"(c) 2026 - Todos os direitos reservados"}</span>
        </div>
      </div>
    </footer>
  )
}

function SectionHeader({
  number,
  title,
  centered = false,
}: {
  number: string
  title: string
  centered?: boolean
}) {
  return (
    <div className={`mb-8 sm:mb-12 ${centered ? "text-center" : ""}`}>
      <div
        className={`mb-2 font-mono text-xs text-primary sm:text-sm ${centered ? "text-center" : ""}`}
      >
        {"// "}{number}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
        <span className="text-primary">.</span>
      </h2>
      <div
        className={`mt-4 h-px w-20 bg-primary/50 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  )
}

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixRain />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StacksSection />
      <ProjectsSection />
      <ExperienceSection />
      <TerminalSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
