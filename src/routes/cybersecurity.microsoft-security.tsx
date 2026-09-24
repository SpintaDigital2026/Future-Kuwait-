import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/client-2026/microsoft-security.jpg.asset.json";
const heroImg = heroAsset.url;
import resilienceAsset from "@/assets/client-2026/resilience-layered-controls.jpg.asset.json";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";

export const Route = createFileRoute("/cybersecurity/microsoft-security")({
  head: () => ({
    meta: [
      { title: "Microsoft Security — Intelligent Enterprise Cybersecurity Solutions | FCC" },
      {
        name: "description",
        content:
          "Microsoft security solutions help organisations protect users, endpoints, cloud environments, and business data. FCC delivers enterprise-grade Microsoft 365 security implementation, optimisation, and managed cybersecurity services across the UK.",
      },
      { property: "og:title", content: "Microsoft Security — Intelligent Enterprise Cybersecurity Solutions" },
      {
        property: "og:description",
        content:
          "Strengthen enterprise protection with Microsoft Defender, Microsoft 365 security, and Microsoft cloud security — delivered by FCC across the UK.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: MicrosoftSecurityPage,
});

const CHALLENGES = [
  {
    title: "Increasing Identity & Endpoint Threats",
    body:
      "Modern organisations require intelligent Microsoft security frameworks capable of protecting distributed users, operational devices, and enterprise environments against evolving cyber attacks. Without advanced Microsoft Defender capabilities, businesses remain vulnerable to identity threats, ransomware attacks, and operational disruption.",
  },
  {
    title: "Cloud Security Complexity",
    body:
      "As organisations continue expanding across Microsoft cloud ecosystems, scalable Microsoft cloud security environments are essential for improving visibility and operational resilience.",
  },
  {
    title: "Fragmented Security Visibility",
    body:
      "Disconnected systems reduce visibility into vulnerabilities, suspicious activity, and operational risks across enterprise infrastructures. FCC helps organisations improve visibility through intelligent Microsoft 365 security environments and centralised threat management.",
  },
  {
    title: "Compliance & Governance Pressures",
    body:
      "Modern enterprises require integrated Microsoft cybersecurity frameworks aligned with governance, operational continuity, and compliance requirements.",
  },
];

const APPROACH = [
  {
    title: "Security Assessment & Planning",
    body:
      "We evaluate operational environments, vulnerabilities, governance requirements, and compliance risks to design scalable Microsoft security frameworks.",
  },
  {
    title: "Identity & Cloud Security Architecture",
    body:
      "Our experts design intelligent Microsoft cloud security environments aligned with operational infrastructure and enterprise governance requirements.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys Microsoft Defender, Microsoft Defender for Endpoint, Microsoft Defender for Business, Microsoft 365 security, and threat monitoring systems through scalable implementation strategies.",
  },
  {
    title: "Governance & Enablement",
    body:
      "Teams gain operational visibility, governance controls, and security readiness through structured enablement programmes.",
  },
  {
    title: "Managed Security Operations",
    body:
      "FCC provides continuous monitoring, optimisation, and managed Microsoft cybersecurity services designed to improve operational resilience and security visibility.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Identity & Access Security",
    lede:
      "Microsoft security helps organisations secure identities, users, and access environments through intelligent governance and authentication frameworks.",
    items: [
      "Identity protection",
      "Access governance",
      "Multi-factor authentication",
      "Conditional access management",
      "Threat visibility",
    ],
  },
  {
    n: "02",
    title: "Endpoint Protection",
    lede:
      "Microsoft Defender for Endpoint helps organisations secure endpoints, operational devices, and distributed users against evolving cyber threats.",
    items: [
      "Endpoint threat prevention",
      "Vulnerability monitoring",
      "Threat analytics",
      "Automated remediation",
      "Real-time security visibility",
    ],
  },
  {
    n: "03",
    title: "Microsoft 365 Security",
    lede:
      "Improve operational protection through integrated Microsoft 365 security capabilities designed for modern cloud environments.",
    items: [
      "Microsoft 365 protection",
      "Collaboration security",
      "Email threat monitoring",
      "Cloud communication security",
      "Operational governance",
    ],
  },
  {
    n: "04",
    title: "Microsoft Defender for Business",
    lede:
      "Microsoft Defender for Business helps organisations improve operational security through intelligent protection frameworks designed for modern business environments.",
    items: [
      "Endpoint protection",
      "Threat visibility",
      "Security automation",
      "Malware prevention",
      "Simplified security management",
    ],
  },
  {
    n: "05",
    title: "Microsoft Cloud Security",
    lede:
      "Improve visibility and operational governance through scalable Microsoft cloud security environments.",
    items: [
      "Cloud threat monitoring",
      "Operational visibility",
      "Security posture management",
      "Compliance visibility",
      "Threat intelligence",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Financial Services",
    body:
      "Strengthen compliance readiness, operational visibility, and identity protection through enterprise-grade Microsoft security environments.",
  },
  {
    name: "Healthcare",
    body:
      "Protect patient systems, operational infrastructures, and cloud environments using scalable Microsoft 365 security frameworks.",
  },
  {
    name: "Retail",
    body:
      "Secure distributed users, operational devices, and customer systems through intelligent Microsoft Defender environments.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Improve security visibility and operational resilience through integrated Microsoft cybersecurity frameworks.",
  },
];

const WHY = [
  "Expertise in enterprise Microsoft security environments",
  "Advanced Microsoft ecosystem implementation capabilities",
  "End-to-end deployment and optimisation services",
  "UK-focused cybersecurity expertise",
  "Scalable cloud and endpoint protection frameworks",
  "Long-term operational resilience support",
];

const OUTCOMES = [
  "Improved security visibility",
  "Enhanced operational resilience",
  "Reduced cybersecurity risk",
  "Better cloud governance",
  "Stronger endpoint protection",
  "Improved compliance readiness",
];

const FAQS = [
  {
    q: "What is Microsoft security used for?",
    a: "Microsoft security helps organisations protect users, endpoints, cloud environments, and operational systems through integrated cybersecurity frameworks.",
  },
  {
    q: "What is Microsoft Defender?",
    a: "Microsoft Defender is a security platform designed to help organisations prevent threats, monitor vulnerabilities, and improve operational protection.",
  },
  {
    q: "Does FCC provide Microsoft 365 security services?",
    a: "Yes, FCC provides implementation, optimisation, and managed Microsoft 365 security services for enterprise environments.",
  },
  {
    q: "What is Microsoft Defender for Endpoint?",
    a: "Microsoft Defender for Endpoint helps organisations secure devices, endpoints, and distributed operational environments against cyber threats.",
  },
  {
    q: "Does Microsoft support cloud security environments?",
    a: "Yes, Microsoft cloud security frameworks help organisations improve operational visibility and strengthen cloud protection across Microsoft ecosystems.",
  },
];

function MicrosoftSecurityPage() {
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
        eyebrow="Lead Magnet · Security Architecture"
        title="Microsoft Security Stack Blueprint"
        description="Defender, Sentinel, Entra and Purview — how the Microsoft security stack fits together and where to start."
        asset="Microsoft Security Stack Blueprint"
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
                Microsoft Security · Cybersecurity
              </span>
              <span className="h-px w-10 bg-brand-tint/40" />
            </div>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Strengthen enterprise protection with{" "}
              <span className="italic text-brand-tint">intelligent</span> Microsoft security solutions.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Microsoft security solutions help organisations protect users, endpoints, cloud environments, and
              business data through integrated threat protection, identity management, and operational security
              frameworks.
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
                alt="Microsoft enterprise security dashboard"
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
              Modern enterprises require{" "}
              <span className="italic text-brand">intelligent</span> Microsoft security frameworks.
            </h2>
            <img
              src={resilienceAsset.url}
              alt="Layered cybersecurity resilience controls"
              className="mt-8 aspect-[16/10] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Today&apos;s organisations operate across cloud environments, hybrid infrastructures, remote workforces,
              and distributed operational ecosystems. Businesses require scalable security frameworks capable of protecting
              identities, endpoints, communication systems, and operational environments against evolving cyber threats.
            </p>
            <p>
              Microsoft security provides integrated protection across Microsoft 365 environments, cloud ecosystems,
              endpoint infrastructures, enterprise identities, operational applications, and hybrid business environments.
            </p>
            <p>
              FCC helps organisations implement Microsoft Defender, Microsoft 365 security, Microsoft Defender for Endpoint,
              Microsoft Defender for Business, and Microsoft cloud security to improve operational resilience, strengthen
              compliance, and reduce cybersecurity risk.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Protect users and endpoints",
                "Secure cloud environments",
                "Improve identity governance",
                "Strengthen compliance readiness",
                "Reduce cybersecurity risk",
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
          Where enterprise security{" "}
          <span className="italic text-brand">needs Microsoft protection</span>.
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
          <span className="italic text-brand">Microsoft cybersecurity</span>.
        </h2>
        <ApproachInfographic className="mt-14" steps={APPROACH} />
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="bg-brand-wash py-20 lg:py-16 border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand">
            Core Capabilities
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          Integrated protection across every{" "}
          <span className="italic text-brand">Microsoft security layer</span>.
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
          Trusted Microsoft security across{" "}
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
              <span className="italic text-brand">enterprise-grade</span> Microsoft security.
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
              FCC helps organisations maximise the value of their Microsoft 365 security investments through
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
          <span className="italic text-brand">integrated Microsoft security</span>.
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
          Secure Your Enterprise
        </span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Secure your enterprise with{" "}
          <span className="italic text-brand-tint">intelligent Microsoft security solutions</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Strengthen operational resilience through scalable Microsoft security and integrated cloud protection frameworks.
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
          Common questions about <span className="italic text-brand">Microsoft security</span>.
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
