import React from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/profile';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects — Simon Lukalo, IT & Systems Engineer</title>
        <meta
          name="description"
          content="Technical case studies by Simon Lukalo — Microsoft 365 and endpoint security, security operations, vulnerability management, PowerShell and Python automation, RADIUS authentication, remote support and a virtualization home lab."
        />
      </Helmet>

      <PageHeader
        label="Projects"
        title="Technical case studies from real operational work"
        intro="Work across Microsoft 365 and endpoint security, security operations, vulnerability management, infrastructure and network automation, identity, remote access and virtualization."
      />

      <section className="mx-auto w-full max-w-[72rem] px-5 py-20 sm:px-8">
        <div className="space-y-px bg-border">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <article className="grid gap-6 bg-background p-7 transition-colors duration-300 hover:bg-card sm:p-10 md:grid-cols-[1fr_1.3fr] md:gap-12">
                <div>
                  <p className="font-mono-tech text-[0.7rem] uppercase tracking-[0.18em] text-primary">{p.category}</p>
                  <h2 className="mt-3 font-display text-2xl tracking-tight">{p.title}</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="border border-border px-3 py-1 font-mono-tech text-[0.68rem] text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
