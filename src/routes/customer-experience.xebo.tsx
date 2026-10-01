import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/partners/xebo/dashboard.jpeg";
const productLogo = "/partners/xebo/logo.png";
import { ProductLogo } from "@/components/ProductLogo";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";
import { OutcomeInfographic } from "@/components/OutcomeInfographic";
import { IndustryInfographic } from "@/components/IndustryInfographic";

export const Route = createFileRoute("/customer-experience/xebo")({
  head: () => ({
    meta: [
      { title: "Xebo — AI-Powered Customer Experience Management Software | FCC" },
      {
        name: "description",
        content:
          "Xebo is an AI-powered customer experience management software platform. FCC delivers Xebo implementation, integration, and managed optimisation across the UK.",
      },
      { property: "og:title", content: "Xebo — Customer Experience Management Software" },
      {
        property: "og:description",
        content:
          "Transform customer engagement with intelligent feedback, voice of customer analytics, and journey visibility — delivered by FCC.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: XeboPage,
});

const CHALLENGES = [
  {
    title: "Disconnected Customer Feedback Processes",
    body:
      "Many organisations rely on fragmented systems that limit visibility into customer experiences and engagement performance. Without intelligent customer feedback software, businesses struggle to identify service gaps, operational inefficiencies, and dissatisfaction trends.",
  },
  {
    title: "Limited Customer Journey Visibility",
    body:
      "Modern organisations require scalable customer experience solutions capable of tracking engagement across digital, physical, and support channels. Xebo helps centralise customer journey insights through intelligent analytics and automation.",
  },
  {
    title: "Manual Feedback Management Systems",
    body:
      "Traditional survey systems and disconnected reporting tools reduce operational efficiency and limit real-time responsiveness. The Xebo feedback platform automates engagement tracking and improves customer feedback management.",
  },
  {
    title: "Inconsistent Experience Across Channels",
    body:
      "Businesses require enterprise-grade customer experience management software capable of improving engagement consistency across every customer touchpoint.",
  },
];

const APPROACH = [
  {
    title: "Discovery & CX Assessment",
    body:
      "We evaluate customer engagement workflows, support systems, and communication channels to identify operational improvement opportunities and align Xebo to your CX goals.",
  },
  {
    title: "Solution Architecture & Planning",
    body:
      "Our experts design scalable customer feedback management frameworks aligned with operational requirements and customer engagement objectives.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys the Xebo customer experience platform across CRM environments, support systems, communication platforms, and operational workflows.",
  },
  {
    title: "Training & Enablement",
    body:
      "Teams are trained to leverage customer feedback software capabilities, engagement analytics, and automated reporting workflows effectively.",
  },
  {
    title: "Managed Optimisation & Support",
    body:
      "FCC provides continuous optimisation, monitoring, and support to maximise the performance of your Xebo customer experience ecosystem.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Real-Time Customer Feedback Management",
    lede:
      "Capture, manage, and analyse customer interactions through intelligent customer feedback software capabilities.",
    items: [
      "Real-time survey management",
      "Omnichannel feedback collection",
      "Automated response tracking",
      "Engagement analytics dashboards",
    ],
  },
  {
    n: "02",
    title: "Voice of Customer Analytics",
    lede:
      "An intelligent voice of customer platform that captures sentiment and engagement insights across multiple channels.",
    items: [
      "Customer sentiment analysis",
      "Journey analytics",
      "Experience tracking",
      "Behavioural insights",
    ],
  },
  {
    n: "03",
    title: "Customer Journey Visibility",
    lede:
      "Track customer interactions and engagement patterns across every touchpoint with the Xebo CX platform.",
    items: [
      "Customer journey mapping",
      "Experience analytics",
      "Touchpoint visibility",
      "Real-time customer insights",
    ],
  },
  {
    n: "04",
    title: "Experience Analytics & Reporting",
    lede:
      "Gain actionable insights through advanced Xebo CX software analytics and reporting capabilities.",
    items: [
      "CX analytics dashboards",
      "Real-time reporting",
      "Customer satisfaction analysis",
      "Operational visibility",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Retail",
    body:
      "Improve customer retention, engagement visibility, and operational responsiveness through scalable CX software and intelligent feedback analytics.",
  },
  {
    name: "Financial Services",
    body:
      "Strengthen customer communication, service visibility, and operational consistency through enterprise-grade CX solutions.",
  },
  {
    name: "Telecom",
    body:
      "Track engagement performance and improve customer satisfaction using advanced customer feedback software and journey analytics.",
  },
  {
    name: "Healthcare",
    body:
      "Enhance patient engagement and improve communication visibility through intelligent voice of customer capabilities.",
  },
];

const WHY = [
  "Expertise in enterprise customer experience solutions",
  "Advanced implementation capabilities for Xebo",
  "End-to-end deployment and managed optimisation services",
  "UK-focused customer engagement expertise",
  "Scalable customer experience management frameworks",
  "Long-term customer experience transformation support",
];

const OUTCOMES = [
  "Improved customer satisfaction",
  "Better engagement visibility",
  "Faster operational responsiveness",
  "Stronger customer retention",
  "Real-time customer intelligence",
  "Smarter engagement decision-making",
];

const FAQS = [
  {
    q: "What is Xebo used for?",
    a: "Xebo is an AI-powered customer experience management software platform used for customer feedback management, engagement analytics, and customer journey optimisation.",
  },
  {
    q: "Is Xebo a voice of customer platform?",
    a: "Yes, Xebo functions as an intelligent voice of customer platform designed to capture customer sentiment, engagement insights, and operational feedback.",
  },
  {
    q: "Can Xebo integrate with existing systems?",
    a: "Yes, the Xebo CX software environment integrates with CRM systems, communication platforms, and enterprise applications.",
  },
  {
    q: "Does FCC provide implementation and support services?",
    a: "Yes, FCC provides deployment, integration, optimisation, and managed support services for the Xebo customer experience platform.",
  },
  {
    q: "How does Xebo improve customer engagement?",
    a: "Through intelligent customer feedback software, analytics, and automation capabilities, Xebo helps organisations improve engagement visibility and customer satisfaction.",
  },
];

function XeboPage() {
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
        eyebrow="Lead Magnet · CX Programme"
        title="Voice of Customer Programme Toolkit"
        description="Launch a measurable VoC programme with XEBO.ai — survey design, journey mapping, closed-loop workflows and ROI tracking."
        asset="Voice of Customer Programme Toolkit"
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
            <ProductLogo src={productLogo} alt="Xebo" label="Customer Experience" />
            <h1 className="font-sans text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Transform customer engagement with{" "}
              <span className="italic text-brand-tint">intelligent</span> CX management software.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Xebo is an AI-powered customer experience management platform that helps
              organisations improve satisfaction, capture real-time feedback, and deliver
              connected customer journeys. FCC delivers Xebo implementation, integration, and
              managed optimisation across the UK.
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
                alt="Xebo customer experience analytics dashboard"
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
              <span className="italic text-brand">intelligent</span> CX software.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Today's organisations operate across multiple digital and customer interaction
              channels. Without intelligent visibility into customer journeys, businesses
              struggle to understand expectations, identify service gaps, and improve
              engagement performance.
            </p>
            <p>
              Xebo centralises customer feedback, improves engagement analytics, and strengthens
              decision-making through real-time insights — transforming disconnected
              interactions into measurable business intelligence.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Capture customer feedback in real time",
                "Analyse customer behaviour and sentiment",
                "Improve customer journey visibility",
                "Automate feedback management",
                "Strengthen operational responsiveness",
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
          Where customer experience{" "}
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
          <span className="italic text-brand">CX transformation</span>.
        </h2>
        <ApproachInfographic className="mt-14" layout="bento" steps={APPROACH} />
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="bg-ink text-white py-20 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand-tint">
            Core Capabilities
          </span>
          <span className="h-px w-10 bg-brand-tint/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
          Everything you need to{" "}
          <span className="italic text-brand-tint">listen, analyse, and act</span>.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-brand-tint/40 hover:bg-white/[0.05] transition-colors"
            >
              <div className="font-mono text-[10px] text-brand-tint mb-4">{c.n}</div>
              <h3 className="font-sans text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-white/60 leading-relaxed">{c.lede}</p>
              <ul className="mt-5 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-1.5 size-1 rounded-full bg-brand-tint shrink-0" />
                    {i}
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
    <section className="bg-background py-20 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand">
            Industry Use Cases
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          Built for the industries{" "}
          <span className="italic text-brand">we serve</span>.
        </h2>
        <IndustryInfographic className="mt-14" layout="path" items={INDUSTRIES.map((ind) => ({ title: ind.name, body: ind.body }))} />
      </div>
    </section>
  );
}

function WhyFCC() {
  return (
    <section className="bg-brand-wash py-20 lg:py-16 border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="section-kicker text-brand">
            Why FCC
          </span>
          <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            The right partner for{" "}
            <span className="italic text-brand">Xebo</span>.
          </h2>
        </div>
        <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {WHY.map((w) => (
            <li
              key={w}
              className="rounded-xl bg-white border border-ink/10 p-5 text-ink text-sm leading-relaxed"
            >
              {w}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-background py-20 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-kicker text-brand">
            Business Outcomes
          </span>
          <span className="h-px w-10 bg-brand/40" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-ink tracking-tight max-w-3xl">
          What organisations using Xebo{" "}
          <span className="italic text-brand">achieve</span>.
        </h2>
        <OutcomeInfographic className="mt-14" layout="signal" items={OUTCOMES} />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative bg-ink text-white py-20 lg:py-16 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-40"
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
          Ready to deliver connected{" "}
          <span className="italic text-brand-tint">customer experiences</span>?
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Improve customer visibility, feedback management, and engagement performance through
          scalable Xebo experience management solutions from FCC.
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
          Common questions about <span className="italic text-brand">Xebo</span>.
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
