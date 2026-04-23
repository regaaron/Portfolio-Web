
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { SectionLabel } from "./ui/SectionLabel";

export const Contact = () => {
    const [ref, visible] = useScrollReveal();
    const [copied, setCopied] = useState("");

    const copy = (text: string, label: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(label);
            setTimeout(() => setCopied(""), 2000);
        });
    };

    return (
        <section id="contactme" className="py-32 scroll-mt-32">
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <SectionLabel number="05" label="Contact" />

                <div className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent p-12 md:p-16 overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative text-center max-w-xl mx-auto">
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-mono text-[11px] text-emerald-400 tracking-widest">OPEN TO OPPORTUNITIES</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
                            ¿Trabajamos <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">juntos?</span>
                        </h2>

                        <p className="text-white/40 text-lg mb-12 leading-relaxed">
                            Estoy buscando mi primera oportunidad como desarrollador.
                            Tengo experiencia con Angular, Node.js y desarrollo de aplicaciones,
                            y muchas ganas de seguir aprendiendo y aportar en un equipo profesional.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <button
                                onClick={() => copy("aaron_lopez222@hotmail.com", "email")}
                                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 text-white/60 hover:text-white"
                            >
                                <svg className="w-5 h-5 text-white/30 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="font-mono text-sm">
                                    {copied === "email" ? "✓ COPIADO" : "aaron_lopez222@hotmail.com"}
                                </span>
                            </button>
                            <button
                                onClick={() => copy("+524493877833", "phone")}
                                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 text-white/60 hover:text-white"
                            >
                                <svg className="w-5 h-5 text-white/30 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="font-mono text-sm">
                                    {copied === "phone" ? "✓ COPIADO" : "(52+) 449 387 7833"}
                                </span>
                            </button>
                        </div>

                        <a
                            href="mailto:aaron_lopez222@hotmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-black font-mono text-sm tracking-wider font-bold hover:bg-emerald-400 transition-all duration-200 hover:scale-105 active:scale-100 shadow-lg shadow-emerald-500/25"
                        >
                            ENVIAR EMAIL
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
