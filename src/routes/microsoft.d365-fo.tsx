import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/client-2026/dynamics-365-finance-operations.jpg.asset.json";
const heroImg = heroAsset.url;
import futureLogo from "@/assets/future-logo.png.asset.json";
import { SiteNav } from "@/components/SiteNav";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";

export const Route = createFileRoute("/microsoft/d365-fo")({
  head: () => ({
    meta: [
      { title: "Dynamics 365 Finance & Operations — Intelligent Financial Management Software | FCC" },
      {
        name: "description",
        content:
          "Dynamics 365 Finance and Operations modernises financial processes, ERP, and enterprise workflows. FCC delivers Dynamics 365 implementation UK services across the UK and GCC.",
      },
      { property: "og:title", content: "Dynamics 365 Finance & Operations — Intelligent Financial Management Software" },
      {
        property: "og:description",
        content:
          "Transform enterprise operations with scalable financial management software, ERP modernisation, and managed Dynamics 365 implementation UK services from FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: D365FOPage,
});

const CHALLENGES = [
  {
    title: "Disconnected Financial Systems",
    body:
      "Many organisations operate using disconnected systems that reduce reporting visibility, increase manual processes, and limit operational scalability. Without intelligent financial management software, businesses struggle to maintain operational efficiency and real-time financial control.",
  },
  {
    title: "Limited Operational Visibility",
    body:
      "Businesses require connected enterprise systems capable of improving visibility across finance, operations, procurement, and supply chain environments. Finance and operations Dynamics 365 environments help organisations centralise operational data and improve enterprise-wide decision-making.",
  },
  {
    title: "Complex Enterprise Workflows",
    body:
      "Disconnected workflows and manual reporting reduce productivity, operational agility, and financial accuracy. Through scalable Dynamics 365 operations and finance capabilities, organisations can improve automation and operational performance.",
  },
  {
    title: "Digital Transformation Challenges",
    body:
      "Modern enterprises require experienced Dynamics 365 implementation UK specialists capable of delivering scalable Microsoft transformation projects aligned with operational goals.",
  },
];

const APPROACH = [
  {
    title: "Discovery & Business Assessment",
    body:
      "We evaluate operational environments, finance processes, reporting systems, and infrastructure requirements to identify transformation opportunities.",
  },
  {
    title: "Solution Architecture & Planning",
    body:
      "Our experts design scalable Microsoft Dynamics 365 Finance and Operations environments aligned with enterprise objectives and operational requirements. As an experienced Dynamics 365 implementation partner Greater London, FCC delivers intelligent transformation strategies designed for modern enterprise environments.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys ERP systems, finance automation workflows, reporting environments, operational visibility platforms, and enterprise business applications through scalable Dynamics 365 implementation UK frameworks.",
  },
  {
    title: "Training & Enablement",
    body:
      "Teams are trained to leverage reporting, workflow automation, operational visibility, and analytics capabilities effectively.",
  },
  {
    title: "Managed Optimisation & Support",
    body:
      "FCC provides continuous optimisation, monitoring, and managed support services for enterprise Dynamics 365 for Finance and Operations environments.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Financial Management & Reporting",
    lede:
      "Financial management software capabilities within Dynamics 365 help organisations centralise reporting, automate finance operations, and improve enterprise-wide visibility.",
    items: [
      "Financial reporting automation",
      "Budget management",
      "Cash flow visibility",
      "Expense tracking",
      "Compliance reporting",
      "Operational analytics",
    ],
  },
  {
    n: "02",
    title: "Operations & Supply Chain Management",
    lede:
      "Dynamics 365 operations and finance environments help organisations improve operational efficiency and enterprise coordination.",
    items: [
      "Supply chain visibility",
      "Procurement management",
      "Inventory monitoring",
      "Workflow automation",
      "Operational reporting",
    ],
  },
  {
    n: "03",
    title: "Enterprise Automation & Analytics",
    lede:
      "Improve operational agility through intelligent automation and analytics environments within Microsoft Dynamics 365 for Finance and Operations.",
    items: [
      "Workflow automation",
      "Business intelligence dashboards",
      "Predictive reporting",
      "Operational analytics",
      "Real-time visibility",
    ],
  },
  {
    n: "04",
    title: "Cloud-Based ERP Transformation",
    lede:
      "Dynamics 365 for Finance and Operations helps organisations modernise enterprise infrastructure through scalable cloud-based ERP ecosystems.",
    items: [
      "Cloud ERP deployment",
      "Secure operational environments",
      "Enterprise scalability",
      "Remote operational access",
      "Integrated Microsoft ecosystem connectivity",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Retail",
    body:
      "Improve inventory visibility, operational reporting, and financial performance through intelligent financial management software and ERP modernisation.",
  },
  {
    name: "Financial Services",
    body:
      "Strengthen reporting accuracy, compliance visibility, and operational governance using scalable finance and operations Dynamics 365 environments.",
  },
  {
    name: "Manufacturing",
    body:
      "Improve production planning, procurement workflows, and operational efficiency through intelligent Dynamics 365 operations and finance systems.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Modernise enterprise infrastructure and improve operational agility through connected Microsoft Dynamics 365 Finance and Operations ecosystems.",
  },
];

const WHY = [
  "Expertise in enterprise Dynamics 365 implementation UK",
  "Advanced Microsoft ERP transformation capabilities",
  "End-to-end deployment and optimisation services",
  "UK-focused enterprise transformation expertise",
  "Scalable financial management software environments",
  "Long-term operational optimisation support",
];

const OUTCOMES = [
  "Improved financial visibility",
  "Better operational efficiency",
  "Faster reporting and analytics",
  "Enhanced compliance readiness",
  "Stronger workflow automation",
  "Scalable enterprise transformation",
];

const FAQS = [
  {
    q: "What is Dynamics 365 Finance and Operations used for?",
    a: "Dynamics 365 Finance and Operations is enterprise-grade financial management software designed to improve finance operations, reporting visibility, workflow automation, and operational efficiency.",
  },
  {
    q: "Does FCC provide Dynamics 365 implementation UK services?",
    a: "Yes, FCC provides consulting, deployment, optimisation, and managed Dynamics 365 implementation UK services for enterprise organisations.",
  },
  {
    q: "Is FCC a Dynamics 365 implementation partner Greater London?",
    a: "Yes, FCC provides enterprise-grade Dynamics 365 implementation partner Greater London services for organisations across the UK.",
  },
  {
    q: "What is Microsoft Dynamics 365 for Finance and Operations?",
    a: "Microsoft Dynamics 365 for Finance and Operations is a cloud-based ERP platform designed to improve financial visibility, operational management, and enterprise scalability.",
  },
  {
    q: "Can Dynamics 365 improve operational efficiency?",
    a: "Yes, Dynamics 365 for operations and finance helps organisations automate workflows, centralise reporting, and improve operational visibility.",
  },
];

function D365FOPage() {
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
        eyebrow="Lead Magnet · Enterprise ERP"
        title="Dynamics 365 Finance & Operations Modernisation Guide"
        description="How enterprises move off legacy ERP onto D365 Finance & Operations — phasing, integration, change management and measurable outcomes."
        asset="Dynamics 365 Finance & Operations Modernisation Guide"
      />
      <WhyFCC />
      <Outcomes />
      <CTA />
      <Faq />
      <Footer />
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
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-tint">Dynamics 365 F&O · Microsoft</span>
              <span className="h-px w-10 bg-brand-tint/40" />
            </div>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Transform enterprise operations with <span className="italic text-brand-tint">intelligent</span> financial management software.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Dynamics 365 Finance and Operations helps organisations modernise financial processes, improve operational visibility, and accelerate enterprise growth through intelligent automation and connected business ecosystems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:hello@fcc.com"
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
              <img src={heroImg} alt="Dynamics 365 Finance and Operations dashboard" width={1600} height={900} className="w-full h-auto" />
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
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">Overview</span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
              Modern enterprises require <span className="italic text-brand">intelligent</span> financial management software.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>Today's organisations require scalable digital ecosystems capable of improving financial visibility, operational efficiency, reporting accuracy, and enterprise-wide decision-making.</p>
            <p>Microsoft Dynamics 365 Finance and Operations helps organisations integrate finance, operations, supply chain, procurement, reporting, and business analytics into one intelligent environment.</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Improve financial visibility",
                "Streamline operational workflows",
                "Centralise reporting",
                "Automate finance processes",
                "Improve compliance and governance",
                "Strengthen enterprise scalability",
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
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">Business Challenges</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          Where enterprise finance <span className="italic text-brand">slows down</span>.
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
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">FCC Approach</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          A strategic approach to <span className="italic text-brand">enterprise transformation</span>.
        </h2>
        <div className="mt-14 relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ink/10 hidden md:block" />
          <ol className="space-y-10">
            {APPROACH.map((step, i) => (
              <li key={step.title} className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3 flex items-center gap-4">
                  <div className="size-8 rounded-full bg-brand text-white grid place-items-center font-mono text-xs relative z-10">{String(i + 1).padStart(2, "0")}</div>
                  <span className="font-sans text-lg text-ink">{step.title}</span>
                </div>
                <div className="md:col-span-9">
                  <p className="text-ink-soft leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="bg-brand-wash py-20 lg:py-16 border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">Core Capabilities</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          A connected enterprise <span className="italic text-brand">finance ecosystem</span>.
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
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-tint">Industry Use Cases</span>
          <span className="h-px w-10 bg-brand-tint/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
          Enterprise transformation across <span className="italic text-brand-tint">every sector</span>.
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
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">Why FCC</span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
              The expertise to deliver <span className="italic text-brand">enterprise-grade</span> ERP transformation.
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
              FCC helps organisations maximise the value of their Dynamics 365 for Finance and Operations investments through intelligent implementation and enterprise transformation strategies.
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
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">Business Outcomes</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          Measurable results from <span className="italic text-brand">intelligent ERP</span>.
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
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-tint">Transform Enterprise Operations</span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Transform enterprise operations with <span className="italic text-brand-tint">intelligent financial management software</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Accelerate operational efficiency and financial visibility through scalable Dynamics 365 implementation UK services.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@fcc.com"
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
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">FAQ</span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight">
          Common questions about <span className="italic text-brand">Dynamics 365 F&O</span>.
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

function Footer() {
  return (
    <footer className="bg-ink text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center">
            <img src={futureLogo.url} alt="Future" width={140} height={36} className="h-8 w-auto" />
          </div>
          <p className="mt-4 max-w-xs">Engineering intelligent digital transformation for modern enterprises across the UK and GCC.</p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/customer-experience/xebo" className="hover:text-white">Xebo</Link></li>
            <li><Link to="/customer-experience/view360" className="hover:text-white">View360</Link></li>
            <li><Link to="/cybersecurity/threatdown" className="hover:text-white">ThreatDown</Link></li>
            <li><Link to="/cybersecurity/barracuda" className="hover:text-white">Barracuda</Link></li>
            <li><Link to="/cybersecurity/microsoft-security" className="hover:text-white">Microsoft Security</Link></li>
            <li><Link to="/cybersecurity/firecompass" className="hover:text-white">FireCompass</Link></li>
            <li><Link to="/ai/dune-dynamics" className="hover:text-white">Dune Dynamics</Link></li>
            <li><Link to="/ai/provakil" className="hover:text-white">Provakil</Link></li>
            <li><Link to="/microsoft/d365-fo" className="hover:text-white">D365 Finance & Operations</Link></li>
            <li><Link to="/microsoft/d365-crm" className="hover:text-white">D365 CRM</Link></li>
            <li><Link to="/microsoft/d365-bc" className="hover:text-white">D365 Business Central</Link></li>
            <li><Link to="/microsoft/power-bi" className="hover:text-white">Power BI</Link></li>
            <li><Link to="/microsoft/power-apps" className="hover:text-white">Power Apps</Link></li>
            <li><Link to="/microsoft/azure" className="hover:text-white">Azure</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">Contact</div>
          <p>hello@fcc.example</p>
          <p className="mt-1">United Kingdom · GCC</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-white/40">© {new Date().getFullYear()} Future Communications Company. All rights reserved.</div>
      </div>
    </footer>
  );
}
