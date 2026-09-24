import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/client-2026/barracuda-email-network-data-protection.jpg.asset.json";
const heroImg = heroAsset.url;
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";

export const Route = createFileRoute("/cybersecurity/barracuda")({
  head: () => ({
    meta: [
      { title: "Barracuda — Advanced Email Security & Cloud Protection | FCC" },
      {
        name: "description",
        content:
          "Barracuda delivers enterprise-grade email security and cloud protection. FCC provides UK deployment, monitoring, and managed support for organisations across the UK.",
      },
      { property: "og:title", content: "Barracuda — Intelligent Email Security Solutions" },
      {
        property: "og:description",
        content:
          "Protect business communication with Barracuda email security, phishing prevention, and cloud protection — delivered by FCC across the UK.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: BarracudaPage,
});

const CHALLENGES = [
  {
    title: "Increasing Email & Phishing Threats",
    body:
      "Modern organisations require intelligent email security solutions capable of identifying phishing attacks, malicious links, ransomware, and advanced email threats before they impact operations. Without proactive phishing protection software, businesses remain vulnerable to communication-based cyber attacks and operational disruption.",
  },
  {
    title: "Cloud Security & Microsoft 365 Risks",
    body:
      "As organisations continue migrating to cloud communication systems, scalable cloud email security environments are essential for protecting distributed users and operational ecosystems.",
  },
  {
    title: "Limited Communication Visibility",
    body:
      "Disconnected communication security systems reduce visibility into suspicious activity, spam threats, and operational vulnerabilities. FCC helps organisations improve visibility through intelligent Barracuda cybersecurity frameworks and monitoring environments.",
  },
  {
    title: "Operational & Ransomware Risks",
    body:
      "Businesses require scalable business ransomware protection UK capabilities to strengthen operational resilience and improve continuity planning.",
  },
];

const APPROACH = [
  {
    title: "Security Assessment",
    body:
      "We evaluate communication systems, cloud environments, vulnerabilities, and operational risks to design scalable protection frameworks.",
  },
  {
    title: "Architecture & Planning",
    body:
      "Our experts design intelligent Barracuda network security and email protection environments aligned with operational and compliance objectives.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys Barracuda email security, email threat protection frameworks, cloud communication security systems, and operational visibility environments through scalable implementation strategies.",
  },
  {
    title: "User Training & Awareness",
    body:
      "Teams gain operational guidance and phishing awareness through structured enablement programmes and cybersecurity education.",
  },
  {
    title: "Managed Security Support",
    body:
      "FCC delivers ongoing monitoring, optimisation, and Barracuda email security services UK designed to improve operational resilience and communication visibility.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Email Protection",
    lede:
      "Barracuda email security environments help organisations secure communication systems through intelligent email security solutions and advanced threat prevention capabilities.",
    items: [
      "Phishing prevention",
      "Spam filtering",
      "Email threat visibility",
      "Malware protection",
      "Email continuity monitoring",
    ],
  },
  {
    n: "02",
    title: "Cloud Email Security",
    lede:
      "Improve operational resilience through scalable cloud email security frameworks designed for Microsoft 365 and distributed cloud communication systems.",
    items: [
      "Microsoft 365 protection",
      "Cloud communication security",
      "Threat monitoring",
      "Email visibility",
      "User protection controls",
    ],
  },
  {
    n: "03",
    title: "Business Ransomware Protection",
    lede:
      "Protect operational infrastructure and communication environments through scalable business ransomware protection UK frameworks.",
    items: [
      "Threat intelligence",
      "Malware prevention",
      "Operational continuity support",
      "Threat monitoring",
      "Security analytics",
    ],
  },
  {
    n: "04",
    title: "Network Security & Visibility",
    lede:
      "Improve operational visibility and communication protection through advanced Barracuda network security systems.",
    items: [
      "Threat visibility",
      "Network monitoring",
      "Secure communication management",
      "Operational analytics",
      "Security reporting",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Financial Services",
    body:
      "Strengthen communication protection, operational visibility, and compliance readiness through enterprise-grade email security solutions.",
  },
  {
    name: "Healthcare",
    body:
      "Protect patient communication systems and distributed cloud environments using scalable cloud email security frameworks.",
  },
  {
    name: "Retail",
    body:
      "Reduce phishing risks and strengthen operational continuity through intelligent Barracuda email security services UK.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Improve communication visibility and operational resilience through scalable Barracuda cybersecurity environments.",
  },
];

const WHY = [
  "Expertise in enterprise email security solutions",
  "Advanced Barracuda email security services UK",
  "End-to-end deployment and optimisation services",
  "UK-focused cybersecurity expertise",
  "Scalable cloud communication protection frameworks",
  "Long-term operational resilience support",
];

const OUTCOMES = [
  "Improved communication security",
  "Reduced phishing exposure",
  "Better cloud security visibility",
  "Enhanced operational resilience",
  "Stronger ransomware protection",
  "Improved compliance readiness",
];

const FAQS = [
  {
    q: "What is Barracuda email security used for?",
    a: "Barracuda email security is an enterprise-grade email security solutions platform used to prevent phishing attacks, ransomware threats, spam, and communication-based cyber risks.",
  },
  {
    q: "Does FCC provide Barracuda email security services UK?",
    a: "Yes, FCC provides deployment, optimisation, monitoring, and managed Barracuda email security services UK for enterprise organisations.",
  },
  {
    q: "Can Barracuda secure Microsoft 365 environments?",
    a: "Yes, cloud email security capabilities within Barracuda help organisations secure Microsoft 365 and distributed communication systems.",
  },
  {
    q: "What is Barracuda spam firewall?",
    a: "The Barracuda spam firewall helps organisations filter malicious emails, reduce spam threats, and improve communication visibility.",
  },
  {
    q: "Is Barracuda suitable for businesses in London?",
    a: "Yes, FCC provides Barracuda email security London deployment and support services for organisations across the UK.",
  },
];

function BarracudaPage() {
  return (
    <div className="bg-background text-ink">
      <SiteNav />
      <Hero />
      <Overview />
      <SectionCta />
      <Challenges />
      <Approach />
      <SectionCta />
      <Capabilities />
      <Industries />
      <LeadMagnet
        eyebrow="Lead Magnet · Email Security"
        title="Email Security & Phishing Defence Guide"
        description="A practical guide to defending Microsoft 365 against phishing, BEC and ransomware using Barracuda email and cloud protection."
        asset="Email Security & Phishing Defence Guide"
      />
      <WhyFCC />
      <Outcomes />
      <CTA />
      <Faq />
      <SiteFooter />
    </div>
  );
}
function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[700px] w-[700px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 60%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black 40%, transparent 80%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="section-kicker text-brand-tint">
                Barracuda · Cybersecurity
              </span>
              <span className="h-px w-10 bg-brand-tint/40" />
            </div>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Protect business communication with{" "}
              <span className="italic text-brand-tint">intelligent</span> email security solutions.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Barracuda email security helps organisations secure business communication, protect cloud
              environments, and strengthen operational resilience against phishing, ransomware, and evolving cyber threats.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-brand-wash transition-colors whitespace-nowrap"
              >
                Speak to an Expert <span aria-hidden>→</span>
              </a>
              <a
                href="/resources/case-studies"
                className="inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand border border-brand/10 shadow-soft hover:bg-brand-wash/80 transition-colors whitespace-nowrap"
              >
                Download a case study
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src={heroImg}
                alt="Barracuda email security dashboard"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-ink/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="bg-background py-20 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="section-kicker text-brand">
              Overview
            </span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
              Modern businesses require{" "}
              <span className="italic text-brand">intelligent</span> email security solutions.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Email remains one of the most targeted attack surfaces across modern enterprise environments.
              Organisations require proactive protection frameworks capable of securing users, cloud communication
              systems, and operational infrastructure against evolving cyber threats.
            </p>
            <p>
              Barracuda email security is an enterprise-grade email security solutions platform designed to help
              organisations protect communication systems, prevent phishing attacks, improve cloud email security,
              strengthen ransomware protection, and improve operational visibility.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Protect communication systems",
                "Prevent phishing attacks",
                "Improve cloud email security",
                "Strengthen ransomware protection",
                "Improve operational visibility",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 text-base text-ink">
                  <span className="mt-2 size-1.5 rounded-full bg-brand shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Challenges() {
  return (
    <section className="bg-brand-wash py-20 lg:py-16 border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand">
            Business Challenges
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          Where communication security{" "}
          <span className="italic text-brand">breaks down</span>.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {CHALLENGES.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-white border border-ink/10 p-7 hover:border-brand/30 transition-colors"
            >
              <h3 className="font-sans text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-background py-20 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand">
            FCC Approach
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          A strategic approach to{" "}
          <span className="italic text-brand">email & cloud security</span>.
        </h2>
        <ApproachInfographic className="mt-14" steps={APPROACH} />
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="bg-brand-wash py-20 lg:py-16 border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand">
            Core Capabilities
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          End-to-end protection across every{" "}
          <span className="italic text-brand">communication channel</span>.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="rounded-2xl bg-white border border-ink/10 p-8 hover:border-brand/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-brand">{cap.n}</span>
                <h3 className="font-sans text-xl font-semibold text-ink">{cap.title}</h3>
              </div>
              <p className="mt-4 text-ink-soft leading-relaxed">{cap.lede}</p>
              <ul className="mt-6 space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[-10%] h-[600px] w-[600px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 70%, transparent), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand-tint">
            Industry Use Cases
          </span>
          <span className="h-px w-10 bg-brand-tint/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
          Trusted protection across{" "}
          <span className="italic text-brand-tint">every sector</span>.
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition-colors"
            >
              <h3 className="font-sans text-lg font-semibold">{ind.name}</h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{ind.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFCC() {
  return (
    <section className="bg-background py-20 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="section-kicker text-brand">
              Why FCC
            </span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
              The expertise to deliver{" "}
              <span className="italic text-brand">enterprise-grade</span> email security.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-4">
              {WHY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 size-1.5 rounded-full bg-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink-soft leading-relaxed">
              FCC helps organisations maximise the value of their Barracuda email security investments through
              intelligent implementation and proactive cybersecurity management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-brand-wash py-20 lg:py-16 border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand">
            Business Outcomes
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          Measurable results from{" "}
          <span className="italic text-brand">connected communication defence</span>.
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map((outcome) => (
            <div
              key={outcome}
              className="rounded-2xl bg-white border border-ink/10 p-7 flex items-start gap-4"
            >
              <span className="mt-1 size-2 rounded-full bg-brand shrink-0" />
              <span className="text-ink font-medium">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink text-white py-20 lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 70%, transparent), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <span className="section-kicker text-brand-tint">
          Protect Your Business
        </span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Protect business communication with{" "}
          <span className="italic text-brand-tint">intelligent email security</span> solutions.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Strengthen operational resilience through scalable Barracuda email security services UK and
          enterprise-grade communication security frameworks.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-brand-wash transition-colors whitespace-nowrap"
          >
            Speak to an Expert <span aria-hidden>→</span>
          </a>
          <a
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand border border-brand/10 shadow-soft hover:bg-brand-wash/80 transition-colors whitespace-nowrap"
          >
            Download a case study
          </a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-20 lg:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand">
            FAQ
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight">
          Common questions about <span className="italic text-brand">Barracuda</span>.
        </h2>
        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-sans text-lg text-ink">{f.q}</span>
                  <span
                    className={`size-7 rounded-full border border-ink/20 grid place-items-center text-ink transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 -mt-2 text-ink-soft leading-relaxed max-w-3xl">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
