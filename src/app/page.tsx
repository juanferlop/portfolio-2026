"use client"
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { Skills } from '@/components/sections/Skills';
import { About } from '@/components/sections/About';
import { Reveal } from '@/components/ui/Reveal';
import ImageCarousel from '@/components/ImageCarousel';
import { projects } from '@/data/projects';
import { FileDown, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { LocaleProvider, useLocale } from '@/context/LocaleContext';
import { useTranslations } from '@/i18n/useTranslations';

export default function HomePageWithLocaleProvider() {
  return (
    <LocaleProvider>
      <Home />
    </LocaleProvider>
  );
}

function Home() {
  const { locale, setLocale } = useLocale();
  const t = useTranslations(locale);

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-16 md:pb-20">

        {/* HERO */}
        <section id="sobre-mi" className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                {locale === "es"
                  ? "Estudiante de Ingeniería del Software"
                  : "Software Engineering Student"}
              </h1>
              <p className="muted text-base md:text-lg leading-relaxed mb-4 md:mb-2">
                {locale === "es"
                  ? "Hola, soy Juan, tengo 21 años,natural de Ponferrada (El Bierzo) aunque actualmente resido en Oviedo, donde curso el penúltimo año de Ingeniería Informática del Software. Este verano quiero realizar unas prácticas para incorporarme al mundo empresarial y aplicar mis conocimientos en proyectos reales. Me considero una persona motivada, con ganas de aprender y aportar valor desde el primer día. Además de la ingeniería, me apasionan la historia y el deporte."
                  : "Hi, I'm Juan, 21 years old, from Ponferrada (El Bierzo) but currently living in Oviedo, where I'm in my penultimate year of Software Engineering. This summer I want to do an internship to join the business world and apply my knowledge to real projects. I consider myself a motivated person, eager to learn and contribute from day one. Besides engineering, I'm passionate about history and sports."}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs mb-4 md:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {locale === "es" ? "Disponible para prácticas Verano 2026" : "Available for internship Summer 2026"}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <a href="/CV_Juan_Fernandez_Lopez.pdf" download="CV_Juan_Fernandez_Lopez.pdf" className="flex items-center justify-center gap-2 px-6 py-3 btn-primary rounded-full font-semibold hover:scale-105 transition-transform">
                  <FileDown size={18} />
                  {locale === "es" ? "Descargar CV" : "Download CV"}
                </a>
                <a href="#proyectos" className="flex items-center justify-center gap-2 px-6 py-3 border rounded-full font-semibold" style={{ color: 'var(--fg)', borderColor: 'rgba(15,23,42,0.1)' }}>
                  <Smartphone size={18} />
                  {locale === "es" ? "Ver Proyectos" : "See Projects"}
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-end">
              <div className="w-full max-w-md lg:max-w-lg card overflow-hidden rounded-xl" style={{ aspectRatio: '16/10' }}>
                <ImageCarousel
                  images={['/hero.jpg', '/hero-city.jpg']}
                  alt={locale === "es" ? "Galería - Construyendo productos" : "Gallery - Building products"}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <About />

        <section id="proyectos" className="mb-16 md:mb-20">
          <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 flex items-center gap-4">
            {locale === "es" ? "Proyectos Destacados" : "Featured Projects"}
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

        {/* Logo en el sitio web, footer */}
        <footer className="w-full flex justify-center items-center py-8 mt-8">
          <Image
            src="/projects/logo-JFL.png"
            alt="Logo Juan Fernández López"
            width={120}
            height={120}
            className="rounded-xl shadow-md"
            priority={false}
          />
        </footer>

      </div>
    </main>
  );
}

