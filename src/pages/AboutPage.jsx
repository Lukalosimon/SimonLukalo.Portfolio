import React from 'react';
import { Helmet } from 'react-helmet';
import { Server, Network, Cloud, ShieldCheck, Terminal, GitBranch } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import { profile, aboutParagraphs, pillars, principles } from '@/data/profile';

const pillarIcons = {
  infra: Server,
  network: Network,
  cloud: Cloud,
  security: ShieldCheck,
  automation: Terminal,
  devops: GitBranch,
};

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Simon Lukalo — IT & Systems Engineer in Nairobi</title>
        <meta
          name="description"
          content="About Simon Lukalo, an IT and Systems Engineer in Nairobi, Kenya — background across infrastructure, networking, Microsoft 365, cybersecurity and automation, and the operating principles behind the work."
        />
      </Helmet>

      <PageHeader
        label="About Me"
        title="Building reliable, secure and increasingly automated technology environments."
        intro="IT & Systems Engineer with over two years of professional experience supporting enterprise infrastructure, endpoints, networking, Microsoft 365 and cybersecurity operations."
      />

      {/* Profile narrative */}
      <section className="mx-auto grid w-full max-w-[72rem] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8">
            <SmartImage
              src={profile.casualPortraitUrl}
              alt="Simon Lukalo in his office workspace"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top grayscale-[15%]"
            />
            <div className="border border-border p-6">
              <p className="rule-label">Positioning</p>
              <p className="mt-3 font-mono-tech text-sm text-foreground/90">{profile.positioning}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                Based in {profile.location}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What I work across */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-20 sm:px-8">
          <Reveal>
            <p className="rule-label">What I work across</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Six pillars of my work
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
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto w-full max-w-[72rem] px-5 py-20 sm:px-8">
        <Reveal>
          <p className="rule-label">Professional philosophy</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How I approach the work
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p} delay={i * 0.04}>
              <div className="flex h-full items-start gap-4 bg-background p-6">
                <span className="mt-1 font-mono-tech text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm leading-relaxed text-foreground/90">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
