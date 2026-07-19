import { ChevronDown, Menu, Monitor, Moon, Sun, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { routes } from '../../utils/routes';
import Button from '../ui/Button';

type ThemePreference = 'system' | 'light' | 'dark';

const themeOptions = [
  { value: 'system' as const, label: 'System', icon: Monitor },
  { value: 'light' as const, label: 'Light', icon: Sun },
  { value: 'dark' as const, label: 'Dark', icon: Moon },
];

export default function Header() {
  const themeMenuCloseTimer = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [theme, setTheme] = useState<ThemePreference>(() => {
    if (typeof window === 'undefined') return 'system';
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'system';
  });

  const cancelThemeMenuClose = () => {
    if (themeMenuCloseTimer.current !== null) {
      window.clearTimeout(themeMenuCloseTimer.current);
      themeMenuCloseTimer.current = null;
    }
  };

  const openThemeMenu = () => {
    cancelThemeMenuClose();
    setIsThemeMenuOpen(true);
  };

  const scheduleThemeMenuClose = () => {
    cancelThemeMenuClose();
    themeMenuCloseTimer.current = window.setTimeout(() => {
      setIsThemeMenuOpen(false);
      themeMenuCloseTimer.current = null;
    }, 240);
  };

  useEffect(() => () => cancelThemeMenuClose(), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setActiveDropdown(null);
      setIsThemeMenuOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      document.documentElement.dataset.theme = theme === 'system'
        ? (systemTheme.matches ? 'dark' : 'light')
        : theme;
    };

    applyTheme();
    window.localStorage.setItem('theme', theme);

    if (theme !== 'system') return;
    systemTheme.addEventListener('change', applyTheme);
    return () => systemTheme.removeEventListener('change', applyTheme);
  }, [theme]);

  const activeItem = activeDropdown !== null ? navigation[activeDropdown] : null;
  const activeChildren = activeItem && 'children' in activeItem ? activeItem.children : null;

  return (
    <header className="fixed left-0 right-0 top-2 z-50 px-2 sm:top-4 sm:px-4">
      <div className="mx-auto max-w-7xl" onMouseLeave={() => setActiveDropdown(null)} onPointerLeave={() => setActiveDropdown(null)}>
      <nav className={`glass nav-glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 transition duration-[250ms] sm:px-4 ${scrolled ? 'py-2 shadow-glow' : 'py-2.5 sm:py-3'}`}>
        <NavLink className="flex items-center gap-3" to={routes.home} onClick={() => setIsOpen(false)}>
          <span className={`${scrolled ? 'h-9 w-9' : 'h-11 w-11'} relative block shrink-0 overflow-hidden rounded-full transition-all`} aria-hidden="true">
            <img
              className="absolute left-0 top-1/2 h-full max-w-none -translate-y-1/2 object-contain"
              src="/assets/macrohealthplus/logo/logo-img_logo1.bb49aa63f28b32801c37.png"
              alt=""
            />
          </span>
          <span className="text-xs font-semibold text-[#69B128] transition-all sm:text-sm">MacroHealthPlus</span>
        </NavLink>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item, index) => (
            <div className="relative" key={item.href} onMouseEnter={() => setActiveDropdown('children' in item && item.children ? index : null)}>
              <NavLink
                className={`desktop-nav-link relative flex items-center gap-1 rounded-full px-3 py-2 text-sm transition ${
                  activeDropdown === index ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/8 hover:text-white'
                }`}
                to={item.href}
              >
                {item.label}
                {'children' in item && item.children ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <div
            className="relative"
            onPointerEnter={openThemeMenu}
            onPointerLeave={scheduleThemeMenuClose}
            onFocus={openThemeMenu}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) scheduleThemeMenuClose();
            }}
          >
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white hover:text-slate-950"
              type="button"
              aria-label="Choose color theme"
              aria-expanded={isThemeMenuOpen}
              onClick={() => {
                cancelThemeMenuClose();
                setIsThemeMenuOpen((value) => !value);
              }}
            >
              {theme === 'system' ? <Monitor className="h-4 w-4" aria-hidden="true" /> : theme === 'light' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>
            {isThemeMenuOpen ? (
              <div className="absolute right-0 top-full w-36 pt-2">
                <div className="glass nav-glass rounded-2xl p-1.5">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        className={`nav-dropdown-link flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${theme === option.value ? 'bg-white/10 text-green-300' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`}
                        key={option.value}
                        type="button"
                        aria-pressed={theme === option.value}
                        onClick={() => {
                          setTheme(option.value);
                          setIsThemeMenuOpen(false);
                        }}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
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
        onMouseLeave={() => setActiveDropdown(null)}
        onPointerLeave={() => setActiveDropdown(null)}
        className={`pointer-events-none mx-auto hidden max-w-7xl pt-3 transition duration-300 ease-out xl:block ${
          activeChildren ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
      >
        {activeChildren ? (
          <div className="glass nav-glass pointer-events-auto overflow-hidden rounded-[2rem] px-8 py-7">
            <div className="mb-5 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">{activeItem?.label}</h2>
              </div>
              <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" aria-hidden="true" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {activeChildren.map((child) => (
                <NavLink
                  className="nav-dropdown-link group rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition duration-200 hover:bg-white hover:text-slate-950"
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
        <div className="glass nav-glass mx-auto mt-3 max-h-[calc(100vh-6rem)] max-w-7xl overflow-y-auto rounded-3xl p-3 xl:hidden">
          {navigation.map((item) => (
            <div key={item.href}>
              <NavLink
                className="nav-mobile-link block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/8"
                to={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
              {'children' in item && item.children ? (
                <div className="grid gap-1 pl-4">
                  {item.children.map((child) => (
                    <NavLink className="nav-mobile-link rounded-2xl px-4 py-2 text-sm text-slate-300 hover:bg-white/8" key={child.href} to={child.href} onClick={() => setIsOpen(false)}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="mobile-theme-row mx-4 my-3 flex items-center justify-between gap-3 border-y border-white/10 py-2.5">
            <span className="text-xs font-semibold text-slate-300">Appearance</span>
            <div className="mobile-theme-picker grid grid-cols-3 gap-1 p-1" aria-label="Color theme">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    className={`mobile-theme-option flex h-9 w-9 items-center justify-center rounded-xl transition ${theme === option.value ? 'mobile-theme-option-active' : ''}`}
                    key={option.value}
                    type="button"
                    aria-label={`${option.label} theme`}
                    aria-pressed={theme === option.value}
                    title={option.label}
                    onClick={() => setTheme(option.value)}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row">
            <Button href={routes.requestDemo} icon>Request a Demo</Button>
            <Button href={routes.clientLogin} variant="secondary">Client Login</Button>
          </div>
        </div>
      ) : null}
      </div>
    </header>
  );
}
