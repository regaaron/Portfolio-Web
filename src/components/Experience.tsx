import { useScrollReveal } from "@/hooks/useScrollReveal";
import  { GlassCard } from "./ui/GlassCard";
import { SectionLabel } from "./ui/SectionLabel";

export const EXPERIENCE = [
    {
        role: "Full-stack Developer",
        company: "EGEL PRO — Exam Preparation Platform",
        period: "Enero 2024 — Febrero 2025",
        location: "Aguascalientes, MX",
        desc: "Desarrollo de una plataforma web para la preparación del examen EGEL mediante evaluaciones diarias. Implementé frontend en Angular y backend con Node.js y MySQL, incluyendo APIs REST para gestión de preguntas y seguimiento de progreso del usuario.",
        current: false,
    },
    {
        role: "Full-stack Developer",
        company: "Gruas App — Tow Truck Platform",
        period: "Jun 2023 — Dic 2023",
        location: "Aguascalientes, MX",
        desc: "Desarrollo de aplicación web para gestión de servicios de grúas. Implementé dashboard administrativo, integración con Google Maps API para visualización de ubicaciones y APIs REST para autenticación y asignación de servicios.",
        current: false,
    },
    {
        role: "Front-end Developer",
        company: "Home-Lock — Property Rental Platform",
        period: "Ene 2023 — May 2023",
        location: "Aguascalientes, MX",
        desc: "Desarrollo de interfaz de usuario para plataforma de reservas tipo Airbnb usando Angular. Integré autenticación con Firebase, persistencia en Firestore y flujo de confirmaciones por correo electrónico.",
        current: false,
    },
    {
        role: "Android Developer",
        company: "Mathquest — Educational Game",
        period: "Ago 2022 — Dic 2022",
        location: "Aguascalientes, MX",
        desc: "Desarrollo de juego educativo para Android en Kotlin con mecánicas por turnos, animaciones de sprites y almacenamiento local mediante SQLite.",
        current: false,
    },
    {
        role: "Java Developer",
        company: "Plants vs Zombies Style Game",
        period: "Mar 2022 — Jul 2022",
        location: "Aguascalientes, MX",
        desc: "Proyecto universitario de videojuego tipo tower defense desarrollado en Java, enfocado en la implementación de lógica de juego, manejo de colisiones y aplicación de principios de programación orientada a objetos.",
        current: false,
    },
];

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