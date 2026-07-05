type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return <div className={`glass rounded-[1.5rem] p-6 ${className}`}>{children}</div>;
}
