"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Terminal, X, Minus, Maximize2 } from "lucide-react"

const COMMANDS: Record<string, string | string[]> = {
  help: [
    "Comandos disponiveis:",
    "",
    "  about       - Quem sou eu",
    "  idade       - Minha idade",
    "  cidade      - Onde moro",
    "  skills      - Minhas habilidades",
    "  stack       - Tecnologias que uso",
    "  experiencia - Experiencia profissional",
    "  formacao    - Formacao academica",
    "  hobbies     - O que curto fazer",
    "  contato     - Como falar comigo",
    "  github      - Meu GitHub",
    "  linkedin    - Meu LinkedIn",
    "  objetivo    - Meu objetivo profissional",
    "  curiosidade - Curiosidades sobre mim",
    "  clear       - Limpar terminal",
    "  help        - Mostrar comandos",
  ].join("\n"),

  about:
    "Sou Kauan Paiano Rossa, tenho 19 anos e sou Desenvolvedor Full Stack Junior de Criciuma, SC. Apaixonado por tecnologia desde cedo, transformo ideias em aplicacoes reais. Atuo com desenvolvimento web e mobile, ERPs, dashboards e SaaS.",

  idade:
    "Tenho 19 anos. Nasci em 11/03/2006 em Criciuma, Santa Catarina.",

  cidade:
    "Moro em Criciuma, SC - sul de Santa Catarina. Uma cidade com forte polo tecnologico e industrial.",

  skills: [
    "Frontend:  React, Next.js, TypeScript, Tailwind CSS, JavaScript, HTML/CSS, AngularJS",
    "Backend:   Node.js, Express, Python, Progress 4GL, PHP",
    "Database:  PostgreSQL, MongoDB, MySQL, SQLite, Prisma",
    "Mobile:    React Native",
    "DevOps:    Git, GitHub Actions, Linux, Docker",
    "Tools:     VS Code, Figma, Postman",
  ].join("\n"),

  stack:
    "No dia a dia uso React/Next.js no front, Node.js no back, PostgreSQL/MongoDB como banco, e Git pra versionamento. Na empresa atual trabalho bastante com Progress 4GL, AngularJS e MySQL.",

  experiencia: [
    ">> Agrosys | Desenvolvedor Full Stack Junior",
    "   jan 2024 - Presente",
    "   Evolucao e manutencao de ERP, desenvolvimento de novas funcionalidades,",
    "   dashboards estrategicos, Progress 4GL, integracoes, SQL e otimizacao.",
    "",
    ">> Cedup Abilio Paulo | Ensino Medio Tecnico em Informatica",
    "   mar 2021 - dez 2023",
    "   Inicio da jornada com HTML, CSS, JavaScript, Delphi, PHP e Java.",
  ].join("\n"),

  formacao:
    "Formado em Ensino Medio Tecnico em Informatica pelo Cedup Abilio Paulo (2021-2023). Atualmente estudando Go e Clean Architecture por conta propria.",

  hobbies:
    "Games! Sou apaixonado por jogos. Alem disso, curto estudar novas tecnologias, contribuir em projetos open source e explorar arquiteturas de software.",

  contato: [
    "Email:    kauanprog@gmail.com",
    "GitHub:   https://github.com/KauanRossa",
    "LinkedIn: https://www.linkedin.com/in/kauan-paiano-rossa-845802269/",
  ].join("\n"),

  github:
    "https://github.com/KauanRossa - Da uma olhada nos meus repositorios!",

  linkedin:
    "https://www.linkedin.com/in/kauan-paiano-rossa-845802269/ - Vamos conectar!",

  objetivo:
    "Busco evoluir na area de backend e arquitetura de software. Quero construir solucoes escalaveis que gerem impacto real. Estou aberto a oportunidades que me desafiem a crescer.",

  curiosidade: [
    "> Comecei a programar no ensino medio tecnico em 2021",
    "> Minha primeira linguagem foi Delphi (sim, Delphi!)",
    "> Sou apaixonado por games e isso me levou pra programacao",
    "> Atualmente estudo Go e Clean Architecture",
    "> Perfil analitico com foco em performance e escalabilidade",
  ].join("\n"),
}

interface TerminalLine {
  type: "input" | "output" | "error" | "system"
  content: string
}

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "system", content: "Bem-vindo ao terminal interativo! Digite 'help' para ver os comandos." },
    { type: "system", content: "" },
  ])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [lines, scrollToBottom])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: cmd },
    ]

    if (trimmed === "") {
      setLines(newLines)
      return
    }

    if (trimmed === "clear") {
      setLines([
        { type: "system", content: "Terminal limpo. Digite 'help' para ver os comandos." },
        { type: "system", content: "" },
      ])
      return
    }

    const response = COMMANDS[trimmed]

    if (response) {
      newLines.push({ type: "output", content: typeof response === "string" ? response : response.join("\n") })
    } else {
      newLines.push({
        type: "error",
        content: `Comando nao encontrado: '${trimmed}'. Digite 'help' para ver os comandos disponiveis.`,
      })
    }

    newLines.push({ type: "system", content: "" })
    setLines(newLines)
    setHistory((prev) => [trimmed, ...prev])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0) {
        const newIndex = Math.min(historyIndex + 1, history.length - 1)
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      } else {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_0_30px_rgba(0,255,136,0.05)]">
      <div className="flex items-center justify-between border-b border-border bg-background px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            kauan@portfolio:~
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Minus className="h-3.5 w-3.5" />
          <Maximize2 className="h-3 w-3" />
          <X className="h-3.5 w-3.5" />
        </div>
      </div>

      <div
        ref={containerRef}
        className="h-[320px] overflow-y-auto p-4 font-mono text-xs leading-relaxed sm:h-[380px] sm:text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className="min-h-[1.5em]">
            {line.type === "input" && (
              <div className="flex gap-2">
                <span className="shrink-0 text-primary">{"visitor@portfolio:~$"}</span>
                <span className="text-foreground">{line.content}</span>
              </div>
            )}
            {line.type === "output" && (
              <pre className="whitespace-pre-wrap text-muted-foreground">{line.content}</pre>
            )}
            {line.type === "error" && (
              <span className="text-destructive">{line.content}</span>
            )}
            {line.type === "system" && line.content && (
              <span className="text-primary/70">{line.content}</span>
            )}
          </div>
        ))}

        <div className="flex gap-2">
          <span className="shrink-0 text-primary">{"visitor@portfolio:~$"}</span>
          <div className="relative flex flex-1 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-foreground caret-transparent outline-none placeholder:text-muted-foreground/40"
              placeholder="digite um comando..."
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
            <span
              className="pointer-events-none absolute top-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="invisible whitespace-pre">{input || ""}</span>
              <span className="inline-block h-[1.2em] w-[2px] animate-pulse bg-primary shadow-[0_0_6px_rgba(0,255,136,0.8)]" />
            </span>
          </div>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
