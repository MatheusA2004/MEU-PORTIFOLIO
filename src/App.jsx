import { useState, useEffect } from 'react'
import './App.css'

const projects = [
  {
    name: 'pedefacil/',
    status: 'concluído',
    period: '2025',
    description:
      'Plataforma de delivery com arquitetura de 5 microsserviços e frontend em React. Projeto de defesa em grupo para o SENAC RJ.',
    stack: ['React', 'Node.js', 'Fastify', 'Microsserviços', 'MySQL'],
  },
  {
    name: 'portal-faculdade/',
    status: 'concluído',
    period: '2026',
    description:
      'Portal de estudante em React, com arquitetura de componentes própria e navegação ativa controlada por estado.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
  },
  {
    name: 'Controle de gastos',
    status: 'em andamento',
    period: '2026',
    description:
      'Um aplicativo web para controle de gastos pessoais, com autenticação e armazenamento de dados em banco relacional.',
    stack: ['React', 'Node.js', 'Fastify', 'Microsserviços', 'MySQL'],
  },
]

const stack = [
  {
    group: 'frontend',
    items: ['React', 'Angular', 'JavaScript / JSX', 'Vite', 'CSS estruturado'],
  },
  {
    group: 'backend',
    items: ['Node.js', 'Fastify', 'TypeScript', 'Zod', 'Java', 'Python'],
  },
  {
    group: 'dados',
    items: ['MySQL', 'Prisma ORM'],
  },
  {
    group: 'infra',
    items: ['Docker', 'Git', 'AWS CloudFront'],
  },
]

const facts = [
  ['formação', 'Análise e Desenvolvimento de Sistemas — Senac Rio'],
  ['foco atual', 'Arquitetura de microsserviços e boas práticas de backend'],
]

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useScrollReveal()

  const navLinks = [
    ['#sobre', 'sobre'],
    ['#stack', 'stack'],
    ['#projetos', 'projetos'],
    ['#contato', 'contato'],
  ]

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a href="#topo" className="nav__logo">
            matheus<span className="nav__logo-accent">@</span>dev
            <span className="cursor" aria-hidden="true" />
          </a>

          <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>

          <button
            className="nav__toggle"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__text">
              <p className="eyebrow">$ ~/portfolio</p>
              <h1>
                Matheus de Almeida
                <span className="hero__role">desenvolvedor full-stack</span>
              </h1>
              <p className="hero__lead">
                Desenvolvedor Full Stack Júnior capaz de entregar produtos completos, do front-end ao back-end. Graduado em Análise e Desenvolvimento
                de Sistemas, tenho perfil proativo e orientado à resolução de problemas.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#projetos">
                  Ver projetos
                </a>
                <a className="btn btn--ghost" href="#contato">
                  Falar comigo
                </a>
              </div>
            </div>

            <div className="terminal" aria-hidden="true">
              <div className="terminal__bar">
                <span className="terminal__dot" />
                <span className="terminal__dot" />
                <span className="terminal__dot" />
                <span className="terminal__title">zsh — 80x14</span>
              </div>
              <div className="terminal__body">
                <p>
                  <span className="terminal__prompt">matheus@dev</span>
                  <span className="terminal__path"> ~ % </span>
                  <span className="terminal__cmd">whoami</span>
                </p>
                <p className="terminal__out">
                  dev full-stack · react · node · fastify · prisma
                </p>
                <p>
                  <span className="terminal__prompt">matheus@dev</span>
                  <span className="terminal__path"> ~ % </span>
                  <span className="terminal__cmd">status --atual</span>
                </p>
                <p className="terminal__out">
                  graduado em Análise e Desenvolvimento de Sistemas<span className="cursor cursor--inline" />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section" data-reveal>
          <p className="eyebrow">$ cat sobre.md</p>
          <div className="about">
            <p className="about__lead">
              Gosto de entender o problema antes de escrever a primeira linha
              de código — e de documentar decisões com a mesma atenção que
              dedico à implementação.
            </p>
            <ul className="facts">
              {facts.map(([label, value]) => (
                <li key={label}>
                  <span className="facts__label">{label}</span>
                  <span className="facts__value">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="section" data-reveal>
          <p className="eyebrow">$ ls stack/</p>
          <h2 className="section__title">Ferramentas e Linguagens</h2>
          <div className="stack-grid">
            {stack.map((group) => (
              <div className="stack-card" key={group.group}>
                <h3 className="stack-card__group">{group.group}/</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="section" data-reveal>
          <p className="eyebrow">$ ls projetos/</p>
          <h2 className="section__title">Projetos recentes</h2>
          <div className="projects">
            {projects.map((p) => (
              <article className="project-card" key={p.name}>
                <div className="project-card__head">
                  <h3>{p.name}</h3>
                  <span
                    className={`tag tag--${p.status === 'concluído' ? 'done' : 'wip'
                      }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="project-card__desc">{p.description}</p>
                <ul className="project-card__stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="section section--contact" data-reveal>
          <p className="eyebrow">$ mail --send</p>
          <h2 className="section__title">Bora conversar?</h2>
          <p className="contact__lead">
            Aberto a estágio, projetos em grupo e trocas sobre desenvolvimento
            full-stack.
          </p>
          <div className="contact__links">
            <a className="btn btn--primary" href="mailto:seuemail@exemplo.com">
              matheusa026@gmail.com
            </a>
            <a className="btn btn--ghost" href="https://github.com/MatheusA2004" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn--ghost" href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Matheus de Almeida do Nascimento Lopes — feito com React.</p>
      </footer>
    </>
  )
}
