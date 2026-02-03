import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b bg-white/60 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-4">
                    <span className="font-extrabold text-sm md:text-lg tracking-tight text-foreground hidden sm:inline">Juan Fernández</span>
                    <span className="font-extrabold text-sm md:text-lg tracking-tight text-foreground sm:hidden">JF</span>
                    <span className="hidden md:inline-block kicker">Frontend · Mobile</span>
                </div>

                <div className="hidden md:flex gap-6 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                    <Link href="#proyectos" className="hover:text-[var(--primary)] transition-colors">Proyectos</Link>
                    <Link href="#tecnologias" className="hover:text-[var(--primary)] transition-colors">Tecnologías</Link>
                    <Link href="#sobre-mi" className="hover:text-[var(--primary)] transition-colors">Sobre mí</Link>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <a
                        href="https://www.linkedin.com/in/juan-fern%C3%A1ndez-l%C3%B3pez-6681b9333/?trk=opento_sprofile_details"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex p-2 text-gray-600 hover:text-[var(--primary)] transition-colors"
                        title="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a href="/CV_Juan_Fernandez_Lopez.pdf" download="CV_Juan_Fernandez_Lopez.pdf" className="hidden sm:flex px-3 md:px-4 py-2 btn-primary rounded-full text-xs md:text-sm font-semibold hover:scale-[1.02] transition-transform">CV</a>
                    <a href="/CV_Juan_Fernandez_Lopez.pdf" download="CV_Juan_Fernandez_Lopez.pdf" className="sm:hidden px-3 py-2 btn-primary rounded-full text-xs font-semibold">CV</a>
                    <a href="mailto:juanfernandez@ejemplo.com" className="hidden sm:flex px-2 md:px-3 py-2 border rounded-full text-xs md:text-sm" style={{ color: 'var(--muted)', borderColor: 'rgba(15,23,42,0.06)' }}>Contacto</a>
                </div>
            </div>
        </nav>
    );
};