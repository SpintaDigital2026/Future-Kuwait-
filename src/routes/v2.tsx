import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import heroAsset from "@/assets/client-2026/homepage-hero-01.jpg.asset.json";
import microsoftAsset from "@/assets/client-2026/microsoft.jpg.asset.json";
import securityAsset from "@/assets/client-2026/cybersecurity-overview.jpg.asset.json";
import cxAsset from "@/assets/client-2026/customer-experience-overview.jpg.asset.json";
import aiAsset from "@/assets/client-2026/ai-advanced-technologies.jpg.asset.json";
import ctaAsset from "@/assets/client-2026/contact-speak-to-an-expert.jpg.asset.json";
import brochureAsset from "@/assets/client-2026/solution-brochure.jpg.asset.json";
const heroImg = heroAsset.url;
const microsoftImg = microsoftAsset.url;
const securityImg = securityAsset.url;
const cxImg = cxAsset.url;
const aiImg = aiAsset.url;
const ctaImg = ctaAsset.url;
import futureLogo from "@/assets/future-logo.png.asset.json";
import { SiteNav } from "@/components/SiteNav";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";
import { OutcomeInfographic } from "@/components/OutcomeInfographic";
import { IndustryInfographic } from "@/components/IndustryInfographic";
import { SocialIcons } from "@/components/SocialIcons";

const EASE = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "FCC — Enterprise Technology, Microsoft Cloud, Cybersecurity & AI" },
      {
        name: "description",
        content:
          "Future Communications Company (FCC) delivers enterprise Microsoft, cybersecurity, customer experience, and AI solutions across the UK.",
      },
      { property: "og:title", content: "FCC — Engineering Intelligent Digital Transformation" },
      {
        property: "og:description",
        content:
          "Microsoft cloud, managed cybersecurity, customer experience, and AI for modern enterprises across the UK.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const SOLUTIONS = [
  {
    n: "01",
    title: "Microsoft Solutions",
    image: microsoftImg,
    lede: "Accelerate digital transformation through intelligent Microsoft technologies and cloud ecosystems.",
    items: [
      "Dynamics 365 Business Central",
      "Dynamics 365 Finance & Operations",
      "Microsoft Power BI consulting",
      "Power Platform consulting",
      "Azure migration & cloud services",
    ],
  },
  {
    n: "02",
    title: "Cyber Security",
    image: securityImg,
    lede: "Strengthen operational resilience through intelligent security and managed protection frameworks.",
    items: [
      "Managed SOC services",
      "Threat detection & response",
      "Endpoint & email security",
      "Penetration testing",
      "Vulnerability & risk management",
    ],
  },
  {
    n: "03",
    title: "Customer Experience",
    image: cxImg,
    lede: "Transform engagement through AI-powered customer experience and intelligent communication platforms.",
    items: [
      "Customer journey analytics",
      "Voice of the customer tools",
      "CX management platform",
      "Omni-channel engagement",
      "Real-time customer insights",
    ],
  },
  {
    n: "04",
    title: "AI & Advanced Technologies",
    image: aiImg,
    lede: "Accelerate innovation through intelligent AI-powered automation and analytics solutions.",
    items: [
      "AI chatbot development",
      "Machine learning consulting",
      "AI integration services",
      "Predictive analytics",
      "Intelligent automation",
    ],
  },
];

const WHY = [
  { t: "Enterprise Expertise", d: "Deep expertise across Microsoft, cybersecurity, customer engagement, and AI." },
  { t: "End-to-End Delivery", d: "Consulting, architecture, deployment, optimisation and managed services." },
  { t: "UK Reach", d: "Localized implementation and support tailored to regional requirements." },
  { t: "Strategic Partnerships", d: "Microsoft, Google, ThreatDown, Barracuda, and XEBO.ai." },
  { t: "Scalable Managed Services", d: "Managed IT security, cloud support, and enterprise optimisation." },
  { t: "Outcome-Driven", d: "Measurable improvements in resilience, efficiency, and growth." },
];

const INDUSTRIES = [
  { t: "Retail", d: "Customer engagement, operational visibility, digital resilience." },
  { t: "Financial Services", d: "Compliance, cloud security, and secure communications." },
  { t: "Telecom", d: "Modernise operations and improve engagement workflows." },
  { t: "Healthcare", d: "Secure patient systems and connected digital experiences." },
  { t: "Trading & Distribution", d: "Inventory visibility, efficiency, and infrastructure scale." },
];

const APPROACH = [
  { t: "Discovery & Assessment", d: "Understand business objectives, challenges, and infrastructure." },
  { t: "Solution Architecture", d: "Design scalable cloud, security and enterprise frameworks." },
  { t: "Integration & Deployment", d: "Seamless implementation across Microsoft, AI, CX and security." },
  { t: "Training & Enablement", d: "Empower teams through structured onboarding and guidance." },
  { t: "Managed Optimisation", d: "Continuous monitoring, optimisation and long-term support." },
];

const OUTCOMES = [
  "Faster digital transformation",
  "Improved operational efficiency",
  "Enhanced cybersecurity resilience",
  "Better customer engagement visibility",
  "Intelligent decision-making through analytics",
  "Scalable cloud and AI adoption",
];

const FAQ = [
  {
    q: "What services does FCC provide?",
    a: "Microsoft business solutions, cyber security, AI-powered automation, customer experience platforms, and cloud migration & managed services.",
  },
  {
    q: "Does FCC provide managed cybersecurity services?",
    a: "Yes — managed security services, threat monitoring, vulnerability management, and SOC support.",
  },
  {
    q: "Is FCC a Microsoft cloud solution provider?",
    a: "Yes. FCC is a trusted Microsoft cloud solution provider delivering Dynamics 365, Azure, Power BI, and Power Platform solutions.",
  },
  {
    q: "Does FCC provide AI development services?",
    a: "Yes — AI chatbot development, AI integration, machine learning consulting, and AI-powered automation solutions.",
  },
  {
    q: "Which industries does FCC support?",
    a: "Retail, finance, telecom, healthcare, and enterprise organisations across the UK.",
  },
];

function CtaBand({
  headline,
  body,
  variant = "light",
}: {
  headline: string;
  body: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <section className={isDark ? "bg-ink text-white" : "border-y border-hairline bg-muted/40"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <h3 className={`font-sans text-2xl md:text-3xl leading-snug tracking-tight ${isDark ? "text-white" : "text-ink"}`}>
              {headline}
            </h3>
            <p className={`mt-2 text-base leading-relaxed ${isDark ? "text-white/70" : "text-ink-soft"}`}>
              {body}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/contact"
              className={`btn-expert group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap ${isDark ? "bg-white text-ink" : "bg-brand text-white shadow-soft"}`}
            >
              Speak to an Expert
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/resources/case-studies"
              className="btn-case inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand whitespace-nowrap border border-brand/10 shadow-soft"
            >
              Download a case study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="theme-v2 bg-background text-ink">
      <SiteNav />
      <Hero />
      <TrustStrip />
      <About />
      <CtaBand
        headline="See how we deliver results"
        body="Discover how organisations across the UK modernise with FCC."
      />
      <Solutions />
      <WhyFCC />
      <SectionCta />
      <Approach />
      <Outcomes />
      <LeadMagnet
        eyebrow="Lead Magnet · Solutions Brochure"
        title="FCC Solutions Brochure"
        description="A single PDF covering FCC's full solutions portfolio — Microsoft, cybersecurity, customer experience and AI — with case examples and engagement models."
        asset="FCC Solutions Brochure"
        previewImage={brochureAsset.url}
      />
      <CTA />
      <Footer />
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
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="section-kicker text-brand-tint">
                Future Communications Co.
              </span>
              <span className="h-px w-10 bg-brand-tint/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                United Kingdom
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-white"
            >
              Engineering{" "}
              <span className="italic text-brand-tint">intelligent</span> digital transformation.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl"
            >
              FCC delivers enterprise-grade technology solutions across Microsoft, cybersecurity,
              customer experience, and AI — helping organisations modernise operations,
              strengthen resilience, and accelerate growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="/contact"
                className="btn-expert group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft whitespace-nowrap"
              >
                Speak to an Expert
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/resources/case-studies"
                className="btn-case inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand border border-brand/10 shadow-soft whitespace-nowrap"
              >
                Download a case study
              </a>
            </motion.div>
            <StaggerGroup className="mt-10 grid grid-cols-3 gap-3 max-w-lg sm:mt-14 sm:gap-6">
              {[
                ["30+", "Years experience"],
                ["UK", "Nationwide reach"],
                ["100%", "Outcome-driven"],
              ].map(([n, l]) => (
                <StaggerItem key={l} className="border-l-2 border-brand-tint pl-3 sm:pl-4">
                  <div className="font-sans text-2xl text-white sm:text-3xl">{n}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-[0.08em] text-white/50 sm:text-[10px] sm:tracking-[0.2em]">{l}</div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <motion.div
              aria-hidden
              className="absolute -inset-6 bg-brand/20 rounded-3xl -z-10 blur-2xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-elevated ring-1 ring-white/10">
              <img
                src={heroImg}
                alt="Enterprise team collaborating on digital transformation"
                width={1600}
                height={1100}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
                <div className="rounded-xl bg-ink/85 backdrop-blur px-4 py-3 ring-1 ring-white/10">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Trusted Microsoft</div>
                  <div className="font-sans text-sm text-white">Cloud Solution Provider</div>
                </div>
                <motion.div
                  className="size-12 rounded-full bg-brand grid place-items-center text-white text-xl"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  ↗
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Customer experience",
    "Cyber security",
    "Microsoft platforms",
    "AI automation",
    "Secure cloud",
  ];
  return (
    <section className="border-y border-brand/10 bg-brand-wash text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand whitespace-nowrap">
            Enterprise technology · Built for growth
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink/80">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cap = [
    "Microsoft business solutions",
    "Managed cyber security",
    "AI-driven automation",
    "Enterprise customer engagement",
    "Cloud transformation",
    "Strategic partnerships",
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="section-kicker text-brand">
            About
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Driving transformation through{" "}
            <span className="italic text-brand">intelligent technology</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pl-10 lg:border-l border-hairline">
          <p className="text-lg text-ink-soft leading-relaxed">
            Future Communications Company (FCC) is a leading enterprise technology provider with
            expertise spanning Microsoft ecosystems, cybersecurity frameworks, AI technologies,
            cloud infrastructure, and customer engagement platforms designed for modern
            enterprise environments.
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {cap.map((c, i) => (
              <li key={c} className="flex items-baseline gap-3 text-ink">
                <span className="text-brand">—</span>
                <span className="text-base">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="bg-muted/50 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="section-kicker text-brand">
              Solutions
            </span>
            <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Four ecosystems. <span className="italic text-brand">One partner.</span>
            </h2>
          </div>
          <p className="max-w-md text-ink-soft">
            Integrated consulting, deployment, and managed support across the platforms that
            run modern enterprises.
          </p>
        </div>

        <StaggerGroup className="grid md:grid-cols-2 gap-6">
          {SOLUTIONS.map((s) => (
            <StaggerItem
              key={s.n}
              as="article"
              className="group bg-background rounded-2xl overflow-hidden border border-hairline hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 font-sans text-3xl md:text-4xl text-white">
                  {s.title}
                </h3>
              </div>
              <div className="p-8">
                <p className="text-ink-soft leading-relaxed">{s.lede}</p>
                <ul className="mt-6 grid gap-2.5">
                  {s.items.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-ink">
                      <span className="text-brand mt-0.5">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function WhyFCC() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="mb-16 max-w-3xl">
        <span className="section-kicker text-brand">
          Why FCC
        </span>
            <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
          Why organisations <span className="italic text-brand">choose us</span>.
        </h2>
      </div>
      <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
        {WHY.map((w, i) => (
          <StaggerItem key={w.t} className="bg-background p-8 min-h-[200px] hover:bg-brand-wash/40 transition-colors">
            <h3 className="font-sans text-2xl mb-3">{w.t}</h3>
            <p className="text-sm text-ink-soft leading-relaxed">{w.d}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bg-ink text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="mb-16 max-w-3xl">
          <span className="section-kicker text-brand-tint">
            Industries
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
            Built for the industries{" "}
            <span className="italic text-brand-tint">we serve</span>.
          </h2>
        </div>
        <IndustryInfographic className="mt-14" layout="strip" items={INDUSTRIES.map((ind) => ({ title: ind.t, body: ind.d }))} />
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="mb-16 max-w-3xl">
        <span className="section-kicker text-brand">
          Approach
        </span>
            <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
          A proven path from{" "}
          <span className="italic text-brand">discovery to optimisation</span>.
        </h2>
      </div>
      <ApproachInfographic layout="ribbon" steps={APPROACH.map((a) => ({ title: a.t, body: a.d }))} />
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-brand-wash border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="max-w-3xl">
          <span className="section-kicker text-brand">
            Outcomes
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Measurable <span className="italic text-brand">business impact</span>.
          </h2>
        </div>
        <OutcomeInfographic className="mt-10" layout="mosaic" items={OUTCOMES} />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="cta-dark-panel relative rounded-3xl overflow-hidden">
          <img
            src={ctaImg}
            alt="Partnership handshake in a modern office"
            loading="lazy"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/68 to-ink/30" />
          <div className="relative px-8 md:px-16 py-12 md:py-16 max-w-3xl">
            <span className="section-kicker text-brand-tint">
              Partner with FCC
            </span>
            <h2 className="mt-6 font-sans text-4xl md:text-5xl text-white leading-[1.05] tracking-tight">
              Ready to engineer your{" "}
              <span className="italic text-brand-tint">digital future</span>?
            </h2>
            <p className="mt-6 text-lg text-white/75 max-w-xl">
              Speak with our team about modernising your enterprise with secure, scalable,
              intelligent technology.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="btn-expert inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink whitespace-nowrap"
              >
                Speak to an Expert
                <span aria-hidden>→</span>
              </a>
              <a
                href="/resources/case-studies"
                className="btn-case inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand border border-brand/10 shadow-soft whitespace-nowrap"
              >
                Download a case study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="section-kicker text-brand">
            FAQ
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Frequently asked <span className="italic text-brand">questions</span>.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-hairline border-y border-hairline">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span className="font-sans text-xl md:text-2xl text-ink group-hover:text-brand transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`size-9 rounded-full border border-ink/15 grid place-items-center text-ink shrink-0 transition-transform ${
                        isOpen ? "rotate-45 bg-brand text-white border-brand" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 text-ink-soft leading-relaxed max-w-2xl">{f.a}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={futureLogo.url} alt="Future" width={140} height={36} className="h-8 w-auto" />
            </div>
            <p className="mt-6 text-ink-soft max-w-md leading-relaxed">
              Future Communications Company — engineering intelligent digital transformation for
              modern enterprises across the UK.
            </p>
            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><Link to="/microsoft/azure" className="hover:text-ink transition-colors">Microsoft</Link></li>
              <li><Link to="/cybersecurity/barracuda" className="hover:text-ink transition-colors">Cyber Security</Link></li>
              <li><Link to="/customer-experience/xebo" className="hover:text-ink transition-colors">Customer Experience</Link></li>
              <li><Link to="/ai/dune-dynamics" className="hover:text-ink transition-colors">AI & Automation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><Link to="/about" className="hover:text-ink transition-colors">About</Link></li>
              <li><a href="/#industries" className="hover:text-ink transition-colors">Industries</a></li>
              <li><a href="/#approach" className="hover:text-ink transition-colors">Approach</a></li>
              <li><a href="/contact" className="hover:text-ink transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-hairline flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} Future Communications Company. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft">
            United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
