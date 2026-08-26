import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/learning', label: 'Learning' },
  { to: '/contact', label: 'Contact' },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'relative py-2 text-sm transition-colors duration-200',
          isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <span className="relative">
          {label}
          <span
            className={[
              'absolute -bottom-1 left-0 h-px w-full origin-left bg-primary transition-transform duration-300',
              isActive ? 'scale-x-100' : 'scale-x-0',
            ].join(' ')}
          />
        </span>
      )}
    </NavLink>
  );
}

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[80rem] items-center justify-between px-5 sm:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={profile.portraitUrl}
              alt="Simon Lukalo"
              className="h-9 w-9 rounded-full border border-primary/50 object-cover object-top grayscale-[10%]"
            />
            <span className="hidden text-sm font-medium tracking-tight sm:block font-display">
              {profile.name}
              <span className="ml-2 text-muted-foreground">/ {profile.role}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <NavItem key={n.to} {...n} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden border border-primary/60 px-4 py-2 text-xs font-mono-tech uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
            >
              Get in touch
            </Link>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto grid max-w-[80rem] gap-1 px-5 py-4 sm:px-8">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'border-l-2 py-3 pl-4 text-base transition-colors',
                      isActive
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground',
                    ].join(' ')
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main key={pathname}>{children}</main>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg tracking-tight">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> {profile.location}
            </p>
          </div>
          <div>
            <p className="rule-label">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground transition-colors hover:text-primary">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="rule-label">Direct</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${profile.emails[0]}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Mail className="h-4 w-4" /> {profile.emails[0]}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70">
          <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            <span className="font-mono-tech">Built and maintained in Nairobi</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
