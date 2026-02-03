import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { Skills } from '@/components/sections/Skills';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { FileDown, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-16 md:pb-20">

        {/* HERO */}
        <section id="sobre-mi" className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="max-w-2xl">
              <p className="kicker mb-3 md:mb-4">Estudiante en la Escuela de Ingeniería Informática de Oviedo</p>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">Buscando mi primera oportunidad profesional.</h1>
              <p className="muted text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Soy estudiante de penúltimo año en la Escuela de Ingeniería Informática de Oviedo. He desarrollado una sólida formación en Java y desarrollo multiplataforma a través de proyectos académicos y personales. Sin experiencia profesional aún, pero motivado a aportar valor desde el primer día en un entorno real. Busco prácticas de verano 2026 para consolidar mis conocimientos y aprender de profesionales con experiencia.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs mb-4 md:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponible para prácticas Verano 2026
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <a href="/mi-cv.pdf" download className="flex items-center justify-center gap-2 px-6 py-3 btn-primary rounded-full font-semibold hover:scale-105 transition-transform">
                  <FileDown size={18} /> Descargar CV
                </a>
                <a href="#proyectos" className="flex items-center justify-center gap-2 px-6 py-3 border rounded-full font-semibold" style={{ color: 'var(--fg)', borderColor: 'rgba(15,23,42,0.1)' }}>
                  <Smartphone size={18} /> Ver Proyectos
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-end">
              <div className="w-full max-w-md lg:max-w-lg card overflow-hidden rounded-xl" style={{ aspectRatio: '16/10' }}>
                <Image src="/hero.svg" alt="Ilustración: Construyendo productos - Diseño, Frontend y Mobile" width={560} height={360} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="mb-16 md:mb-20">
          <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 flex items-center gap-4">
            Proyectos Destacados
            <div className="h-[1px] flex-1 divider-light"></div>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <Reveal>
          <Skills />
        </Reveal>

      </div>
    </main>
  );
}
