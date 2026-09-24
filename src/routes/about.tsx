import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import partnerHeroAsset from "@/assets/client-2026/microsoft-solutions-partner-01.jpg.asset.json";
import partnerAsset from "@/assets/client-2026/microsoft-solutions-partner-02.jpg.asset.json";
const aboutHeroImg = partnerHeroAsset.url;
import futureLogo from "@/assets/future-logo.png.asset.json";
import { SiteNav } from "@/components/SiteNav";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";
import { SocialIcons } from "@/components/SocialIcons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FCC — Enterprise Technology, Microsoft Cloud, Cybersecurity & AI" },
      {
        name: "description",
        content:
          "Learn about Future Communications Company (FCC). Enterprise-grade digital transformation across Microsoft ecosystems, cybersecurity, customer experience, and AI.",
      },
      { property: "og:title", content: "About FCC — Empowering Businesses Through Technology" },
      {
        property: "og:description",
        content:
          "Discover FCC's mission, vision, and expertise in Microsoft cloud, cybersecurity, CX, and AI for enterprises across the UK.",
      },
    ],
  }),
  component: AboutPage,
});

const WHAT_WE_DO = [
  {
    icon: "☁️",
    title: "Microsoft Solutions",
    lede: "As a trusted Microsoft cloud solution provider, FCC helps organisations modernise operations through:",
    items: [
      "Microsoft Dynamics 365 Business Central",
      "Dynamics 365 Finance and Operations",
      "Microsoft Azure cloud services",
      "Azure migration services",
      "Microsoft Power BI consulting",
      "Power Platform consulting services",
    ],
    capabilities: [
      "ERP and CRM modernisation",
      "Cloud migration and optimisation",
      "Business intelligence and reporting",
      "Workflow automation",
      "Secure cloud infrastructure",
    ],
  },
  {
    icon: "🔐",
    title: "Cybersecurity Solutions",
    lede: "FCC provides enterprise-grade cyber security solutions and managed cyber security services designed to strengthen digital resilience and reduce operational risk.",
    items: [
      "Managed security services",
      "Endpoint security solutions",
      "Email security solutions",
      "Cloud security solutions",
      "Threat intelligence and monitoring",
      "Vulnerability management",
    ],
    capabilities: [],
    note: "As a trusted managed security service provider, FCC helps organisations improve security visibility, compliance readiness, and operational continuity.",
  },
  {
    icon: "🎯",
    title: "Customer Experience Solutions",
    lede: "FCC helps organisations improve engagement visibility and customer satisfaction through intelligent customer experience platforms and AI-powered communication ecosystems.",
    items: [
      "Customer journey analytics",
      "Customer feedback software",
      "Voice of the customer tools",
      "Customer experience management platform",
      "Customer journey analytics software",
    ],
    capabilities: [
      "Omni-channel engagement",
      "Real-time customer insights",
      "Customer feedback management",
      "CX analytics and reporting",
      "Experience optimisation",
    ],
  },
  {
    icon: "🤖",
    title: "AI & Advanced Technologies",
    lede: "FCC helps organisations accelerate innovation through intelligent AI ecosystems and automation frameworks.",
    items: [
      "AI solutions for business",
      "Artificial intelligence services",
      "AI integration services",
      "Machine learning consulting services",
      "AI chatbot development services",
      "AI automation solutions",
    ],
    capabilities: [],
    note: "As an experienced AI development company, FCC delivers intelligent automation and predictive technologies designed for modern enterprises.",
  },
];

const WHY = [
  { t: "Enterprise Technology Expertise", d: "Deep expertise across Microsoft ecosystems, cybersecurity frameworks, AI technologies, and customer engagement platforms." },
  { t: "End-to-End Delivery", d: "From consulting and architecture to deployment, monitoring, and optimisation." },
  { t: "UK Delivery Expertise", d: "Localized implementation and managed support services tailored to regional enterprise environments." },
  { t: "Strategic Technology Partnerships", d: "Partnerships with global technology leaders including Microsoft, Google, ThreatDown, Barracuda, and XEBO.ai." },
  { t: "Long-Term Partnership Approach", d: "FCC focuses on building scalable technology ecosystems designed to evolve with your business." },
];

const INDUSTRIES = [
  { t: "Retail", d: "Improve customer engagement, analytics, and operational efficiency." },
  { t: "Financial Services", d: "Strengthen compliance, cloud security, and customer communication systems." },
  { t: "Telecom", d: "Modernise operational workflows and customer engagement ecosystems." },
  { t: "Healthcare", d: "Secure digital infrastructure and improve connected healthcare experiences." },
  { t: "Enterprise & Distribution", d: "Improve visibility, scalability, and operational performance." },
];

const APPROACH = [
  { t: "Discovery & Business Assessment", d: "Understanding operational challenges, infrastructure requirements, and long-term business goals." },
  { t: "Solution Architecture & Planning", d: "Designing scalable cloud, cybersecurity, AI, and enterprise technology ecosystems." },
  { t: "Integration & Deployment", d: "Implementing solutions seamlessly across operational environments with minimal disruption." },
  { t: "Training & Enablement", d: "Empowering teams through onboarding, operational guidance, and technology enablement programs." },
  { t: "Managed Support & Optimisation", d: "Providing long-term optimisation, monitoring, and managed services support." },
];

const OUTCOMES = [
  "Faster digital transformation",
  "Improved operational efficiency",
  "Enhanced cybersecurity resilience",
  "Better customer engagement visibility",
  "Scalable cloud adoption",
  "AI-driven business intelligence",
  "Reduced operational risk",
];

const FAQ = [
  {
    q: "What services does FCC provide?",
    a: "FCC provides: Microsoft business solutions, cyber security solutions, AI-powered automation services, customer experience platforms, and cloud migration and managed services.",
  },
  {
    q: "Is FCC a Microsoft cloud solution provider?",
    a: "Yes, FCC is a trusted Microsoft cloud solution provider delivering Dynamics 365, Azure, Power BI, and Power Platform services.",
  },
  {
    q: "Does FCC provide managed cybersecurity services?",
    a: "Yes, FCC delivers: managed security services, threat monitoring, vulnerability management, and endpoint and cloud security solutions.",
  },
  {
    q: "Does FCC provide AI development services?",
    a: "Yes, FCC provides: AI chatbot development services, AI integration, machine learning consulting, and predictive analytics and automation solutions.",
  },
  {
    q: "Which industries does FCC support?",
    a: "FCC supports organisations across retail, financial services, healthcare, telecom, and enterprise sectors throughout the UK.",
  },
];

function AboutPage() {
  return (
    <div className="bg-background text-ink">
      <SiteNav />
      <Hero />
      <WhoWeAre />
      <SectionCta />
      <MissionVision />
      <WhatWeDo />
      <SectionCta />
      <ApproachSection />
      <WhyFCC />
      <SectionCta />
      <Outcomes />
      <LeadMagnet
        eyebrow="Lead Magnet · Company Overview"
        title="FCC Capabilities Overview"
        description="A concise overview of FCC's services, partnerships and delivery model across Microsoft, cybersecurity, customer experience and AI."
        asset="FCC Capabilities Overview"
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
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand-tint">
                About FCC
              </span>
              <span className="h-px w-10 bg-brand-tint/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                Est. 1996
              </span>
            </div>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-white">
              Empowering businesses through{" "}
              <span className="italic text-brand-tint">intelligent</span> technology solutions.
            </h1>
            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">
              Future Communications Company (FCC) delivers enterprise-grade digital transformation
              solutions across Microsoft ecosystems, cybersecurity, customer experience, and AI
              technologies — helping organisations modernise operations, improve resilience, and accelerate growth.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-deep transition-colors shadow-soft whitespace-nowrap"
              >
                Speak to an Expert
                <span aria-hidden>→</span>
              </a>
              <a
                href="/#solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Explore Our Solutions
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 bg-brand/20 rounded-3xl -z-10 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elevated ring-1 ring-white/10">
              <img
                src={aboutHeroImg}
                alt="FCC team collaborating on enterprise technology solutions"
                width={1600}
                height={900}
                className="w-full h-auto object-cover aspect-[16/9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const expertise = [
    "Microsoft cloud ecosystems",
    "Managed cybersecurity services",
    "AI and automation technologies",
    "Customer experience platforms",
    "Enterprise digital transformation",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand">
            Who We Are
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Driving digital transformation{" "}
            <span className="italic text-brand">for modern enterprises</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pl-10 lg:border-l border-hairline">
          <p className="text-lg text-ink-soft leading-relaxed">
            Established in 1996, FCC has evolved into a leading enterprise technology company delivering:
          </p>
          <ul className="mt-6 space-y-2 text-ink">
            {[
              "Microsoft business solutions",
              "Cyber security solutions",
              "AI-powered automation platforms",
              "Cloud transformation services",
              "Customer engagement ecosystems",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-brand shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-ink-soft leading-relaxed">
            FCC helps organisations implement scalable technologies that improve operational efficiency,
            strengthen security, and enhance customer experiences across modern business environments.
          </p>
          <div className="mt-10">
            <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand mb-4 block">
              Our expertise spans
            </span>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {expertise.map((e) => (
                <li key={e} className="flex items-center gap-2 text-sm text-ink">
                  <span className="text-brand">—</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="bg-muted/50 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand">
              Our Mission
            </span>
            <h2 className="mt-6 font-sans text-3xl md:text-4xl leading-[1.05] tracking-tight">
              Delivering technology that{" "}
              <span className="italic text-brand">creates business impact</span>.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Our mission is to help organisations unlock growth, operational agility, and long-term
              resilience through intelligent technology solutions aligned with evolving business needs.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We combine consulting expertise, scalable platforms, and managed support services to help
              enterprises modernise securely and efficiently.
            </p>
          </div>
          <div>
            <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand">
              Our Vision
            </span>
            <h2 className="mt-6 font-sans text-3xl md:text-4xl leading-[1.05] tracking-tight">
              Building a smarter and more{" "}
              <span className="italic text-brand">connected digital future</span>.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              We envision a future where businesses leverage intelligent automation, cloud ecosystems,
              cybersecurity frameworks, and AI-powered insights to operate with greater agility, visibility,
              and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="mb-16 max-w-3xl">
        <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand">
          What We Do
        </span>
        <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
          Enterprise technology solutions{" "}
          <span className="italic text-brand">designed for scale</span>.
        </h2>
        <p className="mt-6 text-ink-soft leading-relaxed max-w-2xl">
          FCC delivers end-to-end consulting, implementation, integration, and optimisation services
          across enterprise technology ecosystems.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {WHAT_WE_DO.map((s) => (
          <article
            key={s.title}
            className="group bg-background rounded-2xl p-8 border border-hairline hover:shadow-elevated transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-sans text-2xl">{s.title}</h3>
            </div>
            <p className="text-ink-soft leading-relaxed">{s.lede}</p>
            <ul className="mt-6 grid gap-2.5">
              {s.items.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-ink">
                  <span className="text-brand mt-0.5">—</span>
                  {d}
                </li>
              ))}
            </ul>
            {s.capabilities.length > 0 && (
              <div className="mt-6 pt-6 border-t border-hairline">
                <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand mb-3 block">
                  Key Capabilities
                </span>
                <ul className="grid gap-2">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-ink-soft">
                      <span className="size-1 rounded-full bg-brand shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {s.note && (
              <p className="mt-6 pt-6 border-t border-hairline text-sm text-ink-soft leading-relaxed">
                {s.note}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="bg-muted/50 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand">
            Our Approach
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Strategic, scalable, and{" "}
            <span className="italic text-brand">outcome-driven</span>.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-2xl">
            FCC combines enterprise technology expertise with business understanding to deliver
            scalable digital transformation frameworks aligned with operational and growth objectives.
          </p>
        </div>
        <ApproachInfographic steps={APPROACH.map((a) => ({ title: a.t, body: a.d }))} />
      </div>
    </section>
  );
}

function WhyFCC() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="mb-16 max-w-3xl">
        <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand">
          Why FCC
        </span>
        <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
          Why organisations{" "}
          <span className="italic text-brand">partner with FCC</span>.
        </h2>
      </div>
      <img
        src={partnerAsset.url}
        alt="FCC Microsoft Solutions Partner expertise"
        className="mb-10 aspect-[21/7] w-full rounded-2xl object-cover"
        loading="lazy"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
        {WHY.map((w, i) => (
          <div key={w.t} className="bg-background p-8 min-h-[200px] hover:bg-brand-wash/40 transition-colors">
            <h3 className="font-sans text-2xl mb-3">{w.t}</h3>
            <p className="text-sm text-ink-soft leading-relaxed">{w.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-ink text-white relative overflow-hidden">
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
          <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand-tint">
            Industries
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
            Technology solutions across{" "}
            <span className="italic text-brand-tint">key industries</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.t}
              className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 hover:bg-white/[0.07] transition-colors"
            >
              <h3 className="font-sans text-2xl mb-3 text-white">{ind.t}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{ind.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-brand-wash border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand">
              Business Outcomes
            </span>
            <h2 className="mt-6 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Delivering{" "}
              <span className="italic text-brand">measurable business value</span>.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Organisations partnering with FCC can achieve:
            </p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {OUTCOMES.map((o, i) => (
              <li
                key={o}
                className="flex items-start gap-4 rounded-xl bg-background p-5 border border-hairline"
              >
                <span className="text-brand mt-1">—</span>
                <span className="text-ink font-medium">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[-10%] h-[600px] w-[600px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 50%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand-tint">
            Start Your Transformation
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl text-white leading-[1.05] tracking-tight">
            Transform your business through{" "}
            <span className="italic text-brand-tint">intelligent technology</span>.
          </h2>
          <p className="mt-6 text-lg text-white/75 max-w-xl mx-auto">
            Build scalable, secure, and future-ready enterprise ecosystems with FCC.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-deep transition-colors whitespace-nowrap"
            >
              Speak to an Expert
              <span aria-hidden>→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-brand">
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
