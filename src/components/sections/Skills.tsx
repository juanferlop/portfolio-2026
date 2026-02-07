import { skills } from '@/data/skills';
import * as Icons from 'lucide-react';

import { useTranslations } from '../../i18n/useTranslations';
import { messages } from '../../i18n/messages';
const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
        Code2: Icons.Code2,
        FileCode: Icons.FileCode,
        Palette: Icons.Palette,
        Wind: Icons.Wind,
        Zap: Icons.Zap,
        Type: Icons.Type,
        Smartphone: Icons.Smartphone,
        Code: Icons.Code,
        Coffee: Icons.Coffee,
        Database: Icons.Database,
        Hash: Icons.Hash,
        BarChart3: Icons.BarChart3,
        Trello: Icons.Trello,
        GitBranch: Icons.GitBranch,
    };
    return iconMap[iconName] || Icons.Code2;
};

import { useLocale } from '@/context/LocaleContext';

export const Skills = () => {
    const { locale } = useLocale();
    const t = useTranslations(locale);
    const sk = messages[locale].skills as Record<string, string>;
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    // Map display names to translation keys
    const categoryOrder = [
        { display: 'Frontend', key: 'frontend' },
        { display: 'Desarrollo Móvil', key: 'mobile' },
        { display: 'Desarrollo Web', key: 'web' },
        { display: 'Bases de datos', key: 'db' },
        { display: 'Lenguajes', key: 'languages' },
        { display: 'Herramientas', key: 'tools' }
    ];

    return (
        <section id="tecnologias" className="py-20">
            <h2 className="text-2xl font-bold mb-12 flex items-center gap-4" style={{ color: 'var(--fg)' }}>{sk.stack}</h2>
            <div className="space-y-10">
                {categoryOrder.map(({ display, key }) => (
                    groupedSkills[display] && (
                        <div key={display}>
                            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--fg)' }}>
                                {sk[key] || display}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {groupedSkills[display].map((skill) => {
                                    const IconComponent = getIcon(skill.icon);
                                    return (
                                        <div
                                            key={skill.name}
                                            className="group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]/50 transition-all duration-300 flex flex-col items-center gap-2"
                                        >
                                            <IconComponent size={24} className="group-hover:text-[var(--primary)] transition-colors" />
                                            <p className="text-sm font-medium text-center group-hover:text-[var(--primary)] transition-colors">{skill.name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};