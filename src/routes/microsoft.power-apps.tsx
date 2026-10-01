import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/partners/power-apps/dashboard.webp";
const productLogo = "/partners/power-apps/logo.png?v=3";
import { ProductLogo } from "@/components/ProductLogo";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";
import { OutcomeInfographic } from "@/components/OutcomeInfographic";
import { IndustryInfographic } from "@/components/IndustryInfographic";

export const Route = createFileRoute("/microsoft/power-apps")({
  head: () => ({
    meta: [
      { title: "Microsoft Power Apps — Intelligent Low-Code Application Development | FCC" },
      {
        name: "description",
        content:
          "Microsoft Power Apps low-code development for scalable business applications. FCC delivers Power Apps development UK with consulting, implementation, optimisation and managed support.",
      },
      { property: "og:title", content: "Microsoft Power Apps — Intelligent Low-Code Application Development" },
      {
        property: "og:description",
        content:
          "Accelerate digital innovation with intelligent Microsoft Power Platform ecosystems — Power Apps development UK delivered by FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: PowerAppsPage,
});

const CHALLENGES = [
  {
    title: "Slow Application Development Cycles",
    body:
      "Traditional software development environments often delay operational transformation initiatives and increase implementation complexity. Modern organisations require scalable low code app development environments capable of accelerating operational innovation.",
  },
  {
    title: "Manual Business Processes",
    body:
      "Disconnected workflows and manual operations reduce productivity, operational visibility, and organisational agility. Through intelligent Power Platform apps, organisations can automate processes and improve enterprise-wide efficiency.",
  },
  {
    title: "Limited Operational Flexibility",
    body:
      "Businesses require agile operational systems capable of adapting quickly to changing workflows, customer requirements, and operational demands. FCC helps organisations modernise operations through scalable Microsoft Power Platform ecosystems.",
  },
  {
    title: "Complex Legacy Environments",
    body:
      "Many organisations struggle to integrate legacy systems and operational workflows into modern digital ecosystems. Through intelligent Power Apps Microsoft environments, businesses can modernise workflows without large-scale redevelopment projects.",
  },
];

const APPROACH = [
  {
    title: "Discovery & Workflow Assessment",
    body:
      "We evaluate operational processes, workflow inefficiencies, reporting environments, and infrastructure requirements to identify transformation opportunities.",
  },
  {
    title: "Solution Architecture & Planning",
    body:
      "Our experts design scalable Microsoft Power Apps ecosystems aligned with operational requirements and enterprise growth goals.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys custom operational applications, workflow automation environments, business process management systems, reporting dashboards, and enterprise integrations through scalable Power Platform apps implementation frameworks.",
  },
  {
    title: "Training & Enablement",
    body:
      "Teams are trained to leverage workflow automation, reporting environments, and operational applications effectively.",
  },
  {
    title: "Managed Optimisation & Support",
    body:
      "FCC provides continuous optimisation, monitoring, and managed support services for enterprise Microsoft Power Platform environments.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Custom Business Application Development",
    lede:
      "Microsoft Power Apps helps organisations create secure and scalable operational applications through intelligent low code app development environments.",
    items: [
      "Rapid application development",
      "Custom operational apps",
      "Workflow automation",
      "Mobile business applications",
      "Process visibility",
      "Operational dashboards",
    ],
  },
  {
    n: "02",
    title: "Workflow Automation & Process Optimisation",
    lede:
      "Improve operational efficiency through intelligent Power Platform apps and automated business workflows.",
    items: [
      "Workflow automation",
      "Process approvals",
      "Task management",
      "Operational notifications",
      "Business process optimisation",
    ],
  },
  {
    n: "03",
    title: "Enterprise Integration & Connectivity",
    lede:
      "Power Apps Microsoft environments help organisations integrate operational systems, Microsoft ecosystems, and enterprise applications into one connected digital framework.",
    items: [
      "Microsoft ecosystem integration",
      "ERP and CRM connectivity",
      "Cloud application integration",
      "Data synchronisation",
      "Operational reporting visibility",
    ],
  },
  {
    n: "04",
    title: "Low-Code Innovation Environments",
    lede:
      "Accelerate digital transformation through scalable low code development platforms designed for modern enterprise operations.",
    items: [
      "Agile application development",
      "Reduced development complexity",
      "Faster deployment cycles",
      "Enterprise scalability",
      "Secure cloud environments",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Retail",
    body:
      "Improve operational workflows, inventory processes, and reporting visibility through intelligent Microsoft Power Apps environments.",
  },
  {
    name: "Financial Services",
    body:
      "Automate operational approvals, reporting workflows, and customer engagement processes through scalable low-code ecosystems.",
  },
  {
    name: "Healthcare",
    body:
      "Improve patient operations, workflow automation, and process visibility through secure Power Apps Microsoft frameworks.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Modernise operational environments and accelerate digital transformation through scalable Microsoft Power Platform ecosystems.",
  },
];

const WHY = [
  "Expertise in enterprise Power Apps development UK",
  "Advanced low-code transformation capabilities",
  "End-to-end deployment and optimisation services",
  "UK-focused Microsoft implementation expertise",
  "Scalable operational application ecosystems",
  "Long-term operational optimisation support",
];

const OUTCOMES = [
  "Faster application deployment",
  "Improved workflow automation",
  "Reduced operational inefficiencies",
  "Better process visibility",
  "Enhanced operational agility",
  "Scalable digital transformation",
];

const FAQS = [
  {
    q: "What is Microsoft Power Apps used for?",
    a: "Microsoft Power Apps is a low-code development platform used to create business applications, automate workflows, and improve operational efficiency.",
  },
  {
    q: "Does FCC provide Power Apps development UK services?",
    a: "Yes, FCC delivers enterprise-grade Power Apps development UK services including implementation, optimisation, integration, and managed support.",
  },
  {
    q: "What is Microsoft Power Platform?",
    a: "Microsoft Power Platform is a connected ecosystem of low-code tools designed to help organisations automate workflows, create applications, and improve operational visibility.",
  },
  {
    q: "What are low code development platforms?",
    a: "Low code development platforms allow organisations to build operational applications and automate workflows with reduced coding complexity and faster deployment timelines.",
  },
  {
    q: "Is FCC a Microsoft implementation partner UK?",
    a: "Yes, FCC operates as a trusted Microsoft implementation partner UK delivering scalable Microsoft transformation services.",
  },
];

function PowerAppsPage() {
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
        eyebrow="Lead Magnet · Low-Code"
        title="Power Platform Adoption Blueprint"
        description="Build a scalable low-code practice with Power Apps, Power Automate and Dataverse — governance, CoE, security and reuse patterns."
        asset="Power Platform Adoption Blueprint"
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
            <ProductLogo src={productLogo} alt="Power Apps" label="Microsoft" />
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Accelerate digital innovation with <span className="italic text-brand-tint">Microsoft Power Apps</span>.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Microsoft Power Apps helps organisations build scalable business applications, automate workflows, and modernise operational processes through intelligent low-code development environments.
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
              <img src={heroImg} alt="Microsoft Power Apps low-code development" width={1600} height={900} className="w-full h-auto" />
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
              Modern businesses require <span className="italic text-brand">agile</span> low-code development platforms.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>Today's organisations need faster, more flexible ways to build operational applications, automate workflows, and improve process visibility without relying on lengthy development cycles.</p>
            <p>Microsoft Power Platform enables organisations to rapidly create secure and scalable business applications through intelligent low code development platforms designed for modern enterprise environments.</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Build custom operational applications",
                "Automate business workflows",
                "Improve operational visibility",
                "Reduce manual processes",
                "Accelerate digital transformation",
                "Improve collaboration across teams",
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
          Where traditional development <span className="italic text-brand">falls short</span>.
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
          A strategic approach to <span className="italic text-brand">low-code transformation</span>.
        </h2>
        <ApproachInfographic className="mt-14" layout="spine" steps={APPROACH} />
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
          A connected low-code <span className="italic text-brand">application ecosystem</span>.
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
          Low-code transformation across <span className="italic text-brand-tint">every sector</span>.
        </h2>
        <IndustryInfographic className="mt-14" layout="cascade" items={INDUSTRIES.map((ind) => ({ title: ind.name, body: ind.body }))} />
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
              The expertise to deliver <span className="italic text-brand">enterprise-grade</span> Power Apps transformation.
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
              As a trusted Microsoft implementation partner UK, FCC helps organisations maximise the value of their Microsoft Power Apps investments through intelligent implementation and operational transformation strategies.
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
          Measurable results from <span className="italic text-brand">intelligent low-code</span>.
        </h2>
                <OutcomeInfographic className="mt-14" layout="signal" items={OUTCOMES} />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink text-white py-20 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-30" style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 70%, transparent), transparent 70%)", filter: "blur(40px)" }} />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <span className="section-kicker text-brand-tint">Accelerate Operational Innovation</span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Accelerate operational innovation with <span className="italic text-brand-tint">Microsoft Power Apps</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Improve workflow automation, operational visibility, and business agility through intelligent low-code application ecosystems.
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
          Common questions about <span className="italic text-brand">Power Apps</span>.
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
