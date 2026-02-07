"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { useTranslations } from '@/i18n/useTranslations';
import { Github, ExternalLink, Download, Users, CheckCircle, Clock, GraduationCap, Briefcase } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface Project {
    id: string;
    progress: number;
    stack: string[];
    github: string;
    deploy?: string;
    demo?: string;
    download?: string;
    image?: string; // base path without extension, e.g. /projects/paycarbierzo
    isTeam?: boolean; // Indica si es un proyecto en equipo
}

export const ProjectCard = ({ project }: { project: Project & { videos?: string[] } }) => {
    const { locale } = useLocale();
    const t = useTranslations(locale);
    // projectCard translations as object
    const tc = t('projectCard') as unknown as Record<string, string>;
    // Mixed carousel state (image + videos)
    const hasImage = !!project.image;
    const hasVideos = Array.isArray(project.videos) && project.videos.length > 0;
    const slides = [
        ...(hasImage ? [{ type: 'image', src: project.image }] : []),
        ...(hasVideos ? (project.videos ?? []).map(v => ({ type: 'video', src: v })) : [])
    ];
    const [slideIndex, setSlideIndex] = useState(0);

    // Helper to convert any YouTube link (normal, shorts, share) to embed URL
    function toYouTubeEmbed(url: string | undefined): string {
        if (!url) return '';
        // Shorts: https://youtube.com/shorts/ID  => https://www.youtube.com/embed/ID
        const shortsMatch = url.match(/youtube\.com\/shorts\/([\w-]+)/);
        if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;
        // Normal: https://www.youtube.com/watch?v=ID  => https://www.youtube.com/embed/ID
        const watchMatch = url.match(/[?&]v=([\w-]+)/);
        if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
        // Share: https://youtu.be/ID  => https://www.youtube.com/embed/ID
        const shareMatch = url.match(/youtu\.be\/([\w-]+)/);
        if (shareMatch) return `https://www.youtube.com/embed/${shareMatch[1]}`;
        // Already embed or unknown, return as is
        return url;
    }

    const renderCarousel = () => {
        if (slides.length === 0) return null;
        const current = slides[slideIndex];
        return (
            <div className={`w-full relative ${styles.aspectRatio16_9} flex items-center justify-center`}>
                {slides.length > 1 && (
                    <button
                        aria-label="Anterior"
                        className={`${styles.carouselNavButton} ${styles.left}`}
                        onClick={e => { e.stopPropagation(); setSlideIndex(i => (i - 1 + slides.length) % slides.length); }}
                    >
                        &#8592;
                    </button>
                )}
                {current.type === 'image' ? (
                    <ImageBlock imageBase={current.src ?? ''} title={t(`projects.${project.id}.title`)} />
                ) : (
                    <iframe
                        width="100%"
                        height="100%"
                        src={toYouTubeEmbed(current.src)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded"
                        title={t(`projects.${project.id}.title`) + ' - Video'}
                    />
                )}
                {slides.length > 1 && (
                    <button
                        aria-label="Siguiente"
                        className={`${styles.carouselNavButton} ${styles.right}`}
                        onClick={e => { e.stopPropagation(); setSlideIndex(i => (i + 1) % slides.length); }}
                    >
                        &#8594;
                    </button>
                )}
                {slides.length > 1 && (
                    <div className={styles.carouselDots}>
                        {slides.map((_, idx) => (
                            <span key={idx} className={`inline-block w-2 h-2 rounded-full ${idx === slideIndex ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <article className="card overflow-hidden transform hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
            {/* Mixed carousel: image + videos */}
            {slides.length > 0
                ? renderCarousel()
                : project.demo?.includes("youtube") ? (
                    <div className={`w-full relative ${styles.aspectRatio16_9}`}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={project.demo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                            title={t(`projects.${project.id}.title`) + ' - Demo'}
                        />
                    </div>
                ) : null}

            <div className={`project-card-body ${styles.projectCardBody}`}>
                <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-base md:text-lg font-bold group-hover:text-[var(--primary)] transition-colors">{t(`projects.${project.id}.title`)}</h3>
                            <div className="flex items-center gap-2">
                                {project.isTeam && (
                                    <span title={tc.team} className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                                        <Users size={14} />
                                        {tc.team}
                                    </span>
                                )}
                                {project.progress === 100 ? (
                                    <span className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-700">
                                        <CheckCircle size={14} className="text-green-500" />
                                        {tc.completed}
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded bg-yellow-100 text-yellow-700">
                                        <Clock size={14} className="text-yellow-500" />
                                        {tc.inProgress}
                                    </span>
                                )}
                                {project.isAutonomous && (
                                    <span title={tc.autonomous} className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                                        <Briefcase size={14} />
                                        {tc.autonomous}
                                    </span>
                                )}
                                {project.isSchool && (
                                    <span title={tc.school} className="flex items-center gap-1 px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full">
                                        <GraduationCap size={14} />
                                        {tc.school}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <p className={`text-sm mb-4 line-clamp-none ${styles.projectCardDescription}`}>{t(`projects.${project.id}.description`)}</p>

                {project.progress < 100 && (
                    <div className="mb-4">
                        <div className={`flex justify-between text-xs mb-1 ${styles.projectCardProgressLabel}`}>
                            <span>Progreso</span>
                            <span>{project.progress}%</span>
                        </div>
                        <div className={`w-full bg-gray-100 h-2 rounded-full overflow-hidden ${styles.projectCardProgressBar}`}>
                            <div
                                className={`h-full ${styles.projectCardProgressInner}`}
                                data-progress={project.progress}
                                style={{ ['--progress-width' as any]: `${project.progress}%` }}
                            />
                        </div>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                        <span key={tech} className="pill text-xs">{tech}</span>
                    ))}
                </div>

                <div className="flex gap-3 pt-2 border-t border-gray-100">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm muted hover:text-[var(--primary)] transition-colors"
                        title="Ver en GitHub"
                    >
                        <Github size={16} />
                        <span className="hidden sm:inline">Código</span>
                    </a>
                    {project.demo && !project.demo.includes("youtube") && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm muted hover:text-[var(--primary)] transition-colors"
                            title="Ver en vivo"
                        >
                            <ExternalLink size={16} />
                            <span className="hidden sm:inline">Demo</span>
                        </a>
                    )}
                    {project.deploy && (
                        <a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm muted hover:text-[var(--primary)] transition-colors"
                            title="Ver en vivo"
                        >
                            <ExternalLink size={16} />
                            <span className="hidden sm:inline">Demo</span>
                        </a>
                    )}
                    {project.download && (
                        <a
                            href={project.download}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm muted hover:text-[var(--primary)] transition-colors"
                            title="Descargar"
                        >
                            <Download size={16} />
                            <span className="hidden sm:inline">Descargar</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

function ImageBlock({ imageBase, title }: { imageBase: string; title: string }) {
    const [src, setSrc] = useState(imageBase + '.png');

    return (
        <div className="w-full h-48 relative overflow-hidden bg-gray-100">
            <Image
                src={src}
                alt={`${title} - Proyecto`}
                fill
                onError={() => {
                    // fallback to svg if png missing
                    if (src.endsWith('.png')) setSrc(imageBase + '.svg');
                }}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
}