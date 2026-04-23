import { colorMap } from "@/App";
import { PROJECTS } from "@/data/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { GlassCard } from "./ui/GlassCard";
import { SectionLabel } from "./ui/SectionLabel";
import { Badge } from "./ui/Badge"; // 👈 CORREGIDO

type ColorKey = keyof typeof colorMap;

export const Projects = () => {
    const [selected, setSelected] = useState<number | null>(null); // 👈 FIX
    const [ref, visible] = useScrollReveal();

    const featured = PROJECTS.find((p) => p.featured);
    const rest = PROJECTS.filter((p) => !p.featured);

    // 👇 FIX: evitar undefined
    if (!featured) return null;

    return (
        <section id="projects" className="py-32">
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <SectionLabel number="03" label="Projects" />

                <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">
                    Proyectos{" "}
                    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                        destacados
                    </span>
                </h2>

                {/* Featured */}
                <div
                    className="relative mb-6 p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent cursor-pointer hover:border-emerald-500/40 transition-all duration-300 group"
                    onClick={() =>
                        setSelected(selected === featured.id ? null : featured.id)
                    }
                >
                    <div className="absolute top-4 right-4">
                        <span className="font-mono text-[10px] px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 tracking-widest">
                            FEATURED
                        </span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-white group-hover:text-emerald-300">
                                {featured.title}
                            </h3>
                            <p className="text-white/40 text-sm mt-1">{featured.subtitle}</p>
                            <p className="font-mono text-[11px] text-white/20 mt-2">
                                {featured.period}
                            </p>
                        </div>
                    </div>

                    <p className="text-white/50 mb-4">{featured.description}</p>

                    {selected === featured.id && (
                        <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                            {featured.highlights.map((h) => (
                                <div key={h} className="flex gap-2 text-white/50 text-sm">
                                    <span className="text-emerald-400">→</span>
                                    {h}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                        {featured.tags.map((t) => (
                            <Badge key={t} color="emerald">
                                {t}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Rest */}
                <div className="grid md:grid-cols-2 gap-4">
                    {rest.map((project) => {
                        const c =
                            colorMap[project.color as ColorKey] || colorMap.blue; // 👈 FIX

                        return (
                            <GlassCard key={project.id} className="p-6 cursor-pointer">
                                <div
                                    onClick={() =>
                                        setSelected(
                                            selected === project.id ? null : project.id
                                        )
                                    }
                                >
                                    <div className="flex justify-between mb-4">
                                        <div
                                            className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}
                                        >
                                            <svg className={`w-5 h-5 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16" />
                                            </svg>
                                        </div>

                                        <span className="text-white/20 text-xs">
                                            {project.period}
                                        </span>
                                    </div>

                                    <h3 className="text-white">{project.title}</h3>
                                    <p className={`${c.text} text-sm`}>
                                        {project.subtitle}
                                    </p>

                                    {selected === project.id && (
                                        <div className="mt-3 space-y-2">
                                            {project.highlights.map((h) => (
                                                <div key={h} className="text-sm text-white/50">
                                                    → {h}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex gap-2 mt-3 flex-wrap">
                                        {project.tags.map((t) => (
                                            <Badge key={t} color={project.color as ColorKey}>
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};