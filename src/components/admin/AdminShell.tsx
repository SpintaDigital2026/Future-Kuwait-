import { Link, Outlet, useRouter } from "@tanstack/react-router";
import { LayoutDashboard, FileText, LogOut, BookOpen, Newspaper, CalendarDays, FileDown, BookA, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

export function AdminShell() {
  const router = useRouter();
  const qc = useQueryClient();

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    router.navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="flex min-h-screen bg-muted/20">
      <aside className="hidden w-60 shrink-0 flex-col border-r bg-background lg:flex">
        <div className="border-b px-5 py-4">
          <Link to="/admin" className="flex items-center gap-2 text-sm font-semibold">
            <BookOpen className="h-4 w-4" /> Admin
          </Link>
        </div>
        <nav className="flex-1 space-y-0.5 p-3 text-sm">
          <NavItem to="/admin" icon={LayoutDashboard} label="Dashboard" exact />
          <NavItem to="/admin/case-studies" icon={FileText} label="Case Studies" />
          <NavItem to="/admin/blogs" icon={Newspaper} label="Blogs" />
          <NavItem to="/admin/events" icon={CalendarDays} label="Events & Webinars" />
          <NavItem to="/admin/white-papers" icon={FileDown} label="White Papers" />
          <NavItem to="/admin/glossary" icon={BookA} label="Glossary" />
          <NavItem to="/admin/users" icon={Users} label="Admin Users" />
        </nav>
        <div className="border-t p-3">
          <button onClick={signOut} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </aside>
      <main className="flex-1">
        <header className="border-b bg-background px-4 py-3 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-sm font-medium text-muted-foreground">Future Kuwait CMS</h1>
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">View site →</Link>
          </div>
        </header>
        <div className="px-4 py-6 lg:px-8 lg:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function NavItem({ to, icon: Icon, label, exact }: { to: string; icon: typeof LayoutDashboard; label: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact }}
      activeProps={{ className: "bg-muted text-foreground" }}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
    >
      <Icon className="h-4 w-4" /> {label}
    </Link>
  );
}
