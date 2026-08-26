import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Server, Network, Cloud, ShieldCheck, Terminal, GitBranch } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { profile, techStrip, pillars, principles, projects, learning, infraDevops } from '@/data/profile';

const pillarIcons = {
  infra: Server,
  network: Network,
  cloud: Cloud,
  security: ShieldCheck,
  automation: Terminal,
  devops: GitBranch,
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Simon Lukalo — IT & Systems Engineer in Nairobi</title>
        <meta
          name="description"
          content="Simon Lukalo is an IT and Systems Engineer in Nairobi, Kenya, working across infrastructure, cloud, security and automation — Microsoft 365, Azure, networking, cybersecurity, PowerShell and Python automation."
        />
      </Helmet>
      <Seo
        title="Simon Lukalo — IT & Systems Engineer"
        description="Infrastructure • Cloud • Security • Automation. IT and Systems Engineer based in Nairobi, Kenya."
        image={profile.portraitUrl}
        siteName="Simon Lukalo"
      />

      {/* Hero */}
      <section className="relative min-h-[100dvh] overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <div className="pointer-events-none absolute right-[-10rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[110px]" />
        <div className="relative mx-auto grid w-full max-w-[80rem] items-center gap-14 px-5 pb-20 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="rule-label flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-primary" />
                {profile.location}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Simon Lukalo
                <span className="mt-3 block text-primary">IT &amp; Systems Engineer</span>
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 font-mono-tech text-xs uppercase tracking-[0.22em] text-muted-foreground sm:text-sm">
                {profile.positioning}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.heroStatement}
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex min-h-[44px] items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]"
                >
                  View my work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-[44px] items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary active:scale-[0.98]"
                >
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={32}>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -right-3 -top-3 h-full w-full border border-primary/30" aria-hidden="true" />
              <img
                src={profile.portraitUrl}
                alt="Simon Lukalo, IT and systems engineer, in a Nairobi office"
                loading="eager"
                className="relative w-full object-cover grayscale-[15%]"
              />
              <div className="relative -mt-px border border-border bg-card px-5 py-4 font-mono-tech text-xs text-muted-foreground">
                <span className="text-primary">focus:</span> infrastructure • cloud • security • automation
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technology strip */}
      <div className="overflow-hidden border-b border-border bg-card/40 py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...techStrip, ...techStrip].map((m, i) => (
            <span key={`${m}-${i}`} className="font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {m} <span className="ml-10 text-primary">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* What I work across */}
      <section className="mx-auto w-full max-w-[80rem] px-5 py-24 sm:px-8">
        <Reveal>
          <p className="rule-label">What I work across</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Six areas where my work concentrates
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = pillarIcons[p.id];
            return (
              <Reveal key={p.id} delay={i * 0.05}>
                <div className="h-full bg-background p-7 transition-colors duration-300 hover:bg-card">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Infrastructure & DevOps */}
      <section className="border-t border-border bg-card/20">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-24 sm:px-8">
          <Reveal>
            <p className="rule-label">Infrastructure &amp; DevOps</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Virtualization first, modern ops in development
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {infraDevops.intro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {infraDevops.groups.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.05}>
                <div className="h-full bg-background p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg tracking-tight">{g.title}</h3>
                    <span className="font-mono-tech text-[0.66rem] uppercase tracking-[0.16em] text-primary">{g.note}</span>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item.name}
                        className="border border-border px-3 py-1.5 font-mono-tech text-[0.72rem] text-muted-foreground"
                        title={item.level}
                      >
                        {item.name}
                        <span className="ml-2 text-[0.62rem] uppercase tracking-[0.12em] text-primary/80">{item.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-24 sm:px-8">
          <Reveal>
            <p className="rule-label">Technical case studies</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Real operational work</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <article className="h-full bg-background p-7 transition-colors duration-300 hover:bg-card">
                  <p className="font-mono-tech text-[0.7rem] uppercase tracking-[0.18em] text-primary">{p.category}</p>
                  <h3 className="mt-3 font-display text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="border border-border px-3 py-1 font-mono-tech text-[0.68rem] text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link to="/projects" className="mt-10 inline-flex items-center gap-2 text-sm text-primary hover:underline">
              All case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Principles + learning band */}
      <section className="relative overflow-hidden border-y border-border">
        <img src={profile.infraUrl} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto grid w-full max-w-[72rem] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="rule-label">How I work</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Operating principles
            </h2>
            <ul className="mt-8 space-y-3">
              {principles.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-px w-5 shrink-0 bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="rule-label">Learning focus</p>
            <ul className="mt-8 divide-y divide-border border border-border bg-background/60">
              {learning.current.map((l) => (
                <li key={l.id} className="p-5">
                  <span className="text-sm">{l.title}</span>
                </li>
              ))}
              {learning.practical.map((l) => (
                <li key={l.id} className="p-5">
                  <span className="text-sm">{l.title}</span>
                </li>
              ))}
            </ul>
            <Link to="/learning" className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline">
              Learning roadmap <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto w-full max-w-[72rem] px-5 py-24 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 border border-border p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="rule-label">Contact</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&rsquo;s talk about infrastructure, security or automation
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Open to systems engineering, infrastructure and cloud operations opportunities and technical collaboration.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
