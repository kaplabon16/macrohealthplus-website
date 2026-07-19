type NewsCardProps = {
  title: string;
  category: string;
  excerpt: string;
};

export default function NewsCard({ title, category, excerpt }: NewsCardProps) {
  return (
    <article className="group relative h-full border-y border-white/15 py-6 transition duration-200 hover:border-green-300/50">
      <span className="absolute left-0 top-0 h-px w-0 bg-green-300 transition-[width] duration-200 group-hover:w-20" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">{category}</p>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{excerpt}</p>
    </article>
  );
}
