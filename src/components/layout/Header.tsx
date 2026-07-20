'use client';

import { ChevronLeft, Menu, Monitor, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
  const dropdownCloseTimer = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<number | null>(null);
  const [theme, setTheme] = useState<ThemePreference>('system');
  const [themeReady, setThemeReady] = useState(false);

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

  const cancelDropdownClose = () => {
    if (dropdownCloseTimer.current !== null) {
      window.clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };

  const openDropdown = (index: number | null) => {
    cancelDropdownClose();
    setActiveDropdown(index);
  };

  const scheduleDropdownClose = () => {
    cancelDropdownClose();
    dropdownCloseTimer.current = window.setTimeout(() => {
      setActiveDropdown(null);
      dropdownCloseTimer.current = null;
    }, 140);
  };

  useEffect(() => () => {
    cancelThemeMenuClose();
    cancelDropdownClose();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'system');
    setThemeReady(true);
  }, []);

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
    if (!themeReady) return;
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
  }, [theme, themeReady]);

  const activeItem = activeDropdown !== null ? navigation[activeDropdown] : null;
  const activeChildren = activeItem && 'children' in activeItem ? activeItem.children : null;
  const mobileItem = mobileSubmenu !== null ? navigation[mobileSubmenu] : null;
  const mobileChildren = mobileItem && 'children' in mobileItem ? mobileItem.children : null;

  return (
    <header className="apple-nav-typography fixed left-0 right-0 top-2 z-50 px-2 sm:top-4 sm:px-4">
      <div className={`apple-nav-curtain ${activeChildren || isOpen ? 'apple-nav-curtain-visible' : ''}`} aria-hidden="true" />
      <div className="relative z-[3] mx-auto max-w-7xl" onMouseEnter={cancelDropdownClose} onMouseLeave={scheduleDropdownClose}>
      <nav className={`glass nav-glass relative z-[3] mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 transition duration-[250ms] sm:px-4 ${scrolled ? 'py-2 shadow-glow' : 'py-2.5 sm:py-3'}`}>
        <Link className="apple-brand-button flex items-center gap-3" href={routes.home} onClick={() => setIsOpen(false)}>
          <span className={`${scrolled ? 'h-9 w-9' : 'h-11 w-11'} relative block shrink-0 overflow-hidden rounded-full transition-all`} aria-hidden="true">
            <img className="absolute left-0 top-1/2 h-full max-w-none -translate-y-1/2 object-contain" src="/assets/macrohealthplus/logo/logo-img_logo1.bb49aa63f28b32801c37.png" alt="" />
          </span>
          <span className="text-xs font-semibold text-[#69B128] transition-all sm:text-sm">MacroHealthPlus</span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item, index) => (
            <div className="relative" key={item.href}>
              <Link
                className="apple-top-nav-link desktop-nav-link relative flex items-center gap-1 rounded-full px-3 py-2 transition"
                href={item.href}
                onMouseEnter={() => openDropdown('children' in item && item.children ? index : null)}
                onMouseMove={() => openDropdown('children' in item && item.children ? index : null)}
                onPointerEnter={() => openDropdown('children' in item && item.children ? index : null)}
                onFocus={() => openDropdown('children' in item && item.children ? index : null)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="apple-nav-actions hidden items-center gap-2 xl:flex">
          <div className="relative" onPointerEnter={openThemeMenu} onPointerLeave={scheduleThemeMenuClose} onFocus={openThemeMenu} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) scheduleThemeMenuClose(); }}>
            <button className="apple-appearance-button flex h-11 w-9 items-center justify-center" type="button" aria-label="Choose color theme" aria-expanded={isThemeMenuOpen} onClick={() => { cancelThemeMenuClose(); setIsThemeMenuOpen((value) => !value); }}>
              {theme === 'system' ? <Monitor className="h-4 w-4" aria-hidden="true" /> : theme === 'light' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>
            {isThemeMenuOpen ? (
              <div className="absolute right-0 top-full w-36 pt-2">
                <div className="glass nav-glass nav-menu-frost rounded-2xl p-1.5">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button className={`nav-dropdown-link flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${theme === option.value ? 'bg-white/10 text-green-300' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`} key={option.value} type="button" aria-pressed={theme === option.value} onClick={() => { setTheme(option.value); setIsThemeMenuOpen(false); }}>
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

        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden" onClick={() => { setIsOpen((value) => !value); setMobileSubmenu(null); }} aria-label="Toggle navigation">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={`pointer-events-none relative z-[3] mx-auto hidden max-w-7xl pt-3 transition duration-300 ease-out xl:block ${activeChildren ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
        {activeChildren ? (
          <div className="apple-rounded-flyout pointer-events-auto overflow-hidden rounded-[2rem] px-8 pb-10 pt-8">
            <p className="apple-flyout-label mb-4 text-xs">Explore {activeItem?.label}</p>
            <div className="grid grid-cols-3 gap-x-10 gap-y-1">
              {activeChildren.map((child) => (
                <Link className="apple-flyout-link rounded-xl px-3 py-2 text-xl font-semibold leading-tight" key={child.href} href={child.href} onClick={() => setActiveDropdown(null)}>
                  <span className="block">{child.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {isOpen ? (
        <div className="apple-rounded-mobile-menu apple-mobile-menu relative z-[3] mx-auto mt-3 max-h-[calc(100vh-6rem)] max-w-7xl overflow-y-auto rounded-3xl px-8 pb-8 pt-7 xl:hidden">
          {mobileChildren ? (
            <>
              <button className="apple-mobile-back mb-6 flex items-center gap-2 text-sm" type="button" onClick={() => setMobileSubmenu(null)}>
                <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Menu
              </button>
              <p className="apple-flyout-label mb-4 text-xs">{mobileItem?.label}</p>
              <div className="grid gap-3">
                {mobileChildren.map((child) => (
                  <Link className="apple-mobile-child text-xl font-semibold leading-tight" key={child.href} href={child.href} onClick={() => { setIsOpen(false); setMobileSubmenu(null); }}>{child.label}</Link>
                ))}
              </div>
            </>
          ) : (
            <div className="grid gap-2">
              {navigation.map((item, index) => (
                'children' in item && item.children ? (
                  <button className="apple-mobile-link text-left text-[28px] font-semibold leading-[1.15]" key={item.href} type="button" onClick={() => setMobileSubmenu(index)}>{item.label}</button>
                ) : (
                  <Link className="apple-mobile-link text-[28px] font-semibold leading-[1.15]" key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>
                )
              ))}
            </div>
          )}
          <div className="mobile-theme-row my-7 flex items-center justify-between gap-3 border-y border-white/10 py-3">
            <span className="text-xs font-semibold text-slate-300">Appearance</span>
            <div className="mobile-theme-picker grid grid-cols-3 gap-1 p-1" aria-label="Color theme">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button className={`mobile-theme-option flex h-9 w-9 items-center justify-center rounded-xl transition ${theme === option.value ? 'mobile-theme-option-active' : ''}`} key={option.value} type="button" aria-label={`${option.label} theme`} aria-pressed={theme === option.value} title={option.label} onClick={() => setTheme(option.value)}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={routes.requestDemo} icon>Request a Demo</Button>
            <Button href={routes.clientLogin} variant="secondary">Client Login</Button>
          </div>
        </div>
      ) : null}
      </div>
    </header>
  );
}
