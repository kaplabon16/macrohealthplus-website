import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { routes } from '../../utils/routes';
import Button from '../ui/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeItem = activeDropdown !== null ? navigation[activeDropdown] : null;
  const activeChildren = activeItem && 'children' in activeItem ? activeItem.children : null;

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4" onMouseLeave={() => setActiveDropdown(null)}>
      <nav className={`glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 transition duration-500 ${scrolled ? 'py-2 shadow-glow' : 'py-3'}`}>
        <NavLink className="flex items-center gap-3" to={routes.home} onClick={() => setIsOpen(false)}>
          <img className={`${scrolled ? 'h-8 w-8' : 'h-9 w-9'} rounded-full object-contain transition-all`} src="/assets/macrohealthplus/logo/logo-img_logo1.bb49aa63f28b32801c37.png" alt="MacroHealthPlus logo" />
          <span className={`text-sm font-semibold text-white transition-all ${scrolled ? 'tracking-normal text-slate-100' : ''}`}>MacroHealthPlus</span>
        </NavLink>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item, index) => (
            <div className="relative" key={item.href} onMouseEnter={() => setActiveDropdown('children' in item && item.children ? index : null)}>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-full px-3 py-2 text-sm transition ${
                    isActive || activeDropdown === index ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/8 hover:text-white'
                  }`
                }
                to={item.href}
              >
                {item.label}
                {'children' in item && item.children ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <Button href={routes.requestDemo} variant="primary">Request a Demo</Button>
          <Button href={routes.clientLogin} variant="secondary">Client Login</Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`pointer-events-none mx-auto hidden max-w-7xl pt-3 transition duration-300 ease-out xl:block ${
          activeChildren ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
      >
        {activeChildren ? (
          <div className="glass pointer-events-auto overflow-hidden rounded-[2rem] px-8 py-7">
            <div className="mb-5 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">{activeItem?.label}</h2>
              </div>
              <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" aria-hidden="true" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {activeChildren.map((child) => (
                <NavLink
                  className="group rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition duration-200 hover:bg-white hover:text-slate-950"
                  key={child.href}
                  to={child.href}
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="block transition duration-200 group-hover:translate-x-1">{child.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {isOpen ? (
        <div className="glass mx-auto mt-3 max-h-[calc(100vh-6rem)] max-w-7xl overflow-y-auto rounded-3xl p-3 xl:hidden">
          {navigation.map((item) => (
            <div key={item.href}>
              <NavLink
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/8"
                to={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
              {'children' in item && item.children ? (
                <div className="grid gap-1 pl-4">
                  {item.children.map((child) => (
                    <NavLink className="rounded-2xl px-4 py-2 text-sm text-slate-300 hover:bg-white/8" key={child.href} to={child.href} onClick={() => setIsOpen(false)}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row">
            <Button href={routes.requestDemo} icon>Request a Demo</Button>
            <Button href={routes.clientLogin} variant="secondary">Client Login</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
