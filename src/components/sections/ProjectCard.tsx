"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Github, ExternalLink, Download, Users } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface Project {
    title: string;
    description: string;
    progress: number;
    stack: string[];
    github: string;
    deploy?: string;
    demo?: string;
    download?: string;
    image?: string; // base path without extension, e.g. /projects/paycarbierzo
    isTeam?: boolean; // Indica si es un proyecto en equipo
}

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <article className="card overflow-hidden transform hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
            {project.demo?.includes("youtube") ? (
                <div className={`w-full relative ${styles.aspectRatio16_9}`}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={project.demo}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        title={`${project.title} - Demo`}
                    />
                </div>
            ) : project.image ? (
                <ImageBlock imageBase={project.image} title={project.title} />
            ) : null}

            <div className={`project-card-body ${styles.projectCardBody}`}>
                <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-base md:text-lg font-bold group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>
                            <div className="flex items-center gap-2">
                                {project.isTeam && (
                                    <span title="Proyecto en equipo" className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                                        <Users size={14} />
                                        Equipo
                                    </span>
                                )}
                                {project.progress === 100 ? (
                                    <span className="px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-700">Completado</span>
                                ) : (
                                    <span className="px-2 py-1 text-xs font-semibold rounded bg-yellow-100 text-yellow-700">En proceso</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <p className={`text-sm mb-4 line-clamp-none ${styles.projectCardDescription}`}>{project.description}</p>

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
                                style={{ width: `${project.progress}%` }}
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