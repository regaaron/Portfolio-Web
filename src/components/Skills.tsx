import { colorMap } from "@/App";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";

import {
    Atom,        // React
    Layers,      // Angular
    Server,      // Node.js
    Database,    // SQL
    GitBranch,   // Git
    Shield,      // Auth
    Globe,       // APIs
    Smartphone,  // Mobile
    Cpu,         // Java / lógica backend
    Flame,       // Firebase
    Mail,        // Email
    Map          // Maps
} from "lucide-react";


export const SKILLS = [
    { name: "React", category: "Frontend", icon: Atom, color: "cyan" },
    { name: "Angular", category: "Frontend", icon: Layers, color: "red" },
    { name: "Node.js", category: "Backend", icon: Server, color: "green" },
    { name: "SQL", category: "Base de Datos", icon: Database, color: "blue" },
    { name: "Git", category: "Control de Versiones", icon: GitBranch, color: "orange" },
    { name: "REST APIs", category: "Integración", icon: Globe, color: "violet" },
    { name: "Autenticación JWT", category: "Seguridad", icon: Shield, color: "amber" },
    { name: "Kotlin", category: "Android", icon: Smartphone, color: "purple" },
    { name: "Java", category: "Backend", icon: Cpu, color: "yellow" },
    { name: "Firebase", category: "Backend / Auth", icon: Flame, color: "orange" },
    { name: "Google Maps API", category: "Servicios", icon: Map, color: "red" },
    { name: "Nodemailer", category: "Email", icon: Mail, color: "sky" },
];

export const Skills = () => {
    const [ref, visible] = useScrollReveal();

    return (
        <section
            id="skills"
            className="py-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"
        >
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <SectionLabel number="02" label="Skills" />

                <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">
                    Stack{" "}
                    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                        técnico
                    </span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {SKILLS.map((skill, i) => {
                        const c = colorMap[skill.color] || colorMap.emerald;
                        const Icon = skill.icon; // 👈 clave

                        return (
                            <div
                                key={skill.name}
                                style={{ animationDelay: `${i * 60}ms` }}
                                className={`group relative p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-300 cursor-default ${visible
                                    ? "animate-[fadeUp_0.5s_ease_forwards]"
                                    : "opacity-0"
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                                >
                                    <Icon className={`w-4 h-4 ${c.text}`} />
                                </div>

                                <p className="text-white/80 text-sm font-medium leading-tight">
                                    {skill.name}
                                </p>
                                <p className="text-white/30 text-[11px] mt-1">
                                    {skill.category}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};