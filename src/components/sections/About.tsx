'use client';

import { Reveal } from '../ui/Reveal';

import { useLocale } from '@/context/LocaleContext';
import { useTranslations } from '@/i18n/useTranslations';

export const About = () => {
    const { locale } = useLocale();
    const t = useTranslations(locale);
    return (
        <section id="experiencia" className="mb-16 md:mb-20">
            <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 flex items-center gap-4">
                {t('about.title')}
                <div className="h-[1px] flex-1 divider-light"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <Reveal>
                    <div className="card p-6 md:p-8 rounded-xl">
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mt-6">{t('about.academic')}</h4>
                                <p className="text-sm muted">{t('about.school')}</p>
                                <p className="text-xs muted mt-1">{t('about.finishing')}</p>
                            </div>
                            <div>
                                <p className="text-sm leading-relaxed">
                                    {t('about.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Contacto directo */}
            <div className="mt-8 p-6 md:p-8 rounded-xl bg-blue-50 dark:bg-gray-800">
                <p className="text-sm md:text-base mb-4 text-gray-900 dark:text-white">
                    {t('about.looking')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`mailto:${t('about.email')}`} className="px-4 py-2 btn-primary rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                        {t('about.email')}
                    </a>
                </div>
            </div>
        </section>
    );
};
