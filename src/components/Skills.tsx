import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const cards = [
    {
        id: "react",
        name: "React",
        cat: "Frontend",
        logo: `${DEVICON}/react/react-original.svg`,
        logoSize: 160,
        col: "col-span-5 row-span-2",
        gradient: "from-[#001f2b] via-[#003d55] to-[#0891b2]",
        nameSize: "text-[2.4rem]",
    },
    {
        id: "angular",
        name: "Angular",
        cat: "Frontend",
        logo: `${DEVICON}/angularjs/angularjs-original.svg`,
        logoSize: 100,
        col: "col-span-4",
        gradient: "from-[#1a0000] via-[#5a0010] to-[#c3002f]",
        nameSize: "text-xl",
    },
    {
        id: "git",
        name: "Git",
        cat: "Versiones",
        logo: `${DEVICON}/git/git-original.svg`,
        logoSize: 90,
        col: "col-span-3",
        gradient: "from-[#1a0d00] via-[#5a2800] to-[#e34f1a]",
        nameSize: "text-xl",
    },
    {
        id: "node",
        name: "Node.js",
        cat: "Backend",
        logo: `${DEVICON}/nodejs/nodejs-original.svg`,
        logoSize: 110,
        col: "col-span-4",
        gradient: "from-[#001a00] via-[#0d3d00] to-[#3fb950]",
        nameSize: "text-2xl",
    },
    {
        id: "firebase",
        name: "Firebase",
        cat: "Backend / Auth",
        logo: `${DEVICON}/firebase/firebase-original.svg`,
        logoSize: 120,
        col: "col-span-3 row-span-2",
        gradient: "from-[#1a0d00] via-[#5c2600] to-[#f97316]",
        nameSize: "text-xl",
    },
    {
        id: "sql",
        name: "SQL",
        cat: "Base de datos",
        logo: `${DEVICON}/postgresql/postgresql-original.svg`,
        logoSize: 90,
        col: "col-span-3",
        gradient: "from-[#001228] via-[#0e2e63] to-[#3b82f6]",
        nameSize: "text-xl",
    },
    {
        id: "kotlin",
        name: "Kotlin",
        cat: "Android",
        logo: `${DEVICON}/kotlin/kotlin-original.svg`,
        logoSize: 85,
        col: "col-span-3",
        gradient: "from-[#0f0024] via-[#3b0d7a] to-[#7c3aed]",
        nameSize: "text-xl",
    },
    {
        id: "java",
        name: "Java",
        cat: "Backend",
        logo: `${DEVICON}/java/java-original.svg`,
        logoSize: 90,
        col: "col-span-3",
        gradient: "from-[#1c1000] via-[#523200] to-[#f59e0b]",
        nameSize: "text-xl",
    },
];

const RestCard = () => (
    <div className="card col-span-4 relative rounded-[20px] overflow-hidden flex flex-col justify-end p-4 border border-white/[0.07] bg-gradient-to-br from-[#0d0d24] via-[#252570] to-[#6366f1] min-h-[130px] transition-all duration-300 hover:scale-[1.025] hover:border-white/20 cursor-default">
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="4" ry="10" />
            <path d="M2 12h20M2 7h20M2 17h20" opacity=".6" />
        </svg>
        <p className="text-[9px] tracking-[.14em] uppercase text-white/40 mb-1 z-10">Integración</p>
        <p className="text-[1.7rem] font-bold leading-none tracking-tight text-white z-10">
            REST<br />APIs
        </p>
    </div>
);

const JwtCard = () => (
    <div className="col-span-3 relative rounded-[20px] overflow-hidden flex flex-col justify-end p-4 border border-white/[0.07] bg-gradient-to-br from-[#001a0d] via-[#064d24] to-[#22c55e] min-h-[130px] transition-all duration-300 hover:scale-[1.025] hover:border-white/20 cursor-default">
        <svg className="absolute right-3 bottom-2 opacity-20 w-[70px] h-[70px]" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.2">
            <path d="M12 2l2.5 7.5H22l-6.5 4.7 2.5 7.5L12 17l-6 4.7 2.5-7.5L2 9.5h7.5z" />
        </svg>
        <p className="text-[9px] tracking-[.14em] uppercase text-white/40 mb-1 z-10">Seguridad</p>
        <p className="text-xl font-semibold text-white z-10">JWT Auth</p>
    </div>
);

const MapsCard = () => (
    <div className="col-span-2 relative rounded-[20px] overflow-hidden flex flex-col justify-end p-4 border border-white/[0.07] bg-gradient-to-br from-[#001828] via-[#065082] to-[#0ea5e9] min-h-[130px] transition-all duration-300 hover:scale-[1.025] hover:border-white/20 cursor-default">
        <img
            src={`${DEVICON}/google/google-original.svg`}
            width={70}
            height={70}
            className="absolute right-[-8px] bottom-[-8px] opacity-[0.22] transition-all duration-300 hover:opacity-40"
            alt="Google"
        />
        <p className="text-[9px] tracking-[.14em] uppercase text-white/40 mb-1 z-10">Servicios</p>
        <p className="text-base font-semibold text-white z-10">Maps API</p>
    </div>
);

const MailCard = () => (
    <div className="col-span-3 relative rounded-[20px] overflow-hidden flex flex-col justify-end p-4 border border-white/[0.07] bg-gradient-to-br from-[#160028] via-[#4a0a8c] to-[#a855f7] min-h-[130px] transition-all duration-300 hover:scale-[1.025] hover:border-white/20 cursor-default">
        <svg className="absolute right-2 bottom-2 opacity-20 w-[72px] h-[72px]" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.2">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 8l10 7 10-7" />
        </svg>
        <p className="text-[9px] tracking-[.14em] uppercase text-white/40 mb-1 z-10">Email</p>
        <p className="text-xl font-semibold text-white z-10">Nodemailer</p>
    </div>
);

export const Skills = () => {
    const [ref, visible] = useScrollReveal();

    return (
        <section id="skills" className="py-32">
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <SectionLabel number="02" label="Skills" />

                <h2 className="text-4xl md:text-5xl font-light mb-10 tracking-tight">
                    Stack{" "}
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                        técnico
                    </span>
                </h2>

                <div className="grid grid-cols-12 gap-2" style={{ gridAutoRows: "130px" }}>
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`${card.col} relative rounded-[20px] overflow-hidden flex flex-col justify-end p-4 border border-white/[0.07] bg-gradient-to-br ${card.gradient} transition-all duration-300 hover:scale-[1.025] hover:border-white/20 cursor-default`}
                        >
                            <img
                                src={card.logo}
                                width={card.logoSize}
                                height={card.logoSize}
                                alt={card.name}
                                className="absolute -right-3 -bottom-3 opacity-[0.22] transition-all duration-300 group-hover:opacity-40 group-hover:scale-125"
                            />
                            <p className="text-[9px] tracking-[.14em] uppercase text-white/40 mb-1 relative z-10">
                                {card.cat}
                            </p>
                            <p className={`${card.nameSize} font-semibold text-white relative z-10 leading-none tracking-tight`}>
                                {card.name}
                            </p>
                        </div>
                    ))}

                    {/* Cards especiales sin logo de devicon */}
                    <RestCard />
                    <JwtCard />
                    <MapsCard />
                    <MailCard />
                </div>
            </div>
        </section>
    );
};