import { EXPERIENCE } from "@/data/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import  { GlassCard } from "./ui/GlassCard";
import { SectionLabel } from "./ui/SectionLabel";

export const  Experience = () => {
    const [ref, visible] = useScrollReveal();
    return (
        <section id="experience" className="py-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <SectionLabel number="04" label="Experience" />
                <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">
                    Experiencia <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">profesional</span>
                </h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-white/10 to-transparent" />

                    <div className="space-y-8 pl-8 md:pl-16">
                        {EXPERIENCE.map((exp, i) => (
                            <div key={i} className="relative group">
                                {/* Dot */}
                                <div className={`absolute -left-8 md:-left-16 top-1 w-3 h-3 rounded-full border-2 border-[#080810] ${exp.current ? "bg-emerald-400" : "bg-white/20"} group-hover:bg-emerald-400 transition-colors duration-300`} />
                                {exp.current && (
                                    <div className="absolute -left-[38px] md:-left-[66px] top-0 w-5 h-5 rounded-full bg-emerald-400/20 animate-ping" />
                                )}

                                <GlassCard className="p-6">
                                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-medium text-white">{exp.role}</h3>
                                                {exp.current && (
                                                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">CURRENT</span>
                                                )}
                                            </div>
                                            <p className="text-emerald-400/80 text-sm">{exp.company}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-mono text-[11px] text-white/30 tracking-widest">{exp.period}</p>
                                            <p className="font-mono text-[10px] text-white/20 mt-1">{exp.location}</p>
                                        </div>
                                    </div>
                                    <p className="text-white/40 text-sm leading-relaxed">{exp.desc}</p>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}