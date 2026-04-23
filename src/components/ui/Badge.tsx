import { colorMap } from "@/App";

export const Badge = ({ children, color = "emerald" })=>{
    const c = colorMap[color] || colorMap.emerald;
    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide border ${c.bg} ${c.text} ${c.border}`}>
            {children}
        </span>
    );
}