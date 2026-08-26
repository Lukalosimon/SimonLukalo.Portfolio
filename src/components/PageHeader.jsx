import React from 'react';
import Reveal from '@/components/Reveal';

export default function PageHeader({ label, title, intro }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-[72rem] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="rule-label">{label}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}