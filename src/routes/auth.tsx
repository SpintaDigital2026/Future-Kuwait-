import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { adminExists, bootstrapFirstAdmin } from "@/lib/case-studies.functions";

export const Route = createFileRoute("/auth")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Sign in — FCC Admin" },
      { name: "description", content: "Sign in to the Future Communications Company admin area to manage enquiries, case studies, and resources." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const check = useServerFn(adminExists);
  const bootstrap = useServerFn(bootstrapFirstAdmin);
  const { data } = useQuery({ queryKey: ["admin-exists"], queryFn: () => check() });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup" | "bootstrap">("signin");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => { if (data.user) navigate({ to: "/admin", replace: true }); });
  }, [navigate]);

  useEffect(() => {
    if (data && !data.exists) setMode("bootstrap");
  }, [data]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError(null); setNotice(null);
    try {
      if (mode === "bootstrap") {
        await bootstrap({ data: { email, password } });
      } else if (mode === "signup") {
        const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (signUpErr) throw signUpErr;
        if (!signUpData.session) {
          setNotice("Account created. If email confirmation is required, please confirm from your inbox, then sign in.");
          return;
        }
        navigate({ to: "/admin", replace: true });
        return;
      }
      const { error: signInErr } = await supabase.auth.signInWithPassword({ email, password });
      if (signInErr) throw signInErr;
      navigate({ to: "/admin", replace: true });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sign in failed");
    } finally { setBusy(false); }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm rounded-lg border bg-background p-6 shadow-sm">
        <h1 className="text-xl font-semibold">
          {mode === "bootstrap" ? "Create first admin" : mode === "signup" ? "Admin sign up" : "Admin sign in"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {mode === "bootstrap"
            ? "No admin exists yet. Create the first admin account."
            : mode === "signup"
              ? "Create your account with a pre-authorized admin email."
              : "Sign in to manage Resources content."}
        </p>
        {mode !== "bootstrap" && (
          <div className="mt-5 grid grid-cols-2 rounded-md border bg-muted/30 p-1 text-sm" aria-label="Auth mode">
            <button
              type="button"
              onClick={() => { setMode("signin"); setError(null); setNotice(null); }}
              className={`rounded px-3 py-2 font-medium ${mode === "signin" ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => { setMode("signup"); setError(null); setNotice(null); }}
              className={`rounded px-3 py-2 font-medium ${mode === "signup" ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              Sign up
            </button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-muted-foreground">Email</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2 text-sm" />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-muted-foreground">Password</span>
            <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2 text-sm" />
          </label>
          {error && <p className="text-xs text-destructive">{error}</p>}
          {notice && <p className="text-xs text-muted-foreground">{notice}</p>}
          <button type="submit" disabled={busy} className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
            {busy ? "Working…" : mode === "bootstrap" ? "Create admin & sign in" : mode === "signup" ? "Sign up" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
