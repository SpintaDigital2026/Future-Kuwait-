import { useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/future-logo.png.asset.json";
import {
  ChevronDown,
  Database,
  Users,
  Briefcase,
  BarChart3,
  Layers,
  Cloud,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Radar,
  MessagesSquare,
  Eye,
  Brain,
  Scale,
  ArrowRight,
  Menu,
  X,
  BookOpen,
  Newspaper,
  CalendarDays,
  FileText,
  Book,
} from "lucide-react";

type Item = {
  to: string;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type FeatureCard = {
  eyebrow: string;
  title: string;
  body: string;
  to: string;
  cta: string;
};

const mobileSections = [
  {
    title: "Customer Experience",
    items: [
      { to: "/customer-experience/xebo", label: "Xebo", icon: MessagesSquare },
      { to: "/customer-experience/view360", label: "View360", icon: Eye },
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      { to: "/cybersecurity/threatdown", label: "ThreatDown", icon: ShieldCheck },
      { to: "/cybersecurity/barracuda", label: "Barracuda", icon: Lock },
      { to: "/cybersecurity/microsoft-security", label: "Microsoft Security", icon: ShieldAlert },
      { to: "/cybersecurity/firecompass", label: "FireCompass", icon: Radar },
    ],
  },
  {
    title: "AI",
    items: [
      { to: "/ai/dune-dynamics", label: "Dune Dynamics", icon: Brain },
      { to: "/ai/provakil", label: "Provakil", icon: Scale },
    ],
  },
  {
    title: "Microsoft",
    items: [
      { to: "/microsoft/d365-fo", label: "D365 Finance & Operations", icon: Briefcase },
      { to: "/microsoft/d365-crm", label: "D365 CRM", icon: Users },
      { to: "/microsoft/d365-bc", label: "D365 Business Central", icon: Database },
      { to: "/microsoft/power-bi", label: "Power BI", icon: BarChart3 },
      { to: "/microsoft/power-apps", label: "Power Apps", icon: Layers },
      { to: "/microsoft/azure", label: "Azure", icon: Cloud },
    ],
  },
  {
    title: "Resources",
    items: [
      { to: "/resources/case-studies", label: "Case Studies", icon: BookOpen },
      { to: "/resources/blogs", label: "Blogs", icon: Newspaper },
      { to: "/resources/events-webinars", label: "Events / Webinars", icon: CalendarDays },
      { to: "/resources/white-papers", label: "White Papers", icon: FileText },
      { to: "/resources/glossary", label: "Glossary", icon: Book },
    ],
  },
];

function MegaDropdown({
  label,
  items,
  feature,
  align = "centre",
}: {
  label: string;
  items: Item[];
  feature: FeatureCard;
  align?: "left" | "centre" | "right";
}) {
  const [open, setOpen] = useState(false);
  const alignClasses =
    align === "right"
      ? "right-0"
      : align === "left"
        ? "left-0"
        : "left-1/2 -translate-x-1/2";
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-ink-soft hover:text-primary transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 opacity-60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute ${alignClasses} top-full pt-3 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-[min(720px,calc(100vw-2rem))] border border-border bg-white p-3 shadow-[0_24px_70px_-30px_rgba(10,26,51,0.35)] ring-1 ring-border">
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3 grid grid-cols-1 gap-1">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <Link
                    key={it.to}
                    to={it.to}
                    className="group flex items-start gap-3 p-3 hover:bg-muted transition-colors"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-secondary text-primary group-hover:border-primary/30 transition-colors">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-ink">
                        {it.label}
                      </span>
                      <span className="text-xs leading-snug text-ink-soft">
                        {it.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link
              to={feature.to}
              className="col-span-2 relative flex flex-col justify-between overflow-hidden border border-border bg-secondary p-5 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {feature.eyebrow}
                </div>
                <div className="mt-2 text-base font-semibold leading-snug text-ink">
                  {feature.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                  {feature.body}
                </p>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                {feature.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 bg-primary/10 blur-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="relative flex items-center justify-between py-3 lg:px-2">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logoAsset.url}
              alt="Future"
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-4 xl:gap-8">
            <Link
              to="/about"
              className="text-sm font-medium text-ink-soft hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-ink-soft hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <MegaDropdown
              label="Customer Experience"
              items={[
                {
                  to: "/customer-experience/xebo",
                  label: "Xebo",
                  description: "Experience management and CX feedback.",
                  icon: MessagesSquare,
                },
                {
                  to: "/customer-experience/view360",
                  label: "View360",
                  description: "Unified customer view across channels.",
                  icon: Eye,
                },
              ]}
              feature={{
                eyebrow: "Customer-first",
                title: "Turn experience into a growth engine",
                body: "Listen, understand and act on every customer signal in real time.",
                to: "/#solutions",
                cta: "See CX solutions",
              }}
            />
            <MegaDropdown
              label="Cybersecurity"
              items={[
                {
                  to: "/cybersecurity/threatdown",
                  label: "ThreatDown",
                  description: "Endpoint protection, detection and response.",
                  icon: ShieldCheck,
                },
                {
                  to: "/cybersecurity/barracuda",
                  label: "Barracuda",
                  description: "Email, network and data protection.",
                  icon: Lock,
                },
                {
                  to: "/cybersecurity/microsoft-security",
                  label: "Microsoft Security",
                  description: "Defender, Sentinel and Entra, end to end.",
                  icon: ShieldAlert,
                },
                {
                  to: "/cybersecurity/firecompass",
                  label: "FireCompass",
                  description: "Continuous attack surface management.",
                  icon: Radar,
                },
              ]}
              feature={{
                eyebrow: "Resilience by design",
                title: "Build a defensible security posture",
                body: "Layered controls, 24/7 monitoring and proactive testing across your environment.",
                to: "/#solutions",
                cta: "Talk to security team",
              }}
            />
            <MegaDropdown
              label="AI"
              items={[
                {
                  to: "/ai/dune-dynamics",
                  label: "Dune Dynamics",
                  description: "Applied AI for operations and decisioning.",
                  icon: Brain,
                },
                {
                  to: "/ai/provakil",
                  label: "Provakil",
                  description: "AI-powered legal intelligence platform.",
                  icon: Scale,
                },
              ]}
              feature={{
                eyebrow: "AI, productised",
                title: "Bring AI into the work that matters",
                body: "From copilots to autonomous workflows, deployed responsibly across your business.",
                to: "/#solutions",
                cta: "Explore AI practice",
              }}
            />
            <MegaDropdown
              align="right"
              label="Microsoft"
              items={[
                {
                  to: "/microsoft/d365-fo",
                  label: "D365 Finance & Operations",
                  description: "Unify finance, supply chain and operations.",
                  icon: Briefcase,
                },
                {
                  to: "/microsoft/d365-crm",
                  label: "D365 CRM",
                  description: "Sales, service and marketing in one platform.",
                  icon: Users,
                },
                {
                  to: "/microsoft/d365-bc",
                  label: "D365 Business Central",
                  description: "All-in-one ERP for growing businesses.",
                  icon: Database,
                },
                {
                  to: "/microsoft/power-bi",
                  label: "Power BI",
                  description: "Self-service analytics and dashboards.",
                  icon: BarChart3,
                },
                {
                  to: "/microsoft/power-apps",
                  label: "Power Apps",
                  description: "Build low-code business applications.",
                  icon: Layers,
                },
                {
                  to: "/microsoft/azure",
                  label: "Azure",
                  description: "Cloud infrastructure, migration and managed ops.",
                  icon: Cloud,
                },
              ]}
              feature={{
                eyebrow: "Microsoft Solutions Partner",
                title: "End-to-end Microsoft modernisation",
                body: "From Dynamics 365 to Azure, we design, implement and run your Microsoft stack.",
                to: "/#solutions",
                cta: "Explore practice",
              }}
            />
            <MegaDropdown
              label="Resources"
              align="right"
              items={[
                {
                  to: "/resources/case-studies",
                  label: "Case Studies",
                  description: "Real-world results from our client engagements.",
                  icon: BookOpen,
                },
                {
                  to: "/resources/blogs",
                  label: "Blogs",
                  description: "Insights, updates and thought leadership.",
                  icon: Newspaper,
                },
                {
                  to: "/resources/events-webinars",
                  label: "Events / Webinars",
                  description: "Upcoming and on-demand sessions.",
                  icon: CalendarDays,
                },
                {
                  to: "/resources/white-papers",
                  label: "White Papers",
                  description: "In-depth research and strategic guides.",
                  icon: FileText,
                },
                {
                  to: "/resources/glossary",
                  label: "Glossary",
                  description: "Key terms and concepts across our solutions.",
                  icon: Book,
                },
              ]}
              feature={{
                eyebrow: "Knowledge centre",
                title: "Download our latest thinking",
                body: "From case studies to white papers, explore content that helps you make informed decisions.",
                to: "/resources/white-papers",
                cta: "Browse resources",
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/people/Future-Communication-Company-UK/61571740828019/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center border border-border bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.79-4.7 4.533-4.7 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/futureukofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center border border-border bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/105360938/admin/settings/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center border border-border bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <span
              aria-label="X (coming soon)"
              className="inline-flex h-8 w-8 items-center justify-center border border-border bg-secondary text-primary cursor-not-allowed opacity-60"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center border border-border bg-secondary text-ink md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={`absolute left-0 right-0 top-full border border-border bg-white p-4 shadow-[0_24px_70px_-30px_rgba(10,26,51,0.35)] ring-1 ring-border md:hidden ${
              mobileOpen ? "block" : "hidden"
            }`}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Link
                  to="/about"
                  className="block px-3 py-2 text-sm font-semibold text-ink hover:bg-muted"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-sm font-semibold text-ink hover:bg-muted"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </div>
              {mobileSections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <div className="px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                    {section.title}
                  </div>
                  <div className="grid gap-1">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-ink hover:bg-muted"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-secondary text-primary">
                            <Icon className="h-4 w-4" />
                          </span>
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default SiteNav;
