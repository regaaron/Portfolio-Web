import { useState, useEffect } from "react";
import { NAV_LINKS, Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";


/* ─────────────────────────────────────────────
UTILS
───────────────────────────────────────────── */
export const colorMap = {
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", dot: "bg-emerald-400", glow: "shadow-emerald-500/20" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", dot: "bg-blue-400", glow: "shadow-blue-500/20" },
    violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20", dot: "bg-violet-400", glow: "shadow-violet-500/20" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", dot: "bg-amber-400", glow: "shadow-amber-500/20" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", dot: "bg-purple-400", glow: "shadow-purple-500/20" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20", dot: "bg-orange-400", glow: "shadow-orange-500/20" },
    yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20", dot: "bg-yellow-400", glow: "shadow-yellow-500/20" },
    red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20", dot: "bg-red-400", glow: "shadow-red-500/20" },
    sky: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20", dot: "bg-sky-400", glow: "shadow-sky-500/20" },
    teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20", dot: "bg-teal-400", glow: "shadow-teal-500/20" },
    green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", dot: "bg-green-400", glow: "shadow-green-500/20" },
};

export const App = () => {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const sections = ["hero", ...NAV_LINKS];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([e]) => { if (e.isIntersecting) setActiveSection(id); },
                { threshold: 0.3 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach((o) => o?.disconnect());
    }, []);

    return (
        <div className="min-h-screen bg-[#080810] text-white">
            {/* Noise texture overlay */}
            <div className="fixed inset-0 opacity-[0.015] pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }}
            />

            <Navbar active={activeSection} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />   
            <Contact />
            <Footer />
            
        </div>
    );
}