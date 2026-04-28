import { useState, useEffect } from "react";
import { ProfileCard } from "./ProfileCard";

export const Hero = () => {
    const [typed, setTyped] = useState("");
    const words = [
        "Frontend Developer",
        "Backend Developer",
        "Full-stack Developer",
        "REST API Developer",
        "SQL Database Developer"
    ];
    const [wIdx, setWIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wIdx];
        let timeout: any;
        if (!deleting && typed.length < word.length) {
            timeout = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 80);
        } else if (!deleting && typed.length === word.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && typed.length > 0) {
            timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 40);
        } else if (deleting && typed.length === 0) {
            setDeleting(false);
            setWIdx((i) => (i + 1) % words.length);
        }
        return () => clearTimeout(timeout);
    }, [typed, deleting, wIdx]);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,160,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
            {/* Radial glow */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20"> */}
            <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
                <div>


                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-[11px] text-emerald-400 tracking-widest">AVAILABLE FOR WORK</span>
                    </div>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-6">
                        <span className="block text-white">Luis Aaron</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-medium">
                            Lopez Ramirez
                        </span>
                    </h1>

                    {/* Typewriter */}
                    <div className="flex items-center gap-2 mb-8 h-8">
                        <span className="font-mono text-lg text-white/50">&gt;</span>
                        <span className="font-mono text-lg text-emerald-400">{typed}</span>
                        <span className="w-0.5 h-6 bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Description */}
                    <p className="max-w-lg text-white/60 text-lg leading-relaxed mb-10 font-light">
                        Desarrollo aplicaciones web completas, integrando frontend, backend
                        y bases de datos. Me enfoco en crear soluciones eficientes,
                        escalables y con una experiencia de usuario sólida.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-mono text-sm tracking-wider font-bold hover:bg-emerald-400 transition-all duration-200 hover:scale-105 active:scale-100"
                        >
                            VER PROYECTOS
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#contactme"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 font-mono text-sm tracking-wider hover:border-white/20 hover:text-white transition-all duration-200"
                        >
                            CONTACTARME
                        </a>
                    </div>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-8 pt-8 border-t border-white/[0.06]">
                        {[["5+", "Proyectos"], ["1+", "Años exp."], ["6+", "Tecnologías"], ["Dic 2025", "Graduación"]].map(([num, label]) => (
                            <div key={label}>
                                <div className="font-mono text-2xl text-white font-bold">{num}</div>
                                <div className="font-mono text-[11px] text-white/30 tracking-widest mt-1">{label.toUpperCase()}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <ProfileCard />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <div className="font-mono text-[10px] text-white/20 tracking-widest">SCROLL</div>
                <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}