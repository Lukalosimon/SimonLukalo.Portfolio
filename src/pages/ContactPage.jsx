import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: 'Email', value: profile.emails[0], href: `mailto:${profile.emails[0]}` },
    { icon: Mail, label: 'Email', value: profile.emails[1], href: `mailto:${profile.emails[1]}` },
    { icon: Phone, label: 'Phone', value: profile.phones[0], href: `tel:${profile.phones[0]}` },
    { icon: Phone, label: 'Phone', value: profile.phones[1], href: `tel:${profile.phones[1]}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/simonlukalo', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'simonlukalo', href: profile.github },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Simon Lukalo — IT & Systems Engineer, Nairobi</title>
        <meta
          name="description"
          content="Contact Simon Lukalo, IT and Systems Engineer in Nairobi, Kenya — phone, email, LinkedIn and GitHub for roles, infrastructure work and technical collaboration."
        />
      </Helmet>

      <PageHeader
        label="Contact"
        title="Get in touch"
        intro="Open to systems engineering, infrastructure and cloud operations opportunities, contract infrastructure work and technical collaboration."
      />

      <section className="mx-auto grid w-full max-w-[72rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="divide-y divide-border border border-border">
            {channels.map((c, i) => (
              <a
                key={`${c.label}-${i}`}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex min-h-[72px] items-center gap-5 p-6 transition-colors hover:bg-card"
              >
                <c.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span>
                  <span className="block font-mono-tech text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="mt-1 block text-sm text-foreground group-hover:text-primary">{c.value}</span>
                </span>
              </a>
            ))}
            <p className="flex items-center gap-5 p-6 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
              {profile.location} — available for on-site work in Nairobi and remote engagements
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div className="flex items-center gap-5 border border-border bg-card/30 p-5">
              <img
                src={profile.portraitUrl}
                alt="Formal professional headshot of Simon Lukalo"
                className="h-24 w-20 shrink-0 object-cover object-top grayscale-[10%]"
              />
              <div>
                <p className="rule-label">Professional profile</p>
                <p className="mt-2 font-display text-lg text-foreground">Simon Lukalo</p>
                <p className="mt-1 text-sm text-muted-foreground">{profile.role} · {profile.location}</p>
              </div>
            </div>
            <p>
              The fastest route is email. For infrastructure or security work, include the environment you are running —
              tenant size, on-premises footprint, what is currently hurting — and I can give a useful answer instead of a
              generic one.
            </p>
            <p>
              For recruiters: I am interested in systems engineering, infrastructure and cloud operations positions where
              automation and security are part of the mandate. A current CV is available on request.
            </p>
            <div className="border border-border p-6">
              <p className="rule-label">Response time</p>
              <p className="mt-3 text-sm text-foreground/90">Within one working day, Monday to Friday, EAT (UTC+3).</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
