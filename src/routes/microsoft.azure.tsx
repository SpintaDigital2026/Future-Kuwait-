import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/partners/azure/dashboard.webp";
const productLogo = "/partners/azure/logo.png?v=3";
import { ProductLogo } from "@/components/ProductLogo";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";
import { OutcomeInfographic } from "@/components/OutcomeInfographic";
import { IndustryInfographic } from "@/components/IndustryInfographic";

export const Route = createFileRoute("/microsoft/azure")({
  head: () => ({
    meta: [
      { title: "Microsoft Azure — Intelligent Cloud Infrastructure & Migration | FCC" },
      {
        name: "description",
        content:
          "Microsoft Azure cloud infrastructure, migration, governance and managed services. FCC delivers Azure cloud migration services UK and managed Azure services across the UK.",
      },
      { property: "og:title", content: "Microsoft Azure — Intelligent Cloud Infrastructure & Migration" },
      {
        property: "og:description",
        content:
          "Accelerate digital transformation with scalable Azure platform services — consulting, migration and managed cloud delivered by FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AzurePage,
});

const CHALLENGES = [
  {
    title: "Legacy Infrastructure Limitations",
    body:
      "Traditional on-premise systems reduce scalability, operational flexibility, and long-term infrastructure efficiency. Modern enterprises require intelligent cloud migration services UK capable of modernising infrastructure with minimal operational disruption.",
  },
  {
    title: "Operational Scalability Challenges",
    body:
      "Businesses require secure and scalable Azure platform environments capable of supporting growing operational, analytics, and application demands.",
  },
  {
    title: "Cloud Security & Visibility Concerns",
    body:
      "Organisations require intelligent monitoring and governance frameworks capable of reducing operational vulnerabilities across cloud ecosystems. FCC helps strengthen operational resilience through scalable Microsoft Azure managed services and governance frameworks.",
  },
  {
    title: "Complex Multi-System Environments",
    body:
      "Many organisations struggle to integrate applications, workloads, and operational systems into one connected cloud environment. Through intelligent Azure cloud managed services, FCC helps organisations centralise infrastructure and improve operational performance.",
  },
];

const APPROACH = [
  {
    title: "Discovery & Cloud Assessment",
    body:
      "We evaluate infrastructure environments, operational workloads, security requirements, and migration readiness to identify cloud transformation opportunities.",
  },
  {
    title: "Cloud Architecture & Planning",
    body:
      "Our experts design scalable Microsoft Azure cloud environments aligned with operational scalability, governance, and performance requirements. FCC delivers intelligent Azure consulting services UK tailored for enterprise infrastructure transformation.",
  },
  {
    title: "Deployment & Migration",
    body:
      "FCC deploys cloud infrastructure environments, enterprise workloads, operational applications, data migration ecosystems, and secure cloud frameworks through scalable Microsoft Azure cloud migration services UK strategies.",
  },
  {
    title: "Governance & Enablement",
    body:
      "Teams are trained to manage cloud environments, operational workloads, reporting systems, and governance frameworks effectively.",
  },
  {
    title: "Managed Cloud Optimisation",
    body:
      "FCC provides continuous optimisation, monitoring, and managed support services through scalable managed cloud services provider UK environments.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Azure Cloud Infrastructure",
    lede:
      "Microsoft Azure helps organisations modernise operational infrastructure through intelligent and scalable Azure platform services.",
    items: [
      "Cloud infrastructure deployment",
      "Virtual machine environments",
      "Application hosting",
      "Secure operational ecosystems",
      "Cloud scalability",
      "Enterprise workload management",
    ],
  },
  {
    n: "02",
    title: "Cloud Migration Services",
    lede:
      "Improve operational agility through secure and scalable cloud migration services UK designed for modern enterprise environments.",
    items: [
      "Infrastructure migration",
      "Application modernisation",
      "Workload migration",
      "Cloud transformation planning",
      "Operational continuity",
    ],
  },
  {
    n: "03",
    title: "Managed Azure Services",
    lede:
      "Improve operational visibility and cloud governance through scalable Microsoft Azure managed services and monitoring ecosystems.",
    items: [
      "Cloud monitoring",
      "Infrastructure optimisation",
      "Governance management",
      "Performance visibility",
      "Security monitoring",
    ],
  },
  {
    n: "04",
    title: "Azure AI & Analytics",
    lede:
      "Accelerate innovation through intelligent Microsoft Azure AI and analytics environments.",
    items: [
      "AI-powered analytics",
      "Machine learning integration",
      "Predictive insights",
      "Intelligent automation",
      "Data-driven operational visibility",
    ],
  },
  {
    n: "05",
    title: "Cloud Security & Governance",
    lede:
      "Strengthen operational resilience through scalable governance and monitoring environments within Microsoft Azure cloud services ecosystems.",
    items: [
      "Governance visibility",
      "Cloud monitoring",
      "Compliance management",
      "Vulnerability monitoring",
      "Security analytics",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Retail",
    body:
      "Improve operational scalability, reporting visibility, and digital infrastructure through intelligent Azure cloud services London environments.",
  },
  {
    name: "Financial Services",
    body:
      "Strengthen cloud governance, compliance visibility, and operational resilience through scalable Microsoft Azure cloud ecosystems.",
  },
  {
    name: "Healthcare",
    body:
      "Modernise operational infrastructure and improve application availability using secure managed cloud services UK environments.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Accelerate cloud transformation and operational agility through connected Azure platform ecosystems and scalable cloud infrastructure.",
  },
];

const WHY = [
  "Expertise in enterprise Microsoft Azure transformation",
  "Advanced cloud migration and infrastructure capabilities",
  "End-to-end deployment and optimisation services",
  "UK-focused cloud transformation expertise",
  "Scalable Azure cloud managed services",
  "Long-term operational optimisation support",
];

const OUTCOMES = [
  "Improved operational scalability",
  "Faster cloud transformation",
  "Better infrastructure visibility",
  "Enhanced operational resilience",
  "Stronger cloud governance",
  "Scalable digital innovation",
];

const FAQS = [
  {
    q: "What is Microsoft Azure used for?",
    a: "Microsoft Azure is a cloud platform designed to help organisations modernise infrastructure, host applications, improve operational scalability, and accelerate digital transformation.",
  },
  {
    q: "Does FCC provide cloud migration services UK?",
    a: "Yes, FCC delivers enterprise-grade cloud migration services UK including infrastructure migration, application modernisation, and managed cloud optimisation.",
  },
  {
    q: "What are Azure platform services?",
    a: "Azure platform services include cloud infrastructure, application hosting, analytics, AI environments, governance frameworks, and operational cloud management capabilities.",
  },
  {
    q: "Does FCC provide managed Azure services?",
    a: "Yes, FCC provides scalable Microsoft Azure managed services and operational support for enterprise cloud environments.",
  },
  {
    q: "Is FCC an Azure managed services provider in London?",
    a: "Yes, FCC operates as a trusted managed Azure services provider in London delivering enterprise cloud transformation services across the UK.",
  },
];

function AzurePage() {
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
        eyebrow="Lead Magnet · Cloud Migration"
        title="Azure Cloud Migration Playbook"
        description="Plan and execute a secure Azure migration — assessment, landing zone, governance and managed optimisation, distilled into one practical playbook."
        asset="Azure Cloud Migration Playbook"
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
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[700px] w-[700px] rounded-full opacity-50" style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 60%, transparent), transparent 70%)", filter: "blur(20px)" }} />
      <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at top, black 40%, transparent 80%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <ProductLogo src={productLogo} alt="Microsoft Azure" label="Microsoft" />
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Accelerate digital transformation with <span className="italic text-brand-tint">Microsoft Azure</span>.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Microsoft Azure helps organisations modernise infrastructure, improve operational scalability, and strengthen cloud resilience through secure and intelligent cloud ecosystems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="btn-expert group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft whitespace-nowrap"
              >
                Speak to an Expert <span aria-hidden>→</span>
              </a>
              <a
                href="/resources/case-studies"
                className="btn-case inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand border border-brand/10 shadow-soft whitespace-nowrap"
              >
                Download a case study
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img src={heroImg} alt="Microsoft Azure cloud infrastructure" width={1600} height={900} className="w-full h-auto" />
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
            <span className="section-kicker text-brand">Overview</span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
              Modern enterprises require <span className="italic text-brand">scalable</span> Azure cloud services.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>Today's organisations require secure, scalable, and intelligent cloud environments capable of supporting operational growth, application modernisation, analytics, AI integration, and enterprise resilience.</p>
            <p>As a trusted provider of Microsoft Azure cloud migration services UK, FCC helps organisations modernise operational infrastructure while improving agility and operational visibility.</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Scalable cloud infrastructure",
                "Secure operational environments",
                "Cloud migration capabilities",
                "Advanced analytics ecosystems",
                "AI-powered innovation environments",
                "Enterprise application hosting",
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
          <span className="section-kicker text-brand">Business Challenges</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          Where legacy infrastructure <span className="italic text-brand">falls short</span>.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {CHALLENGES.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white border border-ink/10 p-7 hover:border-brand/30 transition-colors">
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
          <span className="section-kicker text-brand">FCC Approach</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          A strategic approach to <span className="italic text-brand">cloud transformation</span>.
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
          <span className="section-kicker text-brand">Core Capabilities</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          A connected Azure <span className="italic text-brand">cloud ecosystem</span>.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="rounded-2xl bg-white border border-ink/10 p-8 hover:border-brand/30 transition-colors">
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
      <div aria-hidden className="pointer-events-none absolute -top-40 left-[-10%] h-[600px] w-[600px] rounded-full opacity-40" style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 70%, transparent), transparent 70%)", filter: "blur(40px)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand-tint">Industry Use Cases</span>
          <span className="h-px w-10 bg-brand-tint/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
          Cloud transformation across <span className="italic text-brand-tint">every sector</span>.
        </h2>
        <IndustryInfographic className="mt-14" layout="strip" items={INDUSTRIES.map((ind) => ({ title: ind.name, body: ind.body }))} />
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
            <span className="section-kicker text-brand">Why FCC</span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
              The expertise to deliver <span className="italic text-brand">enterprise-grade</span> Azure transformation.
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
              As a trusted Azure managed service provider in London, FCC helps organisations maximise the value of their cloud investments through intelligent transformation strategies.
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
          <span className="section-kicker text-brand">Business Outcomes</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          Measurable results from <span className="italic text-brand">intelligent cloud</span>.
        </h2>
                <OutcomeInfographic className="mt-14" layout="mosaic" items={OUTCOMES} />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink text-white py-20 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-30" style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 70%, transparent), transparent 70%)", filter: "blur(40px)" }} />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <span className="section-kicker text-brand-tint">Transform Infrastructure</span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Transform infrastructure with <span className="italic text-brand-tint">Microsoft Azure cloud services</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Improve operational scalability, cloud visibility, and enterprise resilience through intelligent Azure transformation ecosystems.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="/contact"
            className="btn-expert group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft whitespace-nowrap"
          >
            Speak to an Expert <span aria-hidden>→</span>
          </a>
          <a
            href="/resources/case-studies"
            className="btn-case inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand border border-brand/10 shadow-soft whitespace-nowrap"
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
          <span className="section-kicker text-brand">FAQ</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight">
          Common questions about <span className="italic text-brand">Azure</span>.
        </h2>
        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left">
                  <span className="font-sans text-lg text-ink">{f.q}</span>
                  <span className={`size-7 rounded-full border border-ink/20 grid place-items-center text-ink transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden>+</span>
                </button>
                {isOpen && (<p className="pb-6 -mt-2 text-ink-soft leading-relaxed max-w-3xl">{f.a}</p>)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
