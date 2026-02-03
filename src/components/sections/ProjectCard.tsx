import Image from 'next/image';
import { Github, ExternalLink, Download } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    progress: number;
    stack: string[];
    github: string;
    deploy?: string;
    demo?: string;
    download?: string;
    image?: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <article className="card overflow-hidden transform hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
            {project.demo?.includes("youtube") ? (
                <div className="w-full relative" style={{ aspectRatio: "16/9" }}>
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
                <div className="w-full h-48 relative overflow-hidden bg-gray-100">
                    <Image
                        src={project.image}
                        alt={`${project.title} - Proyecto`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ) : null}

            <div className="project-card-body" style={{ minHeight: 160 }}>
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base md:text-lg font-bold flex-1 group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>
                    {project.progress === 100 && (
                        <span className="ml-2 px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-700">Completado</span>
                    )}
                </div>

                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--muted)' }}>{project.description}</p>

                {project.progress < 100 && (
                    <div className="mb-4">
                        <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--muted)' }}>
                            <span>Progreso</span>
                            <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(15,23,42,0.04)' }}>
                            <div
                                className="h-full"
                                style={{ width: `${project.progress}%`, background: 'linear-gradient(90deg, var(--primary), var(--accent))' }}
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