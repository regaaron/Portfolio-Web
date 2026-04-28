import { colorMap } from "@/App";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { GlassCard } from "./ui/GlassCard";
import { SectionLabel } from "./ui/SectionLabel";
import { Badge } from "./ui/Badge";

type ColorKey = keyof typeof colorMap;

export const PROJECTS = [
    {
        id: 1,
        title: "EGEL PRO",
        subtitle: "Exam Preparation Platform",
        period: "Enero 2024 — Presente",
        featured: true,
        description:
            "Plataforma enfocada en la preparación para el examen EGEL mediante evaluaciones diarias. Permite a los usuarios practicar con preguntas tipo examen, reforzar conocimientos clave y medir su progreso de forma continua.",
        highlights: [
            "Sistema de exámenes diarios con preguntas tipo EGEL",
            "Base de datos de preguntas organizadas por temas",
            "Seguimiento de progreso y desempeño del usuario",
            "Interfaz moderna enfocada en experiencia de estudio",
        ],
        tags: ["Angular", "Node.js", "MySQL", "REST API"],
        color: "emerald",
        links: [
            { label: "Front-end", url: "https://github.com/regaaron/ProyectoSeminario" },
            { label: "Back-end", url: "https://github.com/regaaron/egelpro-backend" },
        ],
        images: ["/egel.png"],
    },
    {
        id: 2,
        title: "Gruas App",
        subtitle: "Tow Truck Service Platform",
        period: "Jun 2023 — Dic 2023",
        featured: false,
        description:
            "Aplicación web para la gestión de servicios de grúas, enfocada en la asignación eficiente de solicitudes y monitoreo de unidades en tiempo real.",
        highlights: [
            "Dashboard administrativo para gestión de servicios",
            "Visualización de ubicaciones con Google Maps API",
            "Sistema de roles: administrador, operador y cliente",
            "Asignación y seguimiento de servicios en tiempo real",
        ],
        tags: ["Angular", "Node.js", "Google Maps API", "REST API"],
        color: "blue",
        links: [
            { label: "Front-end", url: "https://github.com/regaaron/Gruas" },
            { label: "Back-end", url: "https://github.com/regaaron/api-gruas2" },
        ],
        images: ["/gruas.jpg"],
    },
    {
        id: 3,
        title: "Home-Lock",
        subtitle: "Airbnb-style Rental Platform",
        period: "Ene 2023 — May 2023",
        featured: false,
        description:
            "Plataforma de reservas de propiedades con carruseles interactivos, autenticación Firebase, persistencia Firestore y sistema de confirmaciones por email.",
        highlights: [
            "Listing cards con carruseles de imágenes dinámicos",
            "Auth con Firebase + persistencia en Firestore",
            "Emails de confirmación automatizados",
            "UI/UX optimizado para conversión",
        ],
        tags: ["Angular", "Firebase Auth", "Firestore", "Nodemailer"],
        color: "violet",
        links: [
            { label: "Demo", url: "https://regaaron.github.io/Home-Lock/descubre" },
            { label: "GitHub", url: "https://regaaron.github.io/Home-Lock/descubre" },
        ],
        images: ["/home-lock.png"],
    },
    {
        id: 4,
        title: "Mathquest",
        subtitle: "Educational Android Game",
        period: "Ago 2022 — Dic 2022",
        featured: false,
        description:
            "Juego educativo por turnos para Android con mecánicas de gameplay en tiempo real, animaciones de sprites y persistencia con SQLite.",
        highlights: [
            "Turn-based gameplay con IA básica",
            "Sprite animations y controles táctiles",
            "Progreso persistido localmente con SQLite",
            "Principios OOP para modularidad y escala",
        ],
        tags: ["Kotlin", "Android Studio", "SQLite", "XML"],
        color: "purple",
        links: [{ label: "GitHub", url: "https://github.com/regaaron/Mathquest" }],
        images: ["/math.jpg"],
    },
    {
        id: 5,
        title: "Plants vs Zombies Style Game",
        subtitle: "Java Tower Defense Game",
        period: "Mar 2022 — Jul 2022",
        featured: false,
        description:
            "Proyecto universitario inspirado en Plants vs Zombies, desarrollado como práctica de programación orientada a objetos.",
        highlights: [
            "Implementación de mecánicas tipo tower defense",
            "Sistema de oleadas con dificultad progresiva",
            "Colisiones y animaciones usando Java Swing",
            "Arquitectura OOP con separación de entidades del juego",
        ],
        tags: ["Java", "Swing", "OOP", "Game Design"],
        color: "amber",
        links: [
            { label: "GitHub", url: "https://github.com/regaaron/java/tree/main/PlantasVsZombies" },
        ],
        images: ["/zombies.png"],
    },
];

export const MINI_PROJECTS = [
    {
        id: "m1",
        title: "HeroesAPP",
        description: "Curso de React de devTalles",
        tags: ["React", "TypeScript"],
        color: "blue",
        link: "https://github.com/regaaron/heroes-app",
        image: "/heroes.png", // opcional — borra esta línea si no tienes imagen
    },
    {
        id: "m2",
        title: "Otro proyecto",
        description: "Descripción breve aquí",
        tags: ["Java", "OOP"],
        color: "amber",
        link: "https://github.com/regaaron/",
        // sin imagen — también válido
        image: "gruas.jpg"
    },
    // Agrega más aquí...
];

export const Projects = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [showMini, setShowMini] = useState(false);
    const [ref, visible] = useScrollReveal();

    const featured = PROJECTS.find((p) => p.featured);
    const rest = PROJECTS.filter((p) => !p.featured);

    if (!featured) return null;

    return (
        <section id="projects" className="py-32">
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white group-hover:text-emerald-300">
                                {featured.title}
                            </h3>
                            <p className="text-white/40 text-sm mt-1">{featured.subtitle}</p>
                            <p className="font-mono text-[11px] text-white/20 mt-2">{featured.period}</p>
                        </div>
                    </div>

                    <p className="text-white/50 mb-4">{featured.description}</p>

                    {selected === featured.id && (
                        <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-3">
                            {featured.highlights.map((h) => (
                                <div key={h} className="flex gap-2 text-white/50 text-sm">
                                    <span className="text-emerald-400">→</span>
                                    {h}
                                </div>
                            ))}
                            {featured.links?.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-emerald-400 hover:underline"
                                >
                                    → {link.label}
                                </a>
                            ))}
                            {featured.images?.map((img) => (
                                <img
                                    key={img}
                                    src={img}
                                    alt={featured.title}
                                    className="rounded-lg mt-2 border border-white/10"
                                />
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                        {featured.tags.map((t) => (
                            <Badge key={t} color="emerald">{t}</Badge>
                        ))}
                    </div>
                </div>

                {/* Rest */}
                <div className="grid md:grid-cols-2 gap-4">
                    {rest.map((project) => {
                        const c = colorMap[project.color as ColorKey] || colorMap.blue;
                        return (
                            <GlassCard key={project.id} className="p-6 cursor-pointer">
                                <div onClick={() => setSelected(selected === project.id ? null : project.id)}>
                                    <div className="flex justify-between mb-4">
                                        <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16" />
                                            </svg>
                                        </div>
                                        <span className="text-white/20 text-xs">{project.period}</span>
                                    </div>

                                    <h3 className="text-white">{project.title}</h3>
                                    <p className={`${c.text} text-sm`}>{project.subtitle}</p>

                                    {selected === project.id && (
                                        <div className="mt-3 space-y-3">
                                            {project.highlights.map((h) => (
                                                <div key={h} className="text-sm text-white/50">→ {h}</div>
                                            ))}
                                            {project.links?.map((link) => (
                                                <a
                                                    key={link.url}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block text-sm text-blue-400 hover:underline"
                                                >
                                                    → {link.label}
                                                </a>
                                            ))}
                                            {project.images?.map((img) => (
                                                <img
                                                    key={img}
                                                    src={img}
                                                    alt={project.title}
                                                    className="rounded-lg mt-2 border border-white/10"
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex gap-2 mt-3 flex-wrap">
                                        {project.tags.map((t) => (
                                            <Badge key={t} color={project.color as ColorKey}>{t}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>

                {/* Botón ver más */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setShowMini(!showMini)}
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/40 text-sm font-mono tracking-wider hover:border-white/20 hover:text-white/70 transition-all duration-300"
                    >
                        <span>{showMini ? "ocultar proyectos" : "ver más proyectos"}</span>
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${showMini ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Mini Projects */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${showMini ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
                        }`}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
                            mini proyectos
                        </span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                        <span className="font-mono text-[10px] text-white/20">
                            {MINI_PROJECTS.length} proyectos
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {MINI_PROJECTS.map((proj) => {
                            const c = colorMap[proj.color as ColorKey] || colorMap.blue;
                            return (
                                <a
                                    key={proj.id}
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex flex-col rounded-xl border ${c.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 overflow-hidden`
                                    }
                                >
                                    {/* Imagen opcional */}
                                    {
                                        proj.image ? (
                                            <div className="w-full h-32 overflow-hidden">
                                                <img
                                                    src={proj.image}
                                                    alt={proj.title}
                                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
                                                />
                                            </div>
                                        ) : (
                                            // Placeholder si no hay imagen
                                            <div className={`w-full h-24 ${c.bg} flex items-center justify-center opacity-40`}>
                                                <svg className={`w-8 h-8 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16M4 9h16M4 15h16" />
                                                </svg>
                                            </div>
                                        )
                                    }

                                    {/* Contenido */}
                                    < div className="p-4 flex flex-col gap-2 flex-1" >
                                        <div className="flex items-start justify-between gap-2">
                                            <p className="text-sm font-medium text-white group-hover:text-white/90 leading-tight">
                                                {proj.title}
                                            </p>
                                            {/* Ícono GitHub que aparece en hover */}
                                            <svg
                                                className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0 mt-0.5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                            </svg>
                                        </div>

                                        <p className="text-xs text-white/40 leading-relaxed flex-1">
                                            {proj.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mt-1">
                                            {proj.tags.map((t) => (
                                                <Badge key={t} color={proj.color as ColorKey}>{t}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div >
                </div >

            </div >
        </section >
    );
};