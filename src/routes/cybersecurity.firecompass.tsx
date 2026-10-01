import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/partners/firecompass/dashboard.jpg";
const productLogo = "/partners/firecompass/logo.png?v=3";
import { ProductLogo } from "@/components/ProductLogo";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";
import { OutcomeInfographic } from "@/components/OutcomeInfographic";
import { IndustryInfographic } from "@/components/IndustryInfographic";

export const Route = createFileRoute("/cybersecurity/firecompass")({
  head: () => ({
    meta: [
      { title: "FireCompass — Intelligent Attack Surface Management & Threat Intelligence | FCC" },
      {
        name: "description",
        content:
          "FireCompass delivers enterprise-grade attack surface management and threat intelligence. FCC provides UK implementation, monitoring, and managed cybersecurity services across the UK.",
      },
      { property: "og:title", content: "FireCompass — Intelligent Attack Surface Management & Threat Intelligence Platform" },
      {
        property: "og:description",
        content:
          "Strengthen cyber resilience with FireCompass threat intelligence, attack surface management, and continuous security testing — delivered by FCC across the UK.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: FireCompassPage,
});

const CHALLENGES = [
  {
    title: "Limited Visibility into External Exposure",
    body:
      "Many organisations lack visibility into internet-facing infrastructure, operational vulnerabilities, and exposed digital environments. Without intelligent external attack surface management, businesses struggle to identify risks before they become operational incidents.",
  },
  {
    title: "Increasing Cyber Threat Complexity",
    body:
      "Modern enterprises require intelligent cyber threat intelligence platform capabilities capable of identifying attack patterns, operational vulnerabilities, and emerging threats in real time.",
  },
  {
    title: "Manual Security Monitoring Processes",
    body:
      "Traditional monitoring environments reduce operational visibility and slow down response readiness. Through scalable continuous security testing, organisations can proactively identify vulnerabilities and improve operational resilience.",
  },
  {
    title: "Expanding Digital Infrastructure Risks",
    body:
      "Cloud environments, distributed systems, and connected infrastructures increase operational exposure across enterprise environments. Organisations require scalable attack surface management frameworks capable of improving operational visibility and cyber resilience.",
  },
];

const APPROACH = [
  {
    title: "Attack Surface Assessment",
    body:
      "We identify exposed infrastructure, operational vulnerabilities, and internet-facing assets requiring proactive monitoring and protection.",
  },
  {
    title: "Threat Intelligence Planning",
    body:
      "Our experts design scalable external threat intelligence frameworks aligned with operational environments and organisational risk requirements.",
  },
  {
    title: "Platform Deployment",
    body:
      "FCC deploys the FireCompass cybersecurity platform integrated with enterprise security systems, monitoring environments, and operational workflows.",
  },
  {
    title: "Security Team Enablement",
    body:
      "Teams gain visibility into vulnerabilities, attack paths, operational risks, and cyber exposure through intelligent analytics and reporting environments.",
  },
  {
    title: "Continuous Monitoring & Optimisation",
    body:
      "FCC provides continuous monitoring, optimisation, and continuous security testing services designed to improve operational resilience and exposure visibility.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Attack Surface Management",
    lede:
      "FireCompass helps organisations improve visibility across operational environments through intelligent attack surface management capabilities.",
    items: [
      "Internet-facing asset discovery",
      "Exposure visibility",
      "Operational risk identification",
      "Vulnerability prioritisation",
      "Threat monitoring",
    ],
  },
  {
    n: "02",
    title: "Cyber Threat Intelligence Platform",
    lede:
      "Improve operational resilience through an intelligent cyber threat intelligence platform designed to identify evolving cyber risks and operational vulnerabilities.",
    items: [
      "Threat intelligence analytics",
      "Vulnerability monitoring",
      "Risk scoring",
      "Threat visibility",
      "Operational threat insights",
    ],
  },
  {
    n: "03",
    title: "External Attack Surface Monitoring",
    lede:
      "Improve operational awareness through advanced external attack surface monitoring designed for modern enterprise infrastructures.",
    items: [
      "Exposure monitoring",
      "Asset visibility",
      "Threat discovery",
      "Operational analytics",
      "Risk assessment",
    ],
  },
  {
    n: "04",
    title: "Continuous Security Testing",
    lede:
      "Strengthen operational resilience through scalable continuous security testing frameworks designed to proactively identify vulnerabilities and exposure risks.",
    items: [
      "Security posture validation",
      "Automated testing",
      "Exposure analysis",
      "Threat simulations",
      "Operational visibility",
    ],
  },
  {
    n: "05",
    title: "External Threat Intelligence",
    lede:
      "Improve operational readiness through intelligent external threat intelligence capabilities designed to strengthen cyber resilience and operational visibility.",
    items: [
      "Threat monitoring",
      "Attack path analysis",
      "Exposure insights",
      "Risk visibility",
      "Security analytics",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Financial Services",
    body:
      "Improve operational visibility and strengthen cyber resilience through intelligent attack surface management and proactive threat monitoring.",
  },
  {
    name: "Healthcare",
    body:
      "Protect internet-facing systems and distributed infrastructures using scalable external attack surface management frameworks.",
  },
  {
    name: "Telecom",
    body:
      "Monitor operational environments and improve cyber visibility through intelligent threat intelligence platform capabilities.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Strengthen exposure visibility and improve operational resilience through scalable FireCompass environments and proactive monitoring systems.",
  },
];

const WHY = [
  "Expertise in enterprise attack surface management",
  "Advanced FireCompass implementation capabilities",
  "End-to-end deployment and optimisation services",
  "UK-focused cybersecurity expertise",
  "Scalable external attack surface management frameworks",
  "Long-term operational resilience support",
];

const OUTCOMES = [
  "Improved exposure visibility",
  "Faster vulnerability identification",
  "Better operational resilience",
  "Reduced cybersecurity risk",
  "Enhanced threat intelligence readiness",
  "Stronger proactive security posture",
];

const FAQS = [
  {
    q: "What is FireCompass used for?",
    a: "FireCompass is an enterprise-grade threat intelligence platform and attack surface management solution used to identify exposed digital assets, monitor external cyber exposure, improve vulnerability visibility, and strengthen operational resilience.",
  },
  {
    q: "Does FCC provide external attack surface management services?",
    a: "Yes, FCC delivers enterprise-grade external attack surface management services, including FireCompass implementation, optimisation, and managed cybersecurity services across the UK.",
  },
  {
    q: "Can FireCompass identify exposed digital assets?",
    a: "Yes, FireCompass provides internet-facing asset discovery, exposure visibility, and vulnerability prioritisation capabilities designed to help organisations identify and monitor exposed digital assets.",
  },
  {
    q: "What is continuous security testing?",
    a: "Continuous security testing is a proactive cybersecurity approach that uses automated testing, exposure analysis, and threat simulations to identify vulnerabilities and strengthen operational resilience on an ongoing basis.",
  },
  {
    q: "Is FireCompass suitable for businesses in London?",
    a: "Yes, FCC provides scalable FireCompass deployment and managed cybersecurity services for organisations across London and the UK.",
  },
];

function FireCompassPage() {
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
        eyebrow="Lead Magnet · Offensive Security"
        title="Continuous Attack Surface Management Guide"
        description="Why scheduled pen tests are no longer enough — and how continuous attack surface discovery closes the gap."
        asset="Continuous Attack Surface Management Guide"
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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
        <div className="grid min-w-0 max-w-full lg:grid-cols-12 gap-12 items-center">
          <div className="min-w-0 max-w-full lg:col-span-6">
            <ProductLogo src={productLogo} alt="FireCompass" label="Cybersecurity" />
            <h1 className="max-w-full font-sans text-[1.7rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] break-words">
              Strengthen cyber resilience with{" "}
              <span className="italic text-brand-tint">intelligent</span> attack surface management.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              FireCompass is an enterprise-grade threat intelligence platform designed to help
              organisations identify vulnerabilities, monitor digital exposure, and improve
              operational resilience through intelligent external attack surface management.
            </p>
            <div className="mt-10 flex w-full min-w-0 flex-col gap-3 lg:flex-row lg:flex-wrap">
              <a
                href="/contact"
                className="btn-expert group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft"
              >
                Speak to an Expert <span aria-hidden>→</span>
              </a>
              <a
                href="/resources/case-studies"
                className="btn-case inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand border border-brand/10 shadow-soft"
              >
                Download a case study
              </a>
            </div>
          </div>
          <div className="min-w-0 max-w-full lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src={heroImg}
                alt="FireCompass threat intelligence dashboard"
                width={1600}
                height={900}
                className="block w-full max-w-full h-auto"
              />
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
              <span className="italic text-brand">intelligent</span> threat intelligence platforms.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Today&apos;s organisations operate across complex digital ecosystems, cloud infrastructures,
              internet-facing environments, and distributed operational systems. Without proactive
              visibility into exposed assets and operational vulnerabilities, businesses remain vulnerable
              to evolving cyber threats.
            </p>
            <p>
              FireCompass is an advanced threat intelligence platform designed to help organisations
              identify exposed digital assets, improve vulnerability visibility, strengthen operational
              resilience, monitor external cyber exposure, and improve threat detection readiness.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Identify exposed digital assets",
                "Improve vulnerability visibility",
                "Strengthen operational resilience",
                "Monitor external cyber exposure",
                "Improve threat detection readiness",
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
          Where threat visibility{" "}
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
          <span className="italic text-brand">threat intelligence & exposure management</span>.
        </h2>
        <ApproachInfographic className="mt-14" layout="stage" steps={APPROACH} />
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
          End-to-end visibility across every{" "}
          <span className="italic text-brand">digital surface</span>.
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
        <IndustryInfographic className="mt-14" layout="path" items={INDUSTRIES.map((ind) => ({ title: ind.name, body: ind.body }))} />
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
              <span className="italic text-brand">enterprise-grade</span> attack surface management.
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
              FCC helps organisations maximise the value of their FireCompass cybersecurity platform
              investments through intelligent implementation and proactive threat management.
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
          <span className="italic text-brand">intelligent exposure management</span>.
        </h2>
                <OutcomeInfographic className="mt-14" layout="columns" items={OUTCOMES} />
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
          Improve Your Visibility
        </span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Improve visibility with{" "}
          <span className="italic text-brand-tint">intelligent attack surface management</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Strengthen operational resilience through scalable FireCompass monitoring and proactive
          threat intelligence frameworks.
        </p>
        <div className="mt-10 flex w-full min-w-0 flex-col items-stretch gap-3 lg:flex-row lg:flex-wrap lg:justify-center">
          <a
            href="/contact"
            className="btn-expert group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft"
          >
            Speak to an Expert <span aria-hidden>→</span>
          </a>
          <a
            href="/resources/case-studies"
            className="btn-case inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand border border-brand/10 shadow-soft"
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
          Common questions about <span className="italic text-brand">FireCompass</span>.
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
