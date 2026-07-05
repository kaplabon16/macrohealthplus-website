import Footer from './Footer';
import Header from './Header';

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-slate-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
