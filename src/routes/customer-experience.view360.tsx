import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/partners/view360/dashboard.png";
const productLogo = "/partners/view360/logo.png?v=5";
import { ProductLogo } from "@/components/ProductLogo";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";
import { OutcomeInfographic } from "@/components/OutcomeInfographic";
import { IndustryInfographic } from "@/components/IndustryInfographic";

export const Route = createFileRoute("/customer-experience/view360")({
  head: () => ({
    meta: [
      { title: "View360 — Intelligent Customer 360 View Platform | FCC" },
      {
        name: "description",
        content:
          "View360 is an enterprise-grade customer 360 view platform. FCC delivers View360 implementation, integration, and managed optimisation across the UK.",
      },
      { property: "og:title", content: "View360 — Intelligent Customer 360 View Platform" },
      {
        property: "og:description",
        content:
          "Transform customer engagement with intelligent journey tracking, 360 visibility, and omnichannel analytics — delivered by FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: View360Page,
});

const CHALLENGES = [
  {
    title: "Fragmented Customer Communication",
    body:
      "Many organisations operate with disconnected communication channels that limit customer visibility and operational responsiveness. Without intelligent customer journey tracking software, businesses struggle to understand customer interactions and engagement behaviour across multiple touchpoints.",
  },
  {
    title: "Limited Customer Visibility",
    body:
      "Modern organisations require scalable customer 360 view platform environments capable of centralising communication, engagement history, and operational insights. View360 helps businesses create connected customer ecosystems through intelligent communication visibility and automation.",
  },
  {
    title: "Disconnected Data Systems",
    body:
      "Disconnected systems and operational silos reduce customer visibility and limit decision-making efficiency. Through advanced customer data integration tools, View360 helps organisations unify customer interactions and operational data into one connected environment.",
  },
  {
    title: "Limited Engagement Analytics",
    body:
      "Businesses require intelligent customer behaviour analytics software capable of tracking customer engagement trends, operational performance, and communication effectiveness in real time.",
  },
];

const APPROACH = [
  {
    title: "Discovery & Customer Journey Assessment",
    body:
      "We evaluate communication workflows, engagement channels, and operational touchpoints to identify opportunities for optimisation through intelligent customer journey tracking software.",
  },
  {
    title: "Solution Architecture & Planning",
    body:
      "Our experts design scalable customer 360 view platform environments aligned with customer engagement objectives and operational requirements.",
  },
  {
    title: "Integration & Deployment",
    body:
      "FCC deploys View360 integrated with CRM systems, communication platforms, and enterprise environments using advanced customer data integration tools. The platform creates a connected customer data platform 360 view ecosystem that improves operational visibility and customer intelligence.",
  },
  {
    title: "Training & Enablement",
    body:
      "Teams are trained to leverage engagement analytics, workflow automation, and reporting capabilities effectively across customer engagement environments.",
  },
  {
    title: "Managed Optimisation & Support",
    body:
      "FCC provides continuous optimisation, monitoring, and support services to maximise the value of your customer 360 view platform environment.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Omni-Channel Customer Engagement",
    lede:
      "View360 helps organisations centralise customer communication across voice, email, WhatsApp, social media, CRM environments, and digital support channels.",
    items: [
      "Unified customer communication",
      "Multi-channel visibility",
      "Automated engagement workflows",
      "Real-time interaction tracking",
    ],
  },
  {
    n: "02",
    title: "Customer 360 Visibility",
    lede:
      "View360 functions as an intelligent customer 360 view platform designed to improve visibility into customer interactions, behaviours, and operational workflows.",
    items: [
      "Centralised customer profiles",
      "Interaction history visibility",
      "Customer lifecycle tracking",
      "Operational engagement insights",
    ],
  },
  {
    n: "03",
    title: "Customer Data Integration",
    lede:
      "Through advanced customer data integration tools, View360 connects communication systems, CRM platforms, and operational applications into one unified ecosystem.",
    items: [
      "CRM integrations",
      "Communication platform integration",
      "Data synchronisation",
      "Real-time engagement visibility",
    ],
  },
  {
    n: "04",
    title: "Customer Analytics & Reporting",
    lede:
      "Improve decision-making through intelligent customer behaviour analytics software and engagement reporting capabilities.",
    items: [
      "Customer analytics dashboards",
      "Real-time reporting",
      "Engagement trend analysis",
      "SLA and operational visibility",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Retail",
    body:
      "Improve customer engagement visibility, operational responsiveness, and retention through scalable customer journey tracking software and connected communication ecosystems.",
  },
  {
    name: "Financial Services",
    body:
      "Strengthen customer communication, operational visibility, and engagement consistency through intelligent customer 360 view platform environments.",
  },
  {
    name: "Telecom",
    body:
      "Track engagement performance and improve customer support operations using advanced customer behaviour analytics software.",
  },
  {
    name: "Healthcare",
    body:
      "Improve patient engagement visibility and communication management through connected customer data platform 360 view systems.",
  },
];

const WHY = [
  "Expertise in enterprise customer engagement ecosystems",
  "Advanced implementation capabilities for View360",
  "End-to-end deployment and optimisation services",
  "UK-focused customer experience expertise",
  "Scalable customer journey tracking software environments",
  "Long-term customer engagement transformation support",
];

const OUTCOMES = [
  "Improved customer engagement visibility",
  "Better customer journey insights",
  "Faster operational responsiveness",
  "Enhanced customer communication",
  "Smarter customer decision-making",
  "Improved operational efficiency",
];

const FAQS = [
  {
    q: "What is View360 used for?",
    a: "View360 is an enterprise-grade customer journey tracking software platform designed to centralise communication, improve customer visibility, and optimise engagement workflows.",
  },
  {
    q: "Is View360 a customer 360 view platform?",
    a: "Yes, View360 functions as a scalable customer 360 view platform that centralises customer interactions, communication history, and operational engagement data.",
  },
  {
    q: "Does View360 support customer analytics?",
    a: "Yes, View360 includes advanced customer behaviour analytics software capabilities designed to improve operational visibility and customer engagement analysis.",
  },
  {
    q: "Can View360 integrate with existing systems?",
    a: "Yes, View360 integrates with CRM systems and enterprise applications using intelligent customer data integration tools.",
  },
  {
    q: "Does FCC provide implementation and support services?",
    a: "Yes, FCC provides deployment, optimisation, training, and managed support services for View360 environments.",
  },
];

function View360Page() {
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
        eyebrow="Lead Magnet · CX Analytics"
        title="Customer Journey Analytics Playbook"
        description="Turn fragmented touchpoint data into a single, actionable view of the customer journey with View360."
        asset="Customer Journey Analytics Playbook"
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
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <ProductLogo src={productLogo} alt="View360" label="Customer Experience" plate />
            <h1 className="font-sans text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Transform customer engagement with an{" "}
              <span className="italic text-brand-tint">intelligent</span> customer 360 view platform.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              View360 is an enterprise-grade customer journey tracking software platform designed to
              centralise communication, improve customer visibility, and optimise engagement
              workflows. FCC delivers View360 implementation, integration, and managed optimisation
              across the UK.
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
              <img
                src={heroImg}
                alt="View360 customer 360 analytics dashboard"
                width={1920}
                height={1080}
                className="w-full h-auto"
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
              Modern engagement requires{" "}
              <span className="italic text-brand">intelligent</span> customer journey tracking.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Customers engage with organisations across multiple digital and operational
              touchpoints. Without centralised visibility into interactions, businesses struggle to
              deliver connected customer experiences and actionable engagement insights.
            </p>
            <p>
              View360 is an advanced customer journey tracking software and enterprise-grade customer
              360 view platform designed to unify customer communication, automate workflows, and
              improve customer intelligence through connected engagement ecosystems.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Centralise customer interactions",
                "Improve engagement visibility",
                "Track customer journeys in real time",
                "Integrate customer communication channels",
                "Improve operational responsiveness",
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
          Where customer visibility{" "}
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
          A strategic path to{" "}
          <span className="italic text-brand">customer engagement transformation</span>.
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
          Connected visibility across every{" "}
          <span className="italic text-brand">customer touchpoint</span>.
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
          Delivering connected visibility across{" "}
          <span className="italic text-brand-tint">every sector</span>.
        </h2>
        <IndustryInfographic className="mt-14" layout="feature" items={INDUSTRIES.map((ind) => ({ title: ind.name, body: ind.body }))} />
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
              <span className="italic text-brand">enterprise-grade</span> customer engagement.
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
              FCC helps organisations maximise the value of their View360 customer experience
              investments through intelligent implementation and operational optimisation.
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
          <span className="italic text-brand">connected customer intelligence</span>.
        </h2>
                <OutcomeInfographic className="mt-14" layout="meter" items={OUTCOMES} />
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
          Transform Customer Engagement
        </span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Ready to unlock intelligent{" "}
          <span className="italic text-brand-tint">customer 360 visibility</span>?
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Improve customer visibility, engagement analytics, and operational responsiveness through
          scalable View360 solutions from FCC.
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
          <span className="section-kicker text-brand">
            FAQ
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight">
          Common questions about <span className="italic text-brand">View360</span>.
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
