import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GlassCard } from "./ui/GlassCard";
import { SectionLabel } from "./ui/SectionLabel";
import { useState } from "react";


export const About = () => {
    const [ref, visible] = useScrollReveal();
    const [copied, setCopied] = useState("");

    const copy = (text: string, type: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(type);
            setTimeout(() => setCopied(""), 3000);
        });
    };
    return (
        <section id="about" className="py-32">
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <SectionLabel number="01" label="About" />
                <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">
                    Sobre <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">mí</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 text-white/50 text-lg leading-relaxed font-light">
                        <p>
                            Soy <span className="text-white/80">Ingeniero en Sistemas Computacionales</span> recién egresado,
                            enfocado en desarrollo <span className="text-white/80">full-stack</span> y tecnologías modernas.
                        </p>

                        <p>
                            Actualmente busco mi primera oportunidad profesional para trabajar en proyectos reales,
                            aportar valor a un equipo y seguir creciendo como desarrollador.
                        </p>

                        <p>
                            Tengo experiencia construyendo aplicaciones web y móviles, incluyendo plataformas tipo Uber,
                            sistemas universitarios y proyectos con enfoque en experiencia de usuario.
                        </p>
                        <div className="pt-2 flex gap-4">
                            <span className="inline-flex items-center gap-1.5 text-sm text-white/40">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20" /> Español nativo
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-sm text-white/40">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> English
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Education card */}
                        <GlassCard className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.1V21M12 14l-6.16-3.422A12.083 12.083 0 003 13.1V21M3 21h18" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white/80 font-medium text-sm">Ingeniería en Sistemas Computacionales</p>
                                    <p className="text-white/30 text-sm mt-0.5">Universidad Autónoma de Aguascalientes</p>
                                    <p className="text-emerald-400 font-mono text-xs mt-2 tracking-wide">GRADUACIÓN DIC 2025</p>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Location card */}
                        <GlassCard className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white/80 font-medium text-sm">Aguascalientes, México</p>
                                    <p className="text-white/30 text-sm mt-0.5">
                                        Abierto a oportunidades remotas, híbridas o presenciales
                                    </p>
                                    <p className="text-blue-400 font-mono text-xs mt-2 tracking-wide">OPEN TO RELOCATION</p>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Contact quick */}
                        <GlassCard className="p-6">
                            <div className="space-y-3">
                                <button
                                    onClick={() => copy("aaron_lopez222@hotmail.com", "email")}
                                    className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors text-sm group"
                                >  <svg className="w-4 h-4 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {copied === "email" ? "✓ Copiado" : "aaron_lopez222@hotmail.com"}
                                </button>
                                <button
                                    onClick={() => copy("+524493877833", "phone")}
                                    className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors text-sm group"
                                > <svg className="w-4 h-4 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {copied === "phone" ? "✓ Copiado" : "(52+) 449 387 7833"}
                                </button>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
}