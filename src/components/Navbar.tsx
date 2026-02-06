"use client";

import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { messages } from "@/i18n/messages";
import Image from "next/image";

export const Navbar = () => {
    const [locale, setLocale] = useState<"es" | "en">("es");
    const t = messages[locale].navbar;

    return (
        <nav className="fixed top-0 w-full z-50 border-b bg-white/60 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-4">
                    <Image
                        src="/projects/logo-JFL.png"
                        alt="Logo JFL"
                        width={32}
                        height={32}
                        className="rounded-full bg-white border border-gray-200 shadow-sm"
                    />
                    <span className="font-extrabold text-sm md:text-lg tracking-tight text-foreground hidden sm:inline">
                        Juan Fernández López
                    </span>
                    <span className="font-extrabold text-sm md:text-lg tracking-tight text-foreground sm:hidden">JF</span>
                    <span className="hidden md:inline-block kicker">Oviedo · Ponferrada</span>
                </div>

                <div className="hidden md:flex gap-6 text-sm font-medium" style={{ color: "var(--muted)" }}>
                    <Link href="#sobre-mi" className="hover:text-[var(--primary)] transition-colors">
                        {t.about}
                    </Link>
                    <Link href="#experiencia" className="hover:text-[var(--primary)] transition-colors">
                        Experiencia
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
                        CV
                    </a>
                    <a
                        href="/CV_Juan_Fernandez_Lopez.pdf"
                        download="CV_Juan_Fernandez_Lopez.pdf"
                        className="sm:hidden px-3 py-2 btn-primary rounded-full text-xs font-semibold"
                    >
                        CV
                    </a>
                    <LanguageSwitcher locale={locale} setLocale={setLocale} />
                </div>
                <div className="hidden md:flex items-center gap-3">
                </div>
            </div>
        </nav>
    );
};