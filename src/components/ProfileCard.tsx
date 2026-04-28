export const ProfileCard = () => {
    return (
        <div className="flex flex-col items-center text-center">

            {/* Imagen */}
            <div className="relative group">
                <img
                    src="aaron.png"
                    alt="Avatar Luis Aaron"
                    className="w-full h-full object-cover"
                />
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Nombre */}
            <h3 className="mt-4 text-xl font-semibold text-white">
                Luis Aaron
            </h3>

            {/* Username */}
            <a href="https://github.com/regaaron"
                target="_blank"
                rel="noopener noreferrer">
                <span className="text-emerald-400 text-sm font-mono">
                    @regaaron
                </span>
            </a>

            {/* Redes */}
            <div className="flex gap-3 mt-4">

                {/* GitHub */}
                <a href="https://github.com/regaaron" target="_blank"
                    className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500  transition hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ">
                        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.5.8 3.1.6.1-.7.4-1.2.8-1.5-2.7-.3-5.5-1.3-5.5-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.5 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/luis-aaron-lopez-ramirez/" target="_blank"
                    className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500 transition hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M20.45 20.45h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7h-3.6V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3v6.3zM5.34 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.14 20.45h-3.6V9h3.6v11.45z" />
                    </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/luis.lopezramirez/" target="_blank"
                    className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500 transition hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/luis.a.lopezramirez?locale=es_LA" target="_blank"
                    className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500 transition hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>

            </div>
        </div>
    );
};