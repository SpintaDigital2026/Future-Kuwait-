import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/partners/provakil/dashboard.png";
const productLogo = "/partners/provakil/logo.png?v=3";
import { ProductLogo } from "@/components/ProductLogo";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";

export const Route = createFileRoute("/ai/provakil")({
  head: () => ({
    meta: [
      { title: "Provakil — Intelligent Contract Lifecycle Management Platform | FCC" },
      {
        name: "description",
        content:
          "Provakil delivers enterprise-grade contract lifecycle management, legal workflow automation, and contract visibility. FCC provides UK implementation and managed support for legal tech solutions.",
      },
      { property: "og:title", content: "Provakil — Intelligent Contract Lifecycle Management Platform" },
      {
        property: "og:description",
        content:
          "Modernise legal operations with scalable Provakil contract management software — workflow automation, compliance tracking, and intelligent CLM delivered by FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ProvakilPage,
});

const CHALLENGES = [
  {
    title: "Manual Contract Management Processes",
    body:
      "Traditional legal workflows reduce operational efficiency and increase delays in approvals, renewals, and compliance tracking. Businesses require scalable contract automation software capable of improving legal visibility and operational responsiveness.",
  },
  {
    title: "Limited Contract Visibility",
    body:
      "Without enterprise-grade contract lifecycle management software, organisations struggle to manage contract approvals, obligations, and renewal timelines effectively.",
  },
  {
    title: "Fragmented Legal Operations",
    body:
      "Disconnected systems reduce visibility into legal workflows, document repositories, and compliance processes. The Provakil legal tech platform helps organisations centralise legal operations through intelligent workflow management and automation.",
  },
  {
    title: "Increasing Compliance & Governance Requirements",
    body:
      "Modern enterprises require intelligent enterprise legal management software capable of improving legal governance, operational visibility, and compliance readiness.",
  },
];

const APPROACH = [
  {
    title: "Discovery & Legal Workflow Assessment",
    body:
      "We evaluate legal processes, contract workflows, approval systems, and operational challenges to identify optimisation opportunities.",
  },
  {
    title: "Solution Architecture & Planning",
    body:
      "Our experts design scalable contract lifecycle management software environments aligned with operational and compliance requirements.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys contract management environments, legal workflow automation systems, centralised document repositories, and reporting and compliance frameworks through scalable Provakil CLM solution implementation strategies.",
  },
  {
    title: "Training & Enablement",
    body:
      "Teams are trained to leverage workflow automation, contract visibility, reporting tools, and approval management capabilities effectively.",
  },
  {
    title: "Managed Optimisation & Support",
    body:
      "FCC provides continuous optimisation, monitoring, and support services for Provakil contract lifecycle management UK environments.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Contract Lifecycle Management",
    lede:
      "Provakil contract management software helps organisations manage contracts from initiation and review to approval, renewal, and compliance tracking.",
    items: [
      "Contract creation workflows",
      "Approval automation",
      "Obligation tracking",
      "Renewal management",
      "Centralised contract visibility",
    ],
  },
  {
    n: "02",
    title: "Contract Automation Software",
    lede:
      "Improve operational responsiveness through scalable contract automation software designed to reduce manual effort and accelerate approvals.",
    items: [
      "Automated approvals",
      "Workflow automation",
      "Contract notifications",
      "Escalation management",
      "Digital collaboration tools",
    ],
  },
  {
    n: "03",
    title: "Enterprise Legal Management Software",
    lede:
      "The Provakil legal tech platform helps organisations centralise legal operations, compliance visibility, and workflow management.",
    items: [
      "Legal operations visibility",
      "Compliance tracking",
      "Centralised legal documentation",
      "Workflow reporting",
      "Operational analytics",
    ],
  },
  {
    n: "04",
    title: "Legal Contract Management Tools",
    lede:
      "Improve contract governance and operational visibility through scalable legal contract management tools designed for enterprise environments.",
    items: [
      "Searchable contract repositories",
      "Real-time reporting",
      "Contract analytics",
      "Approval visibility",
      "Compliance management",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Financial Services",
    body:
      "Improve contract governance, compliance visibility, and approval workflows through scalable legal tech solutions UK.",
  },
  {
    name: "Healthcare",
    body:
      "Strengthen legal documentation visibility and compliance tracking using intelligent contract management software UK environments.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Improve legal operational efficiency and contract lifecycle visibility through enterprise-grade Provakil contract management software UK systems.",
  },
  {
    name: "Telecom & Technology",
    body:
      "Accelerate approvals, automate legal workflows, and improve operational governance using intelligent Provakil CLM solution capabilities.",
  },
];

const WHY = [
  "Expertise in enterprise legal tech solutions",
  "Advanced Provakil contract lifecycle management UK implementation capabilities",
  "End-to-end deployment and optimisation services",
  "UK-focused legal technology expertise",
  "Scalable legal workflow automation frameworks",
  "Long-term operational optimisation support",
];

const OUTCOMES = [
  "Faster contract approvals",
  "Improved legal visibility",
  "Better compliance management",
  "Reduced operational delays",
  "Enhanced contract governance",
  "Stronger legal workflow automation",
];

const FAQS = [
  {
    q: "What is Provakil used for?",
    a: "Provakil is an enterprise-grade contract lifecycle management software platform designed to improve legal operations, contract visibility, and workflow automation.",
  },
  {
    q: "Is Provakil suitable for enterprise legal teams?",
    a: "Yes, Provakil contract management software UK environments are designed for organisations managing high-volume legal operations and contract workflows.",
  },
  {
    q: "Does Provakil support contract automation?",
    a: "Yes, Provakil CLM solution environments include intelligent contract automation software capabilities for approvals, notifications, and workflow management.",
  },
  {
    q: "Does FCC provide implementation and support services?",
    a: "Yes, FCC provides implementation, optimisation, integration, and managed support services for Provakil contract lifecycle management UK environments.",
  },
  {
    q: "Is Provakil one of the best contract management software UK platforms?",
    a: "Yes, Provakil is designed to help organisations modernise legal operations through scalable legal contract management tools and intelligent workflow automation.",
  },
];

function ProvakilPage() {
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
        eyebrow="Lead Magnet · Legal AI"
        title="Legal AI Automation Playbook"
        description="How legal and compliance teams use Provakil to automate matter management, contracts and case intelligence."
        asset="Legal AI Automation Playbook"
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
            <ProductLogo src={productLogo} alt="Provakil" label="AI" />
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Modernise legal operations with <span className="italic text-brand-tint">intelligent</span> legal tech solutions UK.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Provakil is an enterprise-grade contract and legal operations platform designed to help organisations streamline legal workflows, automate contract management, and improve operational visibility through intelligent contract lifecycle management software.
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
              <img src={heroImg} alt="Provakil contract lifecycle management dashboard" width={1600} height={900} className="w-full h-auto" />
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
              Modern businesses require <span className="italic text-brand">scalable</span> legal tech solutions UK.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Legal and business operations teams manage increasing volumes of contracts, approvals, compliance workflows, and legal documentation across distributed environments.
            </p>
            <p>
              As an advanced contract lifecycle management software platform, Provakil enables organisations to improve legal efficiency, operational control, and contract governance through connected legal ecosystems.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Intelligent contract management",
                "Workflow automation",
                "Legal operations visibility",
                "Centralised legal documentation",
                "Real-time reporting and analytics",
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
          Where legal operations <span className="italic text-brand">slow down</span>.
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
          A strategic approach to <span className="italic text-brand">legal transformation</span>.
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
          A connected legal <span className="italic text-brand">operations ecosystem</span>.
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
          Trusted legal transformation across <span className="italic text-brand-tint">every sector</span>.
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
              The expertise to deliver <span className="italic text-brand">enterprise-grade</span> legal transformation.
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
              FCC helps organisations maximise the value of their Provakil investments through intelligent implementation and operational transformation strategies.
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
          Measurable results from <span className="italic text-brand">intelligent legal operations</span>.
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
        <span className="section-kicker text-brand-tint">Transform Legal Operations</span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Transform legal operations with <span className="italic text-brand-tint">intelligent contract lifecycle management software</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Improve legal visibility, contract governance, and workflow automation through scalable Provakil solutions.
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
          Common questions about <span className="italic text-brand">Provakil</span>.
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
