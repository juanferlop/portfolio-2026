import { Github, ExternalLink, Download, Code2 } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    progress: number;
    stack: string[];
    github: string;
    deploy?: string;
    download?: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            {/* Barra de progreso innovadora */}
            <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                    <span>Progreso</span>
                    <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div
                        className="bg-blue-500 h-full transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                    />
                </div>
            </div>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] rounded border border-blue-500/20">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Acciones */}
            <div className="flex gap-4">
                <a href={project.github} className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
                {project.deploy && <a href={project.deploy} className="hover:text-blue-400 transition-colors"><ExternalLink size={20} /></a>}
                {project.download && <a href={project.download} className="hover:text-blue-400 transition-colors" title="Download APK"><Download size={20} /></a>}
            </div>
        </div>
    );
};