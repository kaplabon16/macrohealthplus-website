import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: boolean;
};

const variants = {
  primary: 'bg-green-600 text-[#fff] shadow-glow hover:bg-green-500',
  secondary: 'border border-white/15 bg-black text-white hover:bg-white hover:text-slate-950',
  ghost: 'text-slate-200 hover:bg-white/10',
};

export default function Button({ href, children, variant = 'primary', icon = false }: ButtonProps) {
  const className = `group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${variants[variant]}`;
  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-400 group-hover:translate-x-full" aria-hidden="true" />
      <span className="relative">{children}</span>
      {icon ? <ArrowRight aria-hidden="true" className="relative h-4 w-4 transition duration-200 group-hover:translate-x-1" /> : null}
    </>
  );

  if (href) {
    return (
      <Link className={className} to={href}>
        {content}
      </Link>
    );
  }

  return <button className={className}>{content}</button>;
}
