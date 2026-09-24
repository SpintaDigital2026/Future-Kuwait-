import { Link } from "@tanstack/react-router";
import futureLogo from "@/assets/future-logo.png.asset.json";

const SOLUTION_LINKS = [
  { to: "/microsoft/azure", label: "Microsoft" },
  { to: "/cybersecurity/barracuda", label: "Cyber Security" },
  { to: "/customer-experience/xebo", label: "Customer Experience" },
  { to: "/ai/dune-dynamics", label: "AI & Automation" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={futureLogo.url} alt="Future" width={140} height={36} className="h-8 w-auto" />
          </div>
          <p className="mt-4 max-w-xs">
            Future Communications Company — engineering intelligent digital transformation for
            modern enterprises across the UK.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
            Solutions
          </div>
          <ul className="space-y-2">
            {SOLUTION_LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
            Company
          </div>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <a href="/#industries" className="hover:text-white">
                Industries
              </a>
            </li>
            <li>
              <a href="/#approach" className="hover:text-white">
                Approach
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-white/40 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
          <p>© {new Date().getFullYear()} Future Communications Company. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em]">United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
