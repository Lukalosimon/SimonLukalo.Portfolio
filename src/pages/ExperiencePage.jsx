import React from 'react';
import { Helmet } from 'react-helmet';
import { Server, Cloud, Network, ShieldCheck, Wifi, Terminal, HardDrive, FileText } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { experience, labSections } from '@/data/profile';

const groupIcons = [
  Server, Cloud, Network, ShieldCheck, Wifi, Terminal, HardDrive, FileText,
];

export default function ExperiencePage() {
  const role = experience[0];
  return (
    <>
      <Helmet>
        <title>Experience — Simon Lukalo, IT & Systems Engineer</title>
        <meta
          name="description"
          content="Professional experience of Simon Lukalo as an IT & Systems Engineer at West Indian Ocean Cable Company Group — infrastructure, Microsoft 365, networking, cybersecurity, automation and service delivery."
        />
      </Helmet>

      <PageHeader
        label="Experience"
        title="IT & Systems Engineer — West Indian Ocean Cable Company Group"
        intro="Over two years of professional experience supporting enterprise infrastructure, endpoints, networking, Microsoft 365 and cybersecurity operations where reliability, documentation accuracy, security and service continuity are essential."
      />

      <section className="mx-auto w-full max-w-[72rem] px-5 py-20 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border pb-8">
            <h2 className="font-display text-2xl tracking-tight">{role.role}</h2>
            <span className="text-muted-foreground">— {role.org}</span>
            <span className="ml-auto font-mono-tech text-xs uppercase tracking-[0.18em] text-primary">{role.period}</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {role.groups.map((g, i) => {
            const Icon = groupIcons[i] || Server;
            return (
              <Reveal key={g.title} delay={i * 0.04}>
                <div className="h-full bg-background p-7">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <h3 className="font-display text-lg tracking-tight">{g.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {g.points.map((p) => (
                      <li key={p} className="flex max-w-xl gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-px w-4 shrink-0 bg-primary/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Technical Laboratory */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-20 sm:px-8">
          <Reveal>
            <p className="rule-label">Technical Laboratory</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              My lab is where I turn theory into practical infrastructure.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {labSections.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.04}>
                <div className="h-full bg-background p-7">
                  <h3 className="font-display text-lg tracking-tight">{s.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="border border-border px-3 py-1 font-mono-tech text-[0.68rem] text-muted-foreground">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
