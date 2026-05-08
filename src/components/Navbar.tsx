
import { useEffect, useState } from "react";

export const NAV_LINKS = ["about", "skills", "projects", "experience", "contactme"];

export const Navbar = ({ active }: { active: string }) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#080810]/90 backdrop-blur-xl border-b border-white/[0.06]" : ""}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" className="font-mono text-sm text-emerald-400 tracking-widest hover:text-emerald-300 transition-colors">
                    Aaron<span className="text-white/30">.</span>DEV
                </a>
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            className={`font-mono text-[12px] tracking-widest uppercase transition-colors duration-200 ${active === link ? "text-emerald-400" : "text-white/30 hover:text-white/70"
                                }`}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    {/* 👇 Botón CV */}
                    <a
                        href="/cv.pdf"
                        download="Luis_Aaron_Lopez_Ramirez_CV.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white/60 font-mono text-[11px] tracking-widest hover:bg-white/10 hover:text-white/90 transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        CV
                    </a>
                    {/* Botón HIRE ME original */}
                    <a
                        href="https://www.linkedin.com/in/luis-aaron-lopez-ramirez/" target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 font-mono text-[11px] tracking-widest hover:bg-emerald-500/10 transition-all duration-200"
                    >
                        HIRE ME
                    </a>
                </div >
            </div>
        </nav >
    );
}