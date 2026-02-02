import { skills } from '@/data/skills';

export const Skills = () => {
    return (
        <section id="tecnologias" className="py-20">
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
                Stack Tecnológico
                <div className="h-[1px] flex-1 bg-white/10"></div>
            </h2>

            {/* Grid responsivo: 2 columnas en móvil, 4 en tablet, 6 en desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <p className="text-sm font-medium group-hover:text-blue-400 transition-colors">{skill.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">{skill.category}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};