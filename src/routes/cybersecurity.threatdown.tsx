import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
const heroImg = "/partners/threatdown/dashboard.webp";
const productLogo = "/partners/threatdown/logo.png?v=3";
import { ProductLogo } from "@/components/ProductLogo";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SectionCta } from "@/components/SectionCta";
import { ApproachInfographic } from "@/components/ApproachInfographic";
import { OutcomeInfographic } from "@/components/OutcomeInfographic";
import { IndustryInfographic } from "@/components/IndustryInfographic";

export const Route = createFileRoute("/cybersecurity/threatdown")({
  head: () => ({
    meta: [
      { title: "ThreatDown — Advanced Endpoint Security & Managed Cybersecurity | FCC" },
      {
        name: "description",
        content:
          "ThreatDown delivers enterprise-grade endpoint security software and managed threat detection. FCC provides UK implementation, monitoring, and optimisation services.",
      },
      { property: "og:title", content: "ThreatDown — Intelligent Endpoint Security Software" },
      {
        property: "og:description",
        content:
          "Strengthen cyber resilience with ThreatDown endpoint protection, EDR, and managed threat response — delivered by FCC across the UK.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ThreatDownPage,
});

const CHALLENGES = [
  {
    title: "Increasing Endpoint & Ransomware Threats",
    body:
      "Modern organisations require intelligent endpoint security software capable of protecting distributed users, connected devices, and operational environments. Without proactive cyber threat protection, businesses remain vulnerable to ransomware, malware, and operational disruption.",
  },
  {
    title: "Limited Threat Visibility",
    body:
      "Businesses require intelligent threat detection and response capabilities to improve operational visibility and accelerate incident response workflows across distributed infrastructures.",
  },
  {
    title: "Complex Security Environments",
    body:
      "Many organisations lack the internal resources required to manage modern cybersecurity environments effectively. FCC delivers scalable managed security services designed to improve monitoring, governance, and operational resilience.",
  },
  {
    title: "Operational & Compliance Risks",
    body:
      "Disconnected systems reduce visibility into vulnerabilities, suspicious activity, and compliance exposure across enterprise infrastructures — increasing risk to operations and reputation.",
  },
];

const APPROACH = [
  {
    title: "Security Assessment & Discovery",
    body:
      "We evaluate operational environments, endpoint vulnerabilities, and security gaps to design scalable endpoint security solutions for businesses across London and the UK.",
  },
  {
    title: "Security Architecture & Planning",
    body:
      "Our experts design intelligent protection frameworks aligned with governance, operational resilience, and enterprise security requirements.",
  },
  {
    title: "Deployment & Integration",
    body:
      "FCC deploys ThreatDown endpoint protection, endpoint monitoring frameworks, threat detection systems, and security visibility environments through scalable implementation strategies.",
  },
  {
    title: "Training & Enablement",
    body:
      "Security teams gain visibility, operational guidance, and response readiness through structured enablement programmes.",
  },
  {
    title: "Managed Monitoring & Optimisation",
    body:
      "FCC delivers managed threat detection and response, threat monitoring, incident visibility, and security optimisation through scalable managed security capabilities.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Endpoint Protection",
    lede:
      "ThreatDown endpoint protection helps organisations secure endpoints, devices, and users through intelligent endpoint security software capabilities.",
    items: [
      "Real-time threat prevention",
      "Malware protection",
      "Ransomware rollback",
      "Endpoint visibility",
      "Device monitoring",
    ],
  },
  {
    n: "02",
    title: "Endpoint Detection & Response (EDR)",
    lede:
      "Improve visibility into suspicious activity through intelligent threat detection and response capabilities designed for modern enterprise environments.",
    items: [
      "Threat analytics",
      "Vulnerability monitoring",
      "Incident visibility",
      "Guided remediation",
      "Automated response workflows",
    ],
  },
  {
    n: "03",
    title: "Managed Threat Detection & Response",
    lede:
      "FCC delivers enterprise-grade managed threat detection and response services designed to improve operational readiness and cyber resilience.",
    items: [
      "Continuous monitoring",
      "Threat hunting",
      "Incident response",
      "Security operations support",
      "Operational risk reduction",
    ],
  },
  {
    n: "04",
    title: "Malware & Threat Prevention",
    lede:
      "Malwarebytes ThreatDown environments help organisations strengthen protection against ransomware, malware, phishing, and evolving digital threats.",
    items: [
      "Malware prevention",
      "Threat intelligence",
      "Behaviour analytics",
      "Security monitoring",
      "Endpoint isolation",
    ],
  },
];

const INDUSTRIES = [
  {
    name: "Financial Services",
    body:
      "Strengthen operational resilience, compliance readiness, and endpoint visibility through intelligent endpoint security software environments.",
  },
  {
    name: "Healthcare",
    body:
      "Protect patient systems and operational infrastructures using scalable ThreatDown endpoint protection frameworks.",
  },
  {
    name: "Retail",
    body:
      "Improve cyber resilience, transaction security, and operational continuity through enterprise-grade managed security services.",
  },
  {
    name: "Telecom",
    body:
      "Strengthen distributed infrastructure protection and improve visibility using advanced managed IT security services and endpoint monitoring systems.",
  },
];

const WHY = [
  "Expertise in enterprise cybersecurity services UK",
  "Advanced ThreatDown endpoint protection implementation",
  "End-to-end deployment and optimisation services",
  "UK-focused cybersecurity expertise",
  "Scalable endpoint security solutions for London businesses",
  "Long-term operational resilience support",
];

const OUTCOMES = [
  "Improved endpoint visibility",
  "Faster threat response",
  "Reduced operational risk",
  "Enhanced ransomware protection",
  "Stronger cybersecurity resilience",
  "Better compliance readiness",
];

const FAQS = [
  {
    q: "What is ThreatDown used for?",
    a: "ThreatDown is an enterprise-grade endpoint security software platform used for threat prevention, endpoint monitoring, ransomware protection, and operational cybersecurity management.",
  },
  {
    q: "Does FCC provide cybersecurity services UK?",
    a: "Yes, FCC delivers enterprise-grade cybersecurity services UK, including monitoring, optimisation, and managed threat response services.",
  },
  {
    q: "What is ThreatDown endpoint protection UK?",
    a: "ThreatDown endpoint protection UK helps organisations secure users, devices, and operational environments against ransomware, malware, and cyber threats.",
  },
  {
    q: "Does FCC provide managed threat detection and response services?",
    a: "Yes, FCC delivers scalable managed threat detection and response and managed security services UK for enterprise environments.",
  },
  {
    q: "Is ThreatDown suitable for businesses in London?",
    a: "Yes, FCC provides scalable endpoint security solutions for businesses in London and across the UK through intelligent ThreatDown environments.",
  },
];

function ThreatDownPage() {
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
        eyebrow="Lead Magnet · Endpoint Security"
        title="Endpoint Protection & EDR Buyer's Guide"
        description="Evaluate next-gen endpoint protection with ThreatDown — coverage, MDR options, ransomware rollback and TCO."
        asset="Endpoint Protection & EDR Buyer's Guide"
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
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <ProductLogo src={productLogo} alt="ThreatDown" label="Cybersecurity" />
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Strengthen cyber resilience with{" "}
              <span className="italic text-brand-tint">intelligent</span> endpoint security software.
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              ThreatDown delivers enterprise-grade endpoint security and intelligent threat
              protection. FCC provides UK implementation, monitoring, and optimisation services
              for organisations across the UK.
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
                alt="ThreatDown cybersecurity operations dashboard"
                width={1600}
                height={900}
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
              Modern business requires{" "}
              <span className="italic text-brand">intelligent</span> endpoint security.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Cyber threats continue to evolve across enterprise environments, remote workforces,
              and cloud-connected infrastructures. Businesses require proactive protection
              frameworks capable of identifying threats before they disrupt operations.
            </p>
            <p>
              ThreatDown is an advanced endpoint security platform that helps organisations
              detect threats in real time, protect endpoints and devices, automate remediation,
              and strengthen operational resilience.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Detect cyber threats in real time",
                "Protect endpoints and devices",
                "Improve threat visibility",
                "Automate remediation workflows",
                "Strengthen operational resilience",
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
          Where cyber resilience{" "}
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
          A strategic approach to{" "}
          <span className="italic text-brand">managed cybersecurity</span>.
        </h2>
        <ApproachInfographic className="mt-14" layout="bento" steps={APPROACH} />
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
          End-to-end protection across every{" "}
          <span className="italic text-brand">endpoint</span>.
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
          Trusted protection across{" "}
          <span className="italic text-brand-tint">every sector</span>.
        </h2>
        <IndustryInfographic className="mt-14" layout="path" items={INDUSTRIES.map((ind) => ({ title: ind.name, body: ind.body }))} />
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
              <span className="italic text-brand">enterprise-grade</span> cybersecurity.
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
              FCC helps organisations maximise the value of their ThreatDown investments through
              intelligent implementation and proactive cybersecurity management.
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
          <span className="italic text-brand">connected cyber defence</span>.
        </h2>
                <OutcomeInfographic className="mt-14" layout="signal" items={OUTCOMES} />
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
          Protect Your Business
        </span>
        <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold tracking-tight">
          Ready to strengthen your{" "}
          <span className="italic text-brand-tint">cyber resilience</span>?
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Strengthen operational resilience through scalable ThreatDown endpoint protection and
          managed cybersecurity services from FCC.
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
          Common questions about <span className="italic text-brand">ThreatDown</span>.
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
