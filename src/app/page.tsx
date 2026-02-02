import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { Skills } from '@/components/sections/Skills';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { FileDown, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-mesh">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* SECCIÓN SOBRE MÍ / MOTIVACIÓN */}
        <section id="sobre-mi" className="mb-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Buscando mi primer reto profesional.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Actualmente en mi penúltimo año de carrera. Mi objetivo para este verano 2026 es aplicar mis conocimientos en **[Tu Especialidad]** en un entorno real, aportando valor desde el día uno y aprendiendo de los mejores.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Disponible para prácticas Verano 2026
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/mi-cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all"
            >
              <FileDown size={18} /> Descargar CV
            </a>

            <a
              href="#proyectos"
              className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 rounded-full font-semibold transition-all"
            >
              <Smartphone size={18} /> Ver App Android
            </a>
          </div>
        </section>

        {/* SECCIÓN PROYECTOS (Responsive Grid) */}
        <section id="proyectos" className="mb-20">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
            Proyectos Destacados
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </h2>

          {/* Aquí está la magia responsive: 1 col en movil, 2 en tablet, 3 en desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* SECCIÓN SKILLS (Debajo de proyectos como pediste) */}
        <Reveal>
          <Skills />
        </Reveal>

      </div>
    </main>
  );
}
