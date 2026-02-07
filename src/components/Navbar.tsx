"use client";

import Link from "next/link";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { messages } from "@/i18n/messages";
import Image from "next/image";

import { useLocale } from '@/context/LocaleContext';

export const Navbar = () => {
    const { locale, setLocale } = useLocale();
    const t = messages[locale].navbar;

    return (
        <nav className="fixed top-0 w-full z-50 border-b bg-white/60 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                    <Link
                        href="#top"
                        scroll={true}
                        className="flex items-center gap-2 md:gap-3"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            // Actualiza el hash manualmente
                            if (window.location.hash !== '#top') {
                                window.location.hash = '#top';
                            }
                        }}
                    >
                        <Image
                            src="/projects/logo-JFL.png"
                            alt="Logo JFL"
                            width={32}
                            height={32}
                            className="rounded-full bg-white border border-gray-200 shadow-sm cursor-pointer"
                        />
                        <div className="flex flex-col justify-center">
                            <span className="font-extrabold text-sm md:text-lg tracking-tight text-foreground hidden sm:inline">
                                {t.name}
                            </span>
                            <span className="font-extrabold text-sm md:text-lg tracking-tight text-foreground sm:hidden">JF</span>
                            <span className="hidden md:inline-block kicker text-xs md:text-sm" style={{ color: 'var(--fg)' }}>Oviedo · Ponferrada</span>
                        </div>
                    </Link>
                </div>

                <div className="hidden md:flex gap-6 text-sm font-medium" style={{ color: "var(--fg)" }}>
                    <Link href="#sobre-mi" className="hover:text-[var(--primary)] transition-colors">
                        {t.about}
                    </Link>
                    <Link href="#experiencia" className="hover:text-[var(--primary)] transition-colors">
                        {t.experience}
                    </Link>
                    <Link href="#proyectos" className="hover:text-[var(--primary)] transition-colors">
                        {t.projects}
                    </Link>
                    <Link href="#tecnologias" className="hover:text-[var(--primary)] transition-colors">
                        {t.skills}
                    </Link>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <a
                        href="mailto:juanfernandezlopez729@gmail.com"
                        className="hidden sm:flex p-2 text-gray-600 hover:text-[var(--primary)] transition-colors"
                        title="Email"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="https://github.com/uo296143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex p-2 text-gray-600 hover:text-[var(--primary)] transition-colors"
                        title="GitHub Personal"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/juan-fern%C3%A1ndez-l%C3%B3pez-6681b9333/?trk=opento_sprofile_details"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex p-2 text-gray-600 hover:text-[var(--primary)] transition-colors"
                        title="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="/CV_Juan_Fernandez_Lopez.pdf"
                        download="CV_Juan_Fernandez_Lopez.pdf"
                        className="hidden sm:flex px-3 md:px-4 py-2 btn-primary rounded-full text-xs md:text-sm font-semibold hover:scale-[1.02] transition-transform"
                    >
                        {t.cv}
                    </a>
                    <a
                        href="/CV_Juan_Fernandez_Lopez.pdf"
                        download="CV_Juan_Fernandez_Lopez.pdf"
                        className="sm:hidden px-3 py-2 btn-primary rounded-full text-xs font-semibold"
                    >
                        {t.cv}
                    </a>
                    <LanguageSwitcher locale={locale} setLocale={setLocale} />
                </div>
                <div className="hidden md:flex items-center gap-3">
                </div>
            </div>
        </nav>
    );
};