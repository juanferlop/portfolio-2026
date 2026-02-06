"use client";
import { useState } from "react";
import Image from "next/image";
import { messages } from "@/i18n/messages";

const flags = {
    es: "/projects/flag-es.png",
    en: "/projects/flag-en.png",
};

export function LanguageSwitcher({ locale, setLocale }: { locale: string; setLocale: (l: string) => void }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 border border-gray-200"
                onClick={() => setOpen((v) => !v)}
                aria-label="Select language"
            >
                <Image src={flags[locale]} alt={locale} width={20} height={14} />
                <span className="capitalize">{locale}</span>
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
                    {Object.entries(flags).map(([key, flag]) => (
                        <button
                            key={key}
                            className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 text-left"
                            onClick={() => { setLocale(key); setOpen(false); }}
                        >
                            <Image src={flag} alt={key} width={20} height={14} />
                            <span className="capitalize">{key}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
