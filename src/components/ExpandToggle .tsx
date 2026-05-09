
interface ExpandToggleProps {
    isOpen: boolean;

}
export const ExpandToggle = ({ isOpen }: ExpandToggleProps) => (
<div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center">
  {/* Anillo exterior que pulsa */}
  <span className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${
    isOpen 
      ? "border-white/20" 
      : "border-emerald-400/60 animate-ping"
  }`} />
  {/* Círculo base */}
  <span className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${
    isOpen ? "border-white/20" : "border-emerald-400/80 animate-pulse"
  }`} />
  {/* Símbolo */}
  <span className={`relative z-10 text-base font-medium select-none leading-none transition-all duration-300 ${
    isOpen ? "text-white/40" : "text-emerald-400 animate-pulse"
  }`}>
    {isOpen ? "−" : "+"}
  </span>
</div>
);