import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/client-2026/power-bi.jpg.asset.json";
const heroImg = heroAsset.url;
import futureLogo from "@/assets/future-logo.png.asset.json";
import { SiteNav } from "@/components/SiteNav";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";

export const Route = createFileRoute("/microsoft/power-bi")({
  head: () => ({
    meta: [
      { title: "Microsoft Power BI — Intelligent Business Intelligence & Data Analytics | FCC" },
      {
        name: "description",
        content:
          "Microsoft Power BI centralises reporting, dashboards, and analytics. FCC delivers Power BI consulting services London and business intelligence solutions UK across the UK and GCC.",
      },
      { property: "og:title", content: "Microsoft Power BI — Intelligent Business Intelligence & Data Analytics" },
      {
        property: "og:description",
        content:
          "Transform business data into actionable intelligence with scalable Power BI implementation services UK — dashboards, analytics and reporting delivered by FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: PowerBIPage,
});

const CHALLENGES = [
  {
    title: "Disconnected Reporting Systems",
    body:
      "Many organisations operate using fragmented spreadsheets, reporting systems, and operational databases that reduce visibility and decision-making efficiency. Without intelligent business intelligence tools, businesses struggle to maintain reporting consistency and operational insight.",
  },
  {
    title: "Limited Data Visibility",
    body:
      "Modern enterprises require scalable data visualisation software capable of centralising operational analytics, financial reporting, and enterprise performance visibility.",
  },
  {
    title: "Delayed Decision-Making",
    body:
      "Manual reporting environments reduce operational agility and limit access to real-time business intelligence. FCC delivers scalable real time dashboards England organisations can leverage to improve operational responsiveness.",
  },
  {
    title: "Complex Data Integration Requirements",
    body:
      "Businesses require intelligent analytics environments capable of integrating finance systems, ERP platforms, CRM environments, and operational databases. Through scalable Power BI implementation services UK, FCC helps organisations unify enterprise reporting ecosystems.",
  },
];

const APPROACH = [
  {
    title: "Discovery & Data Assessment",
    body:
      "We evaluate reporting systems, operational data environments, analytics workflows, and infrastructure requirements to identify transformation opportunities.",
  },
  {
    title: "Analytics Architecture & Planning",
    body:
      "Our experts design scalable Microsoft Power BI software ecosystems aligned with enterprise reporting requirements and operational visibility goals.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys reporting dashboards, analytics platforms, operational reporting environments, data integration frameworks, and enterprise analytics ecosystems through scalable Power BI consulting services London and UK-wide implementation frameworks.",
  },
  {
    title: "Training & Enablement",
    body:
      "Teams are trained to leverage reporting dashboards, operational analytics, forecasting tools, and data visualisation capabilities effectively.",
  },
  {
    title: "Managed Optimisation & Support",
    body:
      "FCC provides continuous optimisation, monitoring, and managed support services for enterprise Microsoft Power BI service environments.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Business Intelligence & Reporting",
    lede:
      "Microsoft Power BI helps organisations centralise reporting and improve operational visibility through scalable business intelligence tools and analytics ecosystems.",
    items: [
      "Real-time reporting dashboards",
      "Operational analytics",
      "Financial performance visibility",
      "KPI monitoring",
      "Enterprise reporting automation",
      "Forecasting and trend analysis",
    ],
  },
  {
    n: "02",
    title: "Real-Time Dashboards & Visualisation",
    lede:
      "Improve operational visibility through advanced data visualisation software and scalable analytics dashboards.",
    items: [
      "Interactive dashboards",
      "Real-time data visibility",
      "Visual analytics",
      "Performance monitoring",
      "Operational reporting",
    ],
  },
  {
    n: "03",
    title: "Data Analytics Platform Integration",
    lede:
      "Power BI Microsoft ecosystems help organisations unify operational data across ERP systems, CRM environments, finance platforms, and enterprise applications.",
    items: [
      "ERP analytics integration",
      "CRM reporting visibility",
      "Operational data synchronisation",
      "Cloud analytics connectivity",
      "Enterprise reporting automation",
    ],
  },
  {
    n: "04",
    title: "Finance & Operations Analytics",
    lede:
      "Improve enterprise reporting and operational forecasting through intelligent Power BI for finance and operations UK environments.",
    items: [
      "Financial analytics dashboards",
      "Operational forecasting",
      "Cash flow reporting",
      "Business performance visibility",
      "Executive reporting environments",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Retail",
    body:
      "Improve sales visibility, inventory analytics, and operational reporting through intelligent Microsoft Power BI environments.",
  },
  {
    name: "Financial Services",
    body:
      "Strengthen reporting accuracy, operational visibility, and financial forecasting using scalable business intelligence consulting UK ecosystems.",
  },
  {
    name: "Manufacturing",
    body:
      "Improve operational performance, supply chain analytics, and production visibility through intelligent reporting frameworks.",
  },
  {
    name: "Enterprise Organisations",
    body:
      "Modernise enterprise reporting environments through scalable data analytics platform and dashboard ecosystems.",
  },
];

const WHY = [
  "Expertise in enterprise Microsoft Power BI implementation",
  "Advanced analytics and reporting transformation capabilities",
  "End-to-end deployment and optimisation services",
  "UK-focused reporting and analytics expertise",
  "Scalable business intelligence ecosystems",
  "Long-term operational optimisation support",
];

const OUTCOMES = [
  "Improved reporting visibility",
  "Faster operational decision-making",
  "Better forecasting accuracy",
  "Enhanced operational analytics",
  "Real-time performance visibility",
  "Smarter enterprise reporting",
];

const FAQS = [
  {
    q: "What is Microsoft Power BI used for?",
    a: "Microsoft Power BI is an enterprise-grade data analytics platform designed to improve reporting visibility, operational analytics, dashboard creation, and enterprise decision-making.",
  },
  {
    q: "Does FCC provide Power BI consulting services London?",
    a: "Yes, FCC provides enterprise-grade Power BI consulting London, Power BI consulting services Greater London, Power BI services UK, and analytics implementation and optimisation services.",
  },
  {
    q: "What is Microsoft Power BI service?",
    a: "The Microsoft Power BI service is a cloud-based analytics platform used to create dashboards, automate reporting, and centralise enterprise analytics.",
  },
  {
    q: "Does Power BI support finance and operations reporting?",
    a: "Yes, Power BI for finance and operations UK environments help organisations improve operational forecasting and financial analytics visibility.",
  },
  {
    q: "Does FCC provide Power BI implementation services UK?",
    a: "Yes, FCC delivers scalable Power BI implementation services UK for organisations modernising reporting and analytics ecosystems.",
  },
];

function PowerBIPage() {
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
        eyebrow="Lead Magnet · Analytics"
        title="Power BI Analytics Playbook"
        description="Stand up trusted enterprise reporting — semantic models, governed datasets, workspace design and rollout strategy."
        asset="Power BI Analytics Playbook"
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
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-tint">Power BI · Microsoft</span>
              <span className="h-px w-10 bg-brand-tint/40" />
            </div>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Transform business data into <span className="italic text-brand-tint">actionable</span> intelligence with Microsoft Power BI.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Microsoft Power BI helps organisations centralise reporting, improve operational visibility, and accelerate decision-making through intelligent dashboards, analytics, and real-time reporting environments.
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
              <img src={heroImg} alt="Microsoft Power BI dashboards" width={1600} height={900} className="w-full h-auto" />
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
              Modern enterprises require <span className="italic text-brand">intelligent</span> business intelligence solutions UK.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>Today's organisations generate large volumes of operational, financial, customer, and performance data across multiple systems and business environments.</p>
            <p>Microsoft Power BI is an enterprise-grade data analytics platform designed to help organisations transform business data into actionable operational intelligence.</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Centralise reporting",
                "Build real-time dashboards",
                "Improve analytics visibility",
                "Automate operational reporting",
                "Improve forecasting accuracy",
                "Improve enterprise decision-making",
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
          Where enterprise reporting <span className="italic text-brand">falls short</span>.
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
          A strategic approach to <span className="italic text-brand">BI transformation</span>.
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
          A connected analytics <span className="italic text-brand">reporting ecosystem</span>.
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
          Analytics transformation across <span className="italic text-brand-tint">every sector</span>.
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
              The expertise to deliver <span className="italic text-brand">enterprise-grade</span> BI transformation.
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
              FCC helps organisations maximise the value of their Power BI Microsoft investments through intelligent implementation and enterprise analytics strategies.
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
          Measurable results from <span className="italic text-brand">intelligent analytics</span>.
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
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-tint">Transform Business Intelligence</span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Transform business intelligence with <span className="italic text-brand-tint">Microsoft Power BI</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Improve reporting visibility, operational analytics, and enterprise decision-making through intelligent Microsoft reporting ecosystems.
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
          Common questions about <span className="italic text-brand">Power BI</span>.
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
