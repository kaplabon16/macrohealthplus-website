type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`soft-card group relative overflow-hidden rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 ${className}`}>
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}
