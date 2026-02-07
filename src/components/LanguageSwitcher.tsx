"use client";
import { useState } from "react";
import Image from "next/image";
import { messages } from "@/i18n/messages";

const flags = {
    es: "/projects/flag-es.png",
    en: "/projects/flag-en.png",
};

import { useLocale } from '@/context/LocaleContext';

export function LanguageSwitcher() {
    const { locale, setLocale } = useLocale();
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button
                className="flex items-center gap-2 px-2 py-1 rounded border border-gray-200"
                style={{ background: 'var(--surface)', color: 'var(--fg)' }}
                onClick={() => setOpen((v) => !v)}
                aria-label="Select language"
            >
                <Image src={flags[locale as keyof typeof flags]} alt={locale} width={20} height={14} />
                <span className="capitalize" style={{ color: 'var(--fg)' }}>{locale}</span>
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-32 border border-gray-200 rounded shadow-lg z-50"
                    style={{ background: 'var(--surface)' }}>
                    {Object.entries(flags).map(([key, flag]) => (
                        <button
                            key={key}
                            className="flex items-center gap-2 w-full px-3 py-2 text-left"
                            style={{ color: 'var(--fg)', background: 'var(--surface)' }}
                            onClick={() => { setLocale(key as "es" | "en"); setOpen(false); }}
                        >
                            <Image src={flag} alt={key} width={20} height={14} />
                            <span className="capitalize" style={{ color: 'var(--fg)' }}>{key}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
