import { useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/future-logo.png.asset.json";
import { CONTACT_EMAIL, telUrl, whatsappUrl } from "@/lib/contact";
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
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
              className="inline-flex h-8 w-8 items-center justify-center border border-border bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
            <a
              href={telUrl()}
              aria-label="Call"
              className="inline-flex h-8 w-8 items-center justify-center border border-border bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1L6.6 10.8z" />
              </svg>
            </a>
            <a
              href={whatsappUrl("Hello FCC — I would like to speak with an expert.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-8 w-8 items-center justify-center border border-border bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.4A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.2-.5-.3z" />
              </svg>
            </a>
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
