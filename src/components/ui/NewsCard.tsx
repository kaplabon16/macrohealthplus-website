import GlassCard from './GlassCard';

type NewsCardProps = {
  title: string;
  category: string;
  excerpt: string;
};

export default function NewsCard({ title, category, excerpt }: NewsCardProps) {
  return (
    <GlassCard className="h-full">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">{category}</p>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{excerpt}</p>
    </GlassCard>
  );
}
