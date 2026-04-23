export const GlassCard = ({ children, className = "", hover = true }) => {
    return (
        <div
            className={`
        relative rounded-2xl border border-white/[0.06] 
        bg-gradient-to-br from-white/[0.04] to-white/[0.01]
        backdrop-blur-sm
        ${hover ? "transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
}