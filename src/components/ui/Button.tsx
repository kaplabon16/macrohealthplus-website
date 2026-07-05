import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: boolean;
};

const variants = {
  primary: 'bg-green-600 text-[#fff] shadow-glow hover:bg-green-700',
  secondary: 'border border-white/15 bg-black text-white hover:bg-white/10',
  ghost: 'text-slate-200 hover:bg-white/10',
};

export default function Button({ href, children, variant = 'primary', icon = false }: ButtonProps) {
  const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]}`;
  const content = (
    <>
      {children}
      {icon ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
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
