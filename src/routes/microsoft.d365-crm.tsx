import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/client-2026/dynamics-365-crm.jpg.asset.json";
const heroImg = heroAsset.url;
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";

export const Route = createFileRoute("/microsoft/d365-crm")({
  head: () => ({
    meta: [
      { title: "Dynamics 365 CRM — Intelligent Customer Relationship Management | FCC" },
      {
        name: "description",
        content:
          "Dynamics 365 CRM modernises customer engagement, sales automation, and CRM/ERP integration. FCC delivers Microsoft Dynamics 365 CRM implementation and managed support across the UK.",
      },
      { property: "og:title", content: "Dynamics 365 CRM — Intelligent Customer Relationship Management" },
      {
        property: "og:description",
        content:
          "Transform customer engagement with scalable CRM and ERP solutions London businesses trust. Implementation, integration and managed support by FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: D365CRMPage,
});

const CHALLENGES = [
  {
    title: "Fragmented Customer Data",
    body:
      "Many organisations operate with disconnected systems that reduce visibility into customer engagement, sales pipelines, and operational performance. Without intelligent Microsoft Dynamics 365 CRM environments, businesses struggle to maintain customer visibility and engagement consistency.",
  },
  {
    title: "Inefficient Sales & Customer Workflows",
    body:
      "Manual workflows and disconnected reporting systems reduce productivity, collaboration, and operational responsiveness. Through scalable CRM Dynamics 365 capabilities, organisations can automate engagement workflows and improve customer lifecycle management.",
  },
  {
    title: "Limited Operational Visibility",
    body:
      "Businesses require connected customer engagement systems capable of improving reporting, forecasting, and customer intelligence across operational environments. FCC delivers intelligent D365 CRM and ERP solutions England organisations can scale confidently.",
  },
  {
    title: "Complex Digital Transformation Projects",
    body:
      "Modern enterprises require experienced Microsoft Dynamics partner London specialists capable of delivering scalable CRM transformation strategies aligned with operational goals.",
  },
];

const APPROACH = [
  {
    title: "Discovery & Business Assessment",
    body:
      "We evaluate customer engagement workflows, sales environments, reporting systems, and operational infrastructure to identify transformation opportunities.",
  },
  {
    title: "Solution Architecture & Planning",
    body:
      "Our experts design scalable Microsoft Dynamics CRM 365 environments aligned with operational requirements and enterprise objectives. FCC delivers intelligent CRM and ERP solutions London businesses can leverage to improve operational visibility and customer engagement.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys CRM systems, customer engagement platforms, sales automation workflows, reporting environments, and enterprise operational systems through scalable MS Dynamics 365 CRM implementation frameworks.",
  },
  {
    title: "Training & Enablement",
    body:
      "Teams are trained to leverage customer reporting, sales automation, operational visibility, and engagement management capabilities effectively.",
  },
  {
    title: "Managed Optimisation & Support",
    body:
      "FCC provides continuous optimisation, monitoring, and managed support services for enterprise Dynamics 365 CRM subscription environments.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Customer Relationship Management",
    lede:
      "Dynamics 365 CRM helps organisations centralise customer data, improve engagement visibility, and strengthen customer lifecycle management.",
    items: [
      "Customer data visibility",
      "Sales pipeline management",
      "Customer engagement tracking",
      "Contact management",
      "Operational reporting",
      "Workflow automation",
    ],
  },
  {
    n: "02",
    title: "Sales Automation & Reporting",
    lede:
      "Improve operational efficiency through intelligent Dynamics 365 CRM sales automation and reporting environments.",
    items: [
      "Sales forecasting",
      "Automated workflows",
      "Opportunity tracking",
      "Customer analytics",
      "Revenue visibility",
    ],
  },
  {
    n: "03",
    title: "ERP & CRM Integration",
    lede:
      "FCC delivers intelligent ERP CRM migration services Greater London designed to improve operational visibility and enterprise connectivity.",
    items: [
      "ERP and CRM integration",
      "Customer data synchronisation",
      "Operational reporting",
      "Workflow visibility",
      "Enterprise system connectivity",
    ],
  },
  {
    n: "04",
    title: "Cloud-Based CRM Transformation",
    lede:
      "Microsoft Dynamics 365 CRM environments help organisations modernise customer operations through secure and scalable Microsoft cloud ecosystems.",
    items: [
      "Cloud CRM deployment",
      "Remote operational access",
      "Integrated Microsoft environments",
      "Secure customer management",
      "Enterprise scalability",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Retail",
    body:
      "Improve customer engagement visibility, sales performance, and operational responsiveness through intelligent Dynamics CRM 365 environments.",
  },
  {
    name: "Financial Services",
    body:
      "Strengthen customer relationship management, operational reporting, and compliance visibility using scalable Microsoft Dynamics 365 CRM systems.",
  },
  {
    name: "Telecom",
    body:
      "Improve sales visibility and customer engagement workflows through intelligent Dynamics 365 CRM sales automation frameworks.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Modernise customer operations and improve operational agility through connected D365 CRM and ERP solutions England ecosystems.",
  },
];

const WHY = [
  "Expertise in enterprise Dynamics 365 CRM implementation",
  "Advanced Microsoft ecosystem transformation capabilities",
  "End-to-end deployment and optimisation services",
  "UK-focused CRM transformation expertise",
  "Scalable CRM and ERP solutions London",
  "Long-term operational optimisation support",
];

const OUTCOMES = [
  "Improved customer visibility",
  "Better sales performance",
  "Faster operational workflows",
  "Enhanced customer engagement",
  "Smarter reporting and forecasting",
  "Scalable customer operations",
];

const FAQS = [
  {
    q: "What is Dynamics 365 CRM used for?",
    a: "Dynamics 365 CRM is an enterprise-grade customer relationship management platform designed to improve customer engagement, sales visibility, workflow automation, and operational reporting.",
  },
  {
    q: "Does FCC provide Microsoft Dynamics 365 CRM implementation services?",
    a: "Yes, FCC provides deployment, optimisation, integration, and managed support services for Microsoft Dynamics 365 CRM environments.",
  },
  {
    q: "Is FCC a Microsoft Dynamics partner London?",
    a: "Yes, FCC provides enterprise-grade Microsoft Dynamics partner London services for organisations across the UK.",
  },
  {
    q: "What is Dynamics 365 CRM subscription?",
    a: "A Dynamics 365 CRM subscription provides organisations access to Microsoft cloud-based CRM environments with scalable engagement and operational capabilities.",
  },
  {
    q: "Does FCC provide ERP CRM migration services Greater London?",
    a: "Yes, FCC delivers ERP CRM migration services Greater London for organisations modernising legacy operational systems.",
  },
];

function D365CRMPage() {
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
        eyebrow="Lead Magnet · CRM Playbook"
        title="Dynamics 365 CRM Implementation Playbook"
        description="A field-tested approach to rolling out Dynamics 365 Sales, Customer Service and Marketing — data model, automation and adoption."
        asset="Dynamics 365 CRM Implementation Playbook"
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
            <div className="flex items-center gap-3 mb-8">
              <span className="section-kicker text-brand-tint">Dynamics 365 CRM · Microsoft</span>
              <span className="h-px w-10 bg-brand-tint/40" />
            </div>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Transform customer engagement with <span className="italic text-brand-tint">intelligent</span> Dynamics 365 CRM solutions.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Dynamics 365 CRM helps organisations improve customer engagement, centralise sales operations, and strengthen operational visibility through connected Microsoft business ecosystems.
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
              <img src={heroImg} alt="Dynamics 365 CRM customer engagement dashboard" width={1600} height={900} className="w-full h-auto" />
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
            <span className="section-kicker text-brand">Overview</span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
              Modern enterprises require <span className="italic text-brand">intelligent</span> CRM & ERP solutions.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>Today's organisations require scalable digital ecosystems capable of improving customer visibility, sales performance, operational collaboration, and long-term business growth.</p>
            <p>As an experienced Microsoft Dynamics partner London, FCC helps organisations implement connected Microsoft ecosystems aligned with operational and commercial objectives.</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Centralise customer data",
                "Improve sales visibility",
                "Automate workflows",
                "Strengthen customer relationships",
                "Improve operational reporting",
                "Accelerate business growth",
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
          Where customer operations <span className="italic text-brand">break down</span>.
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
          A strategic approach to <span className="italic text-brand">CRM transformation</span>.
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
          A connected customer <span className="italic text-brand">engagement ecosystem</span>.
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
          Customer transformation across <span className="italic text-brand-tint">every sector</span>.
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
              The expertise to deliver <span className="italic text-brand">enterprise-grade</span> CRM transformation.
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
              FCC helps organisations maximise the value of their Microsoft Dynamics 365 CRM investments through intelligent implementation and enterprise transformation strategies.
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
          Measurable results from <span className="italic text-brand">intelligent CRM</span>.
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map((outcome) => (
            <div key={outcome} className="rounded-2xl bg-white border border-ink/10 p-7 flex items-start gap-4">
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
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-30" style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 70%, transparent), transparent 70%)", filter: "blur(40px)" }} />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <span className="section-kicker text-brand-tint">Transform Customer Engagement</span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Transform customer engagement with <span className="italic text-brand-tint">intelligent Dynamics 365 CRM solutions</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Improve customer visibility, sales performance, and operational efficiency through scalable Microsoft CRM ecosystems.
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
          <span className="section-kicker text-brand">FAQ</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight">
          Common questions about <span className="italic text-brand">Dynamics 365 CRM</span>.
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
