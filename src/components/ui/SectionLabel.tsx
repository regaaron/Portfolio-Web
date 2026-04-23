export const SectionLabel = ({ number, label }) => {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-emerald-400 tracking-[0.2em]">
                {number}
            </span>
            <div className="h-px w-8 bg-emerald-500/40" />
            <span className="font-mono text-[11px] text-white/30 tracking-[0.15em] uppercase">
                {label}
            </span>
        </div>
    );
}

