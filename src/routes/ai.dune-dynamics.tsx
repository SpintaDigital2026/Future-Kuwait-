import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/partners/dune-dynamics/dashboard.png";
const productLogo = "/partners/dune-dynamics/logo.png?v=3";
import responsibleAiAsset from "@/assets/client-2026/ai-productisation-responsible-ai.jpg.asset.json";
import { ProductLogo } from "@/components/ProductLogo";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";

export const Route = createFileRoute("/ai/dune-dynamics")({
  head: () => ({
    meta: [
      { title: "Dune Dynamics — Microsoft Business Transformation Solutions | FCC" },
      {
        name: "description",
        content:
          "Dune Dynamics delivers enterprise-grade Microsoft business transformation services, ERP, CRM, and Dynamics 365 consulting. FCC provides UK implementation and managed support across the UK.",
      },
      { property: "og:title", content: "Dune Dynamics — Microsoft Business Transformation Solutions" },
      {
        property: "og:description",
        content:
          "Accelerate growth with scalable Dune Dynamics Microsoft solutions — ERP, CRM, Dynamics 365, and intelligent workflow automation delivered by FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: DuneDynamicsPage,
});

const CHALLENGES = [
  {
    title: "Legacy Operational Systems",
    body:
      "Many organisations continue to operate using disconnected legacy systems that reduce efficiency, visibility, and scalability. Businesses require intelligent business transformation services capable of modernising operational ecosystems and improving long-term agility.",
  },
  {
    title: "Limited Operational Visibility",
    body:
      "Without integrated ERP and CRM systems, organisations struggle to manage reporting, customer engagement, and operational performance effectively. Dune Dynamics ERP CRM environments help businesses centralise operations and improve enterprise-wide visibility.",
  },
  {
    title: "Complex Digital Transformation Projects",
    body:
      "Modern enterprises require experienced Microsoft Dynamics 365 implementation partners capable of delivering scalable implementation strategies with minimal operational disruption.",
  },
  {
    title: "Inefficient Business Workflows",
    body:
      "Disconnected processes and manual operations reduce productivity and increase operational complexity. Through intelligent automation and integrated Microsoft ecosystems, Dune Dynamics solutions help organisations improve operational efficiency and decision-making.",
  },
];

const APPROACH = [
  {
    title: "Discovery & Business Assessment",
    body:
      "We evaluate operational workflows, reporting environments, customer engagement processes, and infrastructure requirements to identify transformation opportunities.",
  },
  {
    title: "Solution Architecture & Planning",
    body:
      "Our experts design scalable Microsoft ecosystems aligned with operational requirements and enterprise growth objectives. As a trusted Dynamics 365 implementation partner company, FCC delivers intelligent transformation frameworks for modern enterprise environments.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys ERP systems, CRM platforms, Microsoft business applications, cloud ecosystems, and automation workflows through scalable Dune Dynamics Microsoft partner implementation frameworks.",
  },
  {
    title: "Training & Enablement",
    body:
      "Teams are trained to leverage reporting, automation, customer engagement, and workflow management capabilities effectively.",
  },
  {
    title: "Managed Optimisation & Support",
    body:
      "FCC provides continuous optimisation, monitoring, and support services to maximise the value of your Dune Dynamics Microsoft solutions UK environment.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Microsoft ERP & CRM Transformation",
    lede:
      "Dune Dynamics ERP CRM solutions help organisations modernise operations, improve customer visibility, and strengthen operational control.",
    items: [
      "ERP modernisation",
      "CRM transformation",
      "Workflow automation",
      "Business process optimisation",
      "Operational reporting visibility",
    ],
  },
  {
    n: "02",
    title: "Dynamics 365 Consulting Services",
    lede:
      "FCC provides enterprise-grade Dynamics 365 consulting services designed to improve operational scalability and enterprise visibility.",
    items: [
      "Microsoft Dynamics consulting",
      "ERP and CRM implementation",
      "Workflow optimisation",
      "Operational transformation",
      "Cloud ecosystem integration",
    ],
  },
  {
    n: "03",
    title: "CRM Solutions for Business",
    lede:
      "Dune Dynamics CRM solutions for business help organisations improve customer engagement, sales visibility, and operational responsiveness.",
    items: [
      "Customer lifecycle visibility",
      "Sales workflow management",
      "Customer engagement analytics",
      "CRM automation",
      "Operational reporting",
    ],
  },
  {
    n: "04",
    title: "Microsoft Business Ecosystem Integration",
    lede:
      "FCC helps organisations implement connected Microsoft environments through scalable Microsoft solutions partner expertise.",
    items: [
      "Microsoft cloud integration",
      "Operational visibility",
      "Business analytics",
      "Process automation",
      "Enterprise application integration",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Retail",
    body:
      "Improve operational visibility, inventory management, and customer engagement through intelligent business transformation services and ERP modernisation.",
  },
  {
    name: "Financial Services",
    body:
      "Strengthen operational reporting, compliance visibility, and customer relationship management through scalable Microsoft ecosystems.",
  },
  {
    name: "Telecom",
    body:
      "Improve workflow automation, operational scalability, and reporting visibility using intelligent Dune Dynamics solutions.",
  },
  {
    name: "Healthcare",
    body:
      "Enhance operational coordination and customer engagement through connected CRM and ERP environments.",
  },
];

const WHY = [
  "Expertise in enterprise business transformation services",
  "Advanced Dune Dynamics Microsoft partner UK services",
  "End-to-end Microsoft ecosystem implementation",
  "UK-focused enterprise transformation expertise",
  "Scalable ERP and CRM deployment frameworks",
  "Long-term operational optimisation support",
];

const OUTCOMES = [
  "Improved operational efficiency",
  "Better customer engagement visibility",
  "Stronger workflow automation",
  "Enhanced reporting and analytics",
  "Faster decision-making",
  "Scalable digital transformation",
];

const FAQS = [
  {
    q: "What is Dune Dynamics?",
    a: "Dune Dynamics provides Microsoft-powered ERP, CRM, and enterprise transformation solutions designed to improve operational visibility and business performance.",
  },
  {
    q: "Does FCC provide Dune Dynamics Microsoft partner UK services?",
    a: "Yes, FCC provides implementation, integration, optimisation, and managed support services for Dune Dynamics Microsoft partner UK services.",
  },
  {
    q: "Is Dune Dynamics suitable for ERP and CRM transformation?",
    a: "Yes, Dune Dynamics ERP CRM environments are designed to modernise enterprise operations, customer engagement, and reporting systems.",
  },
  {
    q: "Does FCC provide Dynamics 365 consulting services?",
    a: "Yes, FCC delivers enterprise-grade Dynamics 365 consulting services and Microsoft ecosystem implementation support.",
  },
  {
    q: "Is FCC a Microsoft solutions partner?",
    a: "Yes, FCC operates as a trusted Microsoft solutions partner delivering scalable Microsoft business transformation services.",
  },
];

function DuneDynamicsPage() {
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
        eyebrow="Lead Magnet · Generative AI"
        title="Generative AI Adoption Roadmap"
        description="From first pilot to enterprise rollout — a pragmatic roadmap for generative AI with Dune Dynamics."
        asset="Generative AI Adoption Roadmap"
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
            <ProductLogo src={productLogo} alt="Dune Dynamics" label="AI" />
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Accelerate growth with <span className="italic text-brand-tint">intelligent</span> business transformation services.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Dune Dynamics delivers enterprise-grade Microsoft technologies and scalable business transformation services designed to modernise operations, improve visibility, and optimise business performance.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-deep transition-colors shadow-soft whitespace-nowrap"
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
              <img src={heroImg} alt="Dune Dynamics Microsoft business transformation dashboard" width={1600} height={900} className="w-full h-auto" />
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
              Modern enterprises require <span className="italic text-brand">scalable</span> business transformation services.
            </h2>
            <img
              src={responsibleAiAsset.url}
              alt="Responsible AI productisation"
              className="mt-8 aspect-[16/10] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Today&apos;s organisations require intelligent digital ecosystems capable of improving operational efficiency, customer engagement, reporting visibility, and long-term scalability.
            </p>
            <p>
              As a trusted provider of Dune Dynamics Microsoft partner UK services, FCC helps businesses accelerate digital transformation through scalable Microsoft technologies and strategic implementation expertise.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Microsoft business applications",
                "ERP and CRM transformation",
                "Cloud-based operational ecosystems",
                "Intelligent workflow automation",
                "Enterprise analytics and reporting",
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
          Where operations <span className="italic text-brand">slow down</span>.
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
          A strategic approach to <span className="italic text-brand">business transformation</span>.
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
          <span className="section-kicker text-brand">Core Capabilities</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          A connected Microsoft <span className="italic text-brand">business ecosystem</span>.
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
          Trusted transformation across <span className="italic text-brand-tint">every sector</span>.
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition-colors">
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
            <span className="section-kicker text-brand">Why FCC</span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
              The expertise to deliver <span className="italic text-brand">enterprise-grade</span> Microsoft transformation.
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
              FCC helps organisations maximise the value of their Microsoft investments through intelligent transformation strategies and enterprise technology expertise.
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
          Measurable results from <span className="italic text-brand">intelligent transformation</span>.
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map((outcome) => (
            <div key={outcome} className="rounded-2xl bg-white border border-ink/10 p-7 flex items-start gap-4">
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
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-30" style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 70%, transparent), transparent 70%)", filter: "blur(40px)" }} />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <span className="section-kicker text-brand-tint">Transform Operations</span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Transform operations with <span className="italic text-brand-tint">intelligent Microsoft business solutions</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Accelerate operational efficiency and digital transformation through scalable Dune Dynamics Microsoft solutions UK environments.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-deep transition-colors shadow-soft whitespace-nowrap"
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
          <span className="section-kicker text-brand">FAQ</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight">
          Common questions about <span className="italic text-brand">Dune Dynamics</span>.
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
