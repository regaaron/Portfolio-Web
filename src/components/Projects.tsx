import  { colorMap } from "@/App";
import  { PROJECTS } from "@/data/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import  { Badge } from "lucide-react";
import { useState } from "react";
import  { GlassCard } from "./ui/GlassCard";
import { SectionLabel } from "./ui/SectionLabel";


export const Projects = () => {
    const [selected, setSelected] = useState(null);
    const [ref, visible] = useScrollReveal();

    const featured = PROJECTS.find((p) => p.featured);
    const rest = PROJECTS.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-32">
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <SectionLabel number="03" label="Projects" />
                <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">
                    Proyectos <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">destacados</span>
                </h2>

                {/* Featured */}
                <div
                    className="relative mb-6 p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent cursor-pointer hover:border-emerald-500/40 transition-all duration-300 group"
                    onClick={() => setSelected(selected === featured.id ? null : featured.id)}
                >
                    <div className="absolute top-4 right-4">
                        <span className="font-mono text-[10px] px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 tracking-widest">
                            FEATURED
                        </span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white group-hover:text-emerald-300 transition-colors">{featured.title}</h3>
                            <p className="text-white/40 text-sm mt-1">{featured.subtitle}</p>
                            <p className="font-mono text-[11px] text-white/20 tracking-widest mt-2">{featured.period}</p>
                        </div>
                    </div>
                    <p className="text-white/50 leading-relaxed mb-4">{featured.description}</p>

                    {selected === featured.id && (
                        <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                            {featured.highlights.map((h) => (
                                <div key={h} className="flex items-start gap-2 text-white/50 text-sm">
                                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                                    {h}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                        {featured.tags.map((t) => <Badge key={t} color="emerald">{t}</Badge>)}
                    </div>

                    <div className="absolute bottom-4 right-4 text-white/20 group-hover:text-white/40 transition-colors">
                        <svg className={`w-4 h-4 transition-transform duration-200 ${selected === featured.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Rest of projects */}
                <div className="grid md:grid-cols-2 gap-4">
                    {rest.map((project) => {
                        const c = colorMap[project.color] || colorMap.blue;
                        return (
                            <GlassCard
                                key={project.id}
                                className={`p-6 cursor-pointer ${selected === project.id ? `border-${project.color}-500/30` : ""}`}
                            >
                                <div onClick={() => setSelected(selected === project.id ? null : project.id)}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                                            <svg className={`w-5 h-5 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <span className="font-mono text-[10px] text-white/20 tracking-widest">{project.period}</span>
                                    </div>
                                    <h3 className="font-medium text-white mb-1">{project.title}</h3>
                                    <p className={`text-sm ${c.text} mb-3`}>{project.subtitle}</p>
                                    <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>

                                    {selected === project.id && (
                                        <div className="mb-4 space-y-2 pt-3 border-t border-white/[0.06]">
                                            {project.highlights.map((h) => (
                                                <div key={h} className="flex items-start gap-2 text-white/50 text-sm">
                                                    <span className={`${c.text} mt-0.5 flex-shrink-0`}>→</span>
                                                    {h}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map((t) => <Badge key={t} color={project.color}>{t}</Badge>)}
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
