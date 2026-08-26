import React from 'react';
import { Helmet } from 'react-helmet';
import { Server, Network, Cloud, ShieldCheck, Terminal, GitBranch, Boxes } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { skillGroups, proficiencyLevels, automationWork } from '@/data/profile';

const groupIcons = {
  'infra-systems': Server,
  networking: Network,
  'microsoft-cloud': Cloud,
  security: ShieldCheck,
  automation: Terminal,
  devops: GitBranch,
  virtualization: Boxes,
};

const levelStyles = {
  'hands-on': 'bg-primary text-primary-foreground',
  strong: 'bg-primary/70 text-primary-foreground',
  working: 'border border-primary/50 text-primary',
  exposure: 'border border-border text-muted-foreground',
  developing: 'border border-dashed border-muted-foreground/50 text-muted-foreground/70',
};

function ProficiencyTag({ level }) {
  const meta = proficiencyLevels.find((l) => l.id === level);
  return (
    <span
      className={[
        'shrink-0 px-2 py-0.5 font-mono-tech text-[0.6rem] uppercase tracking-[0.12em]',
        levelStyles[level],
      ].join(' ')}
    >
      {meta ? meta.label : level}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <>
      <Helmet>
        <title>Skills — Simon Lukalo, IT & Systems Engineer</title>
        <meta
          name="description"
          content="Technical skills of Simon Lukalo across infrastructure and systems, networking, Microsoft 365 and cloud, cybersecurity operations, automation and scripting, DevOps and virtualization — shown by proficiency, not percentages."
        />
      </Helmet>

      <PageHeader
        label="Skills"
        title="Technical capabilities by proficiency"
        intro="Listed by hands-on experience, working knowledge, practical exposure and active learning — not as percentages. Honest about where I have run things in production and where I am still developing."
      />

      {/* Legend */}
      <section className="mx-auto w-full max-w-[72rem] px-5 pt-12 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 border border-border bg-card/40 p-5">
            <span className="rule-label">Proficiency key</span>
            {proficiencyLevels.map((l) => (
              <ProficiencyTag key={l.id} level={l.id} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Skill groups */}
      <section className="mx-auto w-full max-w-[80rem] px-5 py-16 sm:px-8">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = groupIcons[g.id] || Server;
            return (
              <Reveal key={g.id} delay={i * 0.03}>
                <div className="h-full bg-background p-6">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <h2 className="font-display text-base tracking-tight">{g.title}</h2>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {g.skills.map((s) => (
                      <li key={s.name} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                        <span className="text-sm text-foreground/90">{s.name}</span>
                        <ProficiencyTag level={s.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Automation & Scripting */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-20 sm:px-8">
          <Reveal>
            <p className="rule-label">Automation &amp; Scripting</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              If I have to do something repeatedly, I look for a way to make it reproducible.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {automationWork.map((w, i) => (
              <Reveal key={w.id} delay={i * 0.05}>
                <div className="h-full bg-background p-7">
                  <h3 className="font-display text-xl tracking-tight text-primary">{w.tool}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {w.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-px w-4 shrink-0 bg-primary/70" />
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
