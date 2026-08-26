import React from 'react';
import { Helmet } from 'react-helmet';
import { BookOpen, Terminal, CheckCircle2, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { learning } from '@/data/profile';

const sections = [
  { key: 'current', label: 'Current', icon: BookOpen, items: learning.current, accent: true },
  { key: 'practical', label: 'Practical Development', icon: Terminal, items: learning.practical, accent: false },
  { key: 'completed', label: 'Completed', icon: CheckCircle2, items: learning.completed, accent: false },
];

export default function LearningPage() {
  return (
    <>
      <Helmet>
        <title>Learning &amp; Development — Simon Lukalo</title>
        <meta
          name="description"
          content="Current certifications, practical development, completed courses and education for Simon Lukalo — AZ-700, AZ-305, PowerShell and Python automation, Linux administration, DevOps and Cisco cybersecurity."
        />
      </Helmet>

      <PageHeader
        label="Learning"
        title="Continuous development across cloud, automation and security"
        intro="A deliberate path of certifications, practical scripting and systems work — moving deeper into Azure networking and architecture, automation and DevOps practices."
      />

      <section className="mx-auto w-full max-w-[72rem] px-5 py-20 sm:px-8">
        <div className="space-y-16">
          {sections.map((sec) => (
            <Reveal key={sec.key}>
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <sec.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <h2 className="font-display text-xl tracking-tight">{sec.label}</h2>
              </div>
              <ul className="mt-6 grid gap-px bg-border sm:grid-cols-2">
                {sec.items.map((l) => (
                  <li key={l.id} className="bg-background p-6">
                    <span className="text-sm text-foreground/90">{l.title}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {/* Education */}
          <Reveal>
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <GraduationCap className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h2 className="font-display text-xl tracking-tight">Education</h2>
            </div>
            <ul className="mt-6 grid gap-px bg-border sm:grid-cols-2">
              {learning.education.map((e) => (
                <li key={e.id} className="bg-background p-6">
                  <p className="text-sm text-foreground/90">{e.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{e.org}</p>
                  <p className="mt-1 font-mono-tech text-[0.66rem] uppercase tracking-[0.16em] text-primary">{e.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
