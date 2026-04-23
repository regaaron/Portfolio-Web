
import { useEffect, useState } from "react";

export const NAV_LINKS = ["about", "skills", "projects", "experience", "contactme"];

export const  Navbar = ({ active } : { active: string }) => {
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
                <a
                    href="https://www.linkedin.com/in/luis-aaron-lopez-ramirez/" target="_blank"
                    className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 font-mono text-[11px] tracking-widest hover:bg-emerald-500/10 transition-all duration-200"
                >
                    HIRE ME
                </a>
            </div>
        </nav>
    );
}