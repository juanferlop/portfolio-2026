'use client';

import { Reveal } from '../ui/Reveal';

export const About = () => {
    return (
        <section id="experiencia" className="mb-16 md:mb-20">
            <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 flex items-center gap-4">
                Experiencia y Especialización
                <div className="h-[1px] flex-1 divider-light"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <Reveal>
                    <div className="card p-6 md:p-8 rounded-xl">
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mt-6">Formación Académica</h4>
                                <p className="text-sm muted">Escuela de Ingeniería Informática de Oviedo</p>
                                <p className="text-xs muted mt-1">Finalizando grado • 2027</p>
                            </div>
                            <div>
                                <p className="text-sm leading-relaxed">
                                    Formación especializada en <strong>Java</strong> y <strong>Programación Orientada a Objetos</strong>, con énfasis en desarrollo de software robusto y mantenible. Experiencia práctica en proyectos académicos que aplican patrones de diseño para hacer el software más mantenible y de mayor calidad. También he trabajado con tecnologías modernas como <strong>React, TypeScript, Kotlin, Rust</strong> y otros lenguajes/frameworks que muestro en mis proyectos.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Contacto directo */}
            <div className="mt-8 p-6 md:p-8 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                <p className="text-sm md:text-base mb-4">
                    Estoy buscando una oportunidad para realizar prácticas profesionales durante el verano de 2026, donde pueda aportar mis conocimientos, aprender de un gran equipo y comenzar mi carrera con entusiasmo y dedicación.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a href="mailto:juanfernandezlopez729@gmail.com" className="px-4 py-2 btn-primary rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                        juanfernandezlopez729@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};
