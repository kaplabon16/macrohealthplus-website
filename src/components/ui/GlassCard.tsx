type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`open-panel group relative p-6 transition duration-200 ${className}`}>
      <span className="open-panel-accent pointer-events-none absolute bottom-0 left-0 top-0 w-px origin-top scale-y-0 transition-transform duration-200 group-hover:scale-y-100" />
      {children}
    </div>
  );
}
