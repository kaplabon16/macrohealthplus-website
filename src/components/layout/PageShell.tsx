import Footer from './Footer';
import Header from './Header';
import AmbientBackground from '../ui/AmbientBackground';
import ScrollProgress from '../ui/ScrollProgress';

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-slate-50">
      <AmbientBackground />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
