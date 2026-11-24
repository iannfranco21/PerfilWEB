'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Github,
  Linkedin,
  Menu,
  X,
  ArrowRight,
  Code2,
  Database,
  Wrench,
  Globe,
  GraduationCap,
  Briefcase,
  PencilLine,
  ExternalLink,
  Sparkles,
} from 'lucide-react'

const GITHUB_URL = 'https://github.com/iannfranco21'
const LINKEDIN_URL = 'https://www.linkedin.com/'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]

const skillGroups = [
  {
    icon: Code2,
    title: 'Lenguajes',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    icon: Globe,
    title: 'Desarrollo web',
    skills: ['React', 'Next.js', 'Node.js', 'HTML', 'CSS'],
  },
  {
    icon: Database,
    title: 'Bases de datos',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    icon: Wrench,
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Vercel'],
  },
]

const projects = [
  {
    title: 'Sistema de Gestión de Inventario',
    description:
      'Aplicación web para el control de inventarios: gestión de productos, movimientos de stock por roles y generación de reportes.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    example: true,
  },
  {
    title: 'API de Servicios Académicos',
    description:
      'API REST para la gestión de matrículas, cursos y calificaciones con autenticación y documentación de endpoints.',
    tech: ['Node.js', 'TypeScript', 'MySQL', 'Express'],
    example: true,
  },
  {
    title: 'PerfilWEB',
    description:
      'Portafolio personal desplegado en Vercel: sitio responsivo con secciones de perfil, habilidades, proyectos y contacto.',
    tech: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    example: false,
  },
]

function EditNote({ text }: { text: string }) {
  return (
    <Card className="border-amber-500/30 bg-amber-500/5">
      <CardContent className="flex items-start gap-3 p-4">
        <PencilLine className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-amber-200/90">{text}</p>
      </CardContent>
    </Card>
  )
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-emerald-500" />
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6" aria-label="Navegación principal">
        <a href="#inicio" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-sm font-bold text-emerald-400 ring-1 ring-emerald-500/40">
            IF
          </span>
          <span className="hidden font-semibold text-zinc-100 sm:block">Iann Franco</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/10 md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-emerald-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md px-3 py-3 text-sm font-medium text-emerald-400 transition-colors hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16 scroll-mt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 h-96 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-500/5 text-3xl font-bold text-emerald-400 ring-2 ring-emerald-500/50"
        >
          IF
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Badge variant="outline" className="mb-4 border-emerald-500/40 bg-emerald-500/10 text-emerald-300">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
            Ingeniero de Sistemas
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
        >
          Iann Franco Hernandez Rojas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 max-w-2xl text-lg text-zinc-400"
        >
          Desarrollo y mantenimiento de software. Construyo aplicaciones web modernas
          y busco mi primera oportunidad profesional para aportar valor en equipos de desarrollo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400">
            <a href="#proyectos">
              Ver proyectos
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-zinc-700 bg-transparent text-zinc-200 hover:bg-white/10 hover:text-zinc-50">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-zinc-700 bg-transparent text-zinc-200 hover:bg-white/10 hover:text-zinc-50">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  const highlights = [
    { label: 'Título', value: 'Ingeniero de Sistemas' },
    { label: 'Enfoque', value: 'Desarrollo web' },
    { label: 'Estado', value: 'Buscando oportunidades' },
  ]

  return (
    <section id="sobre-mi" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Perfil" title="Sobre mí" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          <div className="space-y-4 lg:col-span-2">
            <p className="leading-relaxed text-zinc-300">
              Soy Ingeniero de Sistemas recién graduado, con interés en el desarrollo y
              mantenimiento de software. Me enfoco en construir aplicaciones web funcionales,
              con código claro y buenas prácticas, y sigo aprendiendo tecnologías modernas del
              ecosistema JavaScript y de bases de datos.
            </p>
            <p className="leading-relaxed text-zinc-300">
              Durante mi formación trabajé en proyectos académicos que incluyen sistemas de
              gestión, APIs REST y aplicaciones web. Actualmente busco mi primera oportunidad
              profesional para crecer en un equipo de desarrollo, aportar soluciones reales y
              seguir mejorando como ingeniero.
            </p>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-white/10 bg-white/5">
            <CardContent className="flex h-full flex-col justify-center gap-4 p-6">
              <GraduationCap className="h-8 w-8 text-emerald-400" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-zinc-100">Formación</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Grado en Ingeniería de Sistemas, con base en desarrollo de software, bases de
                datos, redes y gestión de proyectos tecnológicos.
              </p>
              <Separator className="bg-white/10" />
              <p className="text-sm text-zinc-400">
                Idiomas: Español (nativo) · Inglés (técnico)
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Stack tecnológico" title="Habilidades" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full border-white/10 bg-white/5 transition-colors hover:border-emerald-500/40">
                  <CardContent className="p-6">
                    <Icon className="mb-3 h-6 w-6 text-emerald-400" aria-hidden="true" />
                    <h3 className="mb-4 font-semibold text-zinc-100">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="border border-white/10 bg-white/5 text-zinc-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <div className="mt-6">
          <EditNote text="Estas tecnologías son un ejemplo de referencia. Edita el arreglo skillGroups en src/app/page.tsx con las tecnologías que realmente dominas." />
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Trabajo destacado" title="Proyectos" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="flex h-full flex-col border-white/10 bg-white/5 transition-colors hover:border-emerald-500/40">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-zinc-100">{project.title}</h3>
                    {project.example ? (
                      <Badge variant="outline" className="shrink-0 border-amber-500/40 bg-amber-500/10 text-amber-300">
                        Ejemplo
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="shrink-0 border-emerald-500/40 bg-emerald-500/10 text-emerald-300">
                        Este sitio
                      </Badge>
                    )}
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="border border-white/10 bg-white/5 text-xs text-zinc-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-6">
          <EditNote text="Los dos primeros proyectos son marcadores de ejemplo. Reemplázalos con tus proyectos reales (título, descripción, tecnologías y enlace al repositorio) en el arreglo projects de src/app/page.tsx." />
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const items = [
    {
      icon: GraduationCap,
      title: 'Ingeniería de Sistemas',
      subtitle: 'Título obtenido — recién graduado',
      description:
        'Formación universitaria en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos.',
    },
    {
      icon: Briefcase,
      title: 'Experiencia profesional',
      subtitle: 'En transición — primera oportunidad',
      description:
        'Espacio reservado para tu experiencia laboral, prácticas o proyectos freelance a medida que los adquieras.',
    },
  ]

  return (
    <section id="experiencia" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Trayectoria" title="Experiencia y educación" />
        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-500/40">
                      <Icon className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                      <p className="mt-0.5 text-sm text-emerald-300">{item.subtitle}</p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <div className="mt-6">
          <EditNote text="Completa esta sección con el nombre de tu universidad, fechas de graduación y tu experiencia laboral en el arreglo items de la función Experience." />
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Conectemos" title="Contacto" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-emerald-500/40 hover:bg-white/10"
            aria-label="Ver perfil de GitHub"
          >
            <div className="mb-3 flex items-center justify-between">
              <Github className="h-8 w-8 text-emerald-400" aria-hidden="true" />
              <ExternalLink className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-emerald-400" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-zinc-100">GitHub</h3>
            <p className="mt-1 text-sm text-zinc-400">github.com/iannfranco21</p>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-emerald-500/40 hover:bg-white/10"
            aria-label="Ver perfil de LinkedIn"
          >
            <div className="mb-3 flex items-center justify-between">
              <Linkedin className="h-8 w-8 text-emerald-400" aria-hidden="true" />
              <ExternalLink className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-emerald-400" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-zinc-100">LinkedIn</h3>
            <p className="mt-1 text-sm text-zinc-400">Conecta conmigo en LinkedIn</p>
          </a>
        </motion.div>

        <div className="mt-6">
          <EditNote text="Actualiza el enlace de LinkedIn con la URL de tu perfil y agrega un correo de contacto en la constante LINKEDIN_URL y en la sección Contacto de src/app/page.tsx." />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="mt-auto border-t border-white/10 bg-zinc-950 px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Iann Franco Hernandez Rojas — Ingeniero de Sistemas</p>
          <p>
            Construido con Next.js · Desplegado en Vercel
          </p>
        </div>
      </footer>
    </div>
  )
}
