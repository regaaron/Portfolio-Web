
import { Code, Server, Database, Shield, Smartphone, Mail, Map, Flame, Cpu, Globe } from "lucide-react";

/* ─────────────────────────────────────────────
DATA
───────────────────────────────────────────── */


export const PROJECTS = [
    {
        id: 1,
        title: "EGEL PRO Security System",
        subtitle: "Campus Security Management Platform",
        period: "Enero 2024 — Presente",
        featured: true,
        description:
            "Plataforma integral de gestión de seguridad universitaria. Admin panel con control de acceso por tarjeta, autenticación JWT con route guarding, APIs RESTful y notificaciones automáticas vía Nodemailer.",
        highlights: [
            "Admin panel con UI moderna y componentes reutilizables",
            "JWT route guarding para control de acceso granular",
            "APIs RESTful para operaciones CRUD de usuarios y tarjetas",
            "Email alerts automáticos con Nodemailer en tiempo real",
        ],
        tags: ["Angular", "Node.js", "MySQL", "JWT", "Nodemailer", "REST API"],
        color: "emerald",
    },
    {
        id: 2,
        title: "Gruas App",
        subtitle: "Tow Truck Service Platform",
        period: "Jun 2023 — Dic 2023",
        featured: false,
        description:
            "Plataforma web estilo Uber para servicio de grúas con rastreo vehicular en tiempo real via Google Maps API, dashboard de despacho y gestión completa de roles.",
        highlights: [
            "Dashboard administrativo responsivo en Angular",
            "Rastreo GPS en tiempo real con Google Maps API",
            "Sistema de roles: admin, operador, cliente",
            "APIs de despacho y coordinación de unidades",
        ],
        tags: ["Angular", "Node.js", "Google Maps API", "REST API"],
        color: "blue",
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
    },
    {
        id: 4,
        title: "Mathquest",
        subtitle: "Educational Android Game",
        period: "Ago 2022 — Dic 2022",
        featured: false,
        description:
            "Juego educativo por turnos para Android con mecánicas de gameplay en tiempo real, animaciones de sprites, controles táctiles responsivos y persistencia con SQLite.",
        highlights: [
            "Turn-based gameplay con IA básica",
            "Sprite animations y controles táctiles",
            "Progreso persistido localmente con SQLite",
            "Principios OOP para modularidad y escala",
        ],
        tags: ["Kotlin", "Android Studio", "SQLite", "XML"],
        color: "purple",
    },
    {
        id: 5,
        title: "Plants vs Zombies Style Game",
        subtitle: "Java Tower Defense Game",
        period: "Mar 2022 — Jul 2022",
        featured: false,
        description:
            "Tower defense educativo en Java con generación procedural de oleadas, mecánicas de colisión, animaciones con Java Swing y arquitectura OOP modular.",
        highlights: [
            "Wave generation algoritmos con dificultad progresiva",
            "Colisiones y animaciones en Java Swing",
            "Arquitectura OOP: clases para enemies, plants, actions",
            "Único desarrollador — arquitectura completa",
        ],
        tags: ["Java", "Swing", "OOP", "Game Design"],
        color: "amber",
    },
];

export const EXPERIENCE = [
    {
        role: "Full-stack Developer",
        company: "EGEL PRO Security System",
        period: "Enero 2024 — Presente",
        location: "Aguascalientes, MX",
        desc: "Lideré el diseño y desarrollo de una plataforma de gestión de seguridad universitaria, integrando Angular, Node.js y MySQL con autenticación JWT y notificaciones en tiempo real.",
        current: true,
    },
    {
        role: "Full-stack Developer",
        company: "Gruas App — Tow Truck Platform",
        period: "Jun 2023 — Dic 2023",
        location: "Aguascalientes, MX",
        desc: "Diseñé dashboard administrativo completo, integré Google Maps API para rastreo en tiempo real y construí arquitectura de APIs para autenticación y despacho de unidades.",
        current: false,
    },
    {
        role: "Front-end Developer",
        company: "Home-Lock — Property Rental",
        period: "Ene 2023 — May 2023",
        location: "Aguascalientes, MX",
        desc: "Desarrollé la interfaz de reservas con Angular, integré Firebase Authentication, Firestore para persistencia y automaticé comunicaciones por email con Nodemailer.",
        current: false,
    },
    {
        role: "Android Developer",
        company: "Mathquest Educational Game",
        period: "Ago 2022 — Dic 2022",
        location: "Aguascalientes, MX",
        desc: "Diseñé y programé juego educativo para Android en Kotlin con animaciones de sprites, controles táctiles y persistencia local en SQLite.",
        current: false,
    },
    {
        role: "Java Developer",
        company: "Plants vs Zombies Style Game",
        period: "Mar 2022 — Jul 2022",
        location: "Aguascalientes, MX",
        desc: "Desarrollé como único programador un tower defense educativo en Java con generación procedural de oleadas y arquitectura OOP completa.",
        current: false,
    },
];