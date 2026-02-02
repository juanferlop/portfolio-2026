import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-bold text-xl tracking-tighter">TU_NOMBRE.dev</span>

                {/* En escritorio se ve, en móvil se oculta (opcionalmente podrías hacer un menú hamburguesa) */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                    <Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link>
                    <Link href="#tecnologias" className="hover:text-white transition-colors">Tecnologías</Link>
                    <Link href="#sobre-mi" className="hover:text-white transition-colors text-blue-400">Prácticas Verano 2026</Link>
                </div>

                <a href="mailto:tu@email.com" className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all">
                    Contacto
                </a>
            </div>
        </nav>
    );
};