import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Plus, ShieldCheck, ShieldOff, Trash2, UserPlus } from "lucide-react";
import {
  addAdminInvite,
  grantAdminRole,
  listAdminInvites,
  listUsersWithRoles,
  removeAdminInvite,
  revokeAdminRole,
} from "@/lib/admin-users.functions";

export const Route = createFileRoute("/_authenticated/admin/users")({
  component: AdminUsersPage,
});

function AdminUsersPage() {
  const usersFn = useServerFn(listUsersWithRoles);
  const invitesFn = useServerFn(listAdminInvites);
  const addInviteFn = useServerFn(addAdminInvite);
  const removeInviteFn = useServerFn(removeAdminInvite);
  const grantFn = useServerFn(grantAdminRole);
  const revokeFn = useServerFn(revokeAdminRole);
  const qc = useQueryClient();

  const users = useQuery({ queryKey: ["admin", "users"], queryFn: () => usersFn() });
  const invites = useQuery({ queryKey: ["admin", "invites"], queryFn: () => invitesFn() });

  const [email, setEmail] = useState("");

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ["admin", "users"] });
    qc.invalidateQueries({ queryKey: ["admin", "invites"] });
  };

  const addMut = useMutation({
    mutationFn: (e: string) => addInviteFn({ data: { email: e } }),
    onSuccess: () => { setEmail(""); invalidate(); },
    onError: (err: Error) => alert(err.message),
  });
  const removeInviteMut = useMutation({ mutationFn: (id: string) => removeInviteFn({ data: { id } }), onSuccess: invalidate });
  const grantMut = useMutation({ mutationFn: (userId: string) => grantFn({ data: { userId } }), onSuccess: invalidate });
  const revokeMut = useMutation({
    mutationFn: (userId: string) => revokeFn({ data: { userId } }),
    onSuccess: invalidate,
    onError: (err: Error) => alert(err.message),
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Admin users</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage who can access the CMS. Pre-authorize emails so the admin role is granted on first sign-up.
        </p>
      </div>

      {/* Pre-authorize section */}
      <section className="rounded-lg border bg-background">
        <div className="border-b px-5 py-3">
          <h3 className="text-sm font-medium">Pre-authorized admin emails</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">Anyone who signs up with these emails automatically becomes an admin.</p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email.trim()) addMut.mutate(email.trim()); }}
          className="flex gap-2 px-5 py-4 border-b"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="person@company.com"
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={addMut.isPending}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            <Plus className="h-4 w-4" /> Add
          </button>
        </form>
        <ul className="divide-y">
          {invites.isLoading && <li className="px-5 py-4 text-sm text-muted-foreground">Loading…</li>}
          {!invites.isLoading && (invites.data?.length ?? 0) === 0 && (
            <li className="px-5 py-4 text-sm text-muted-foreground">No pre-authorized emails.</li>
          )}
          {invites.data?.map((inv) => (
            <li key={inv.id} className="flex items-center justify-between px-5 py-3 text-sm">
              <span className="font-medium">{inv.email}</span>
              <button
                onClick={() => { if (confirm(`Remove ${inv.email} from the invite list?`)) removeInviteMut.mutate(inv.id); }}
                className="rounded p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                aria-label="Remove"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Existing users */}
      <section className="rounded-lg border bg-background">
        <div className="border-b px-5 py-3">
          <h3 className="text-sm font-medium">All accounts</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">Grant or revoke admin access for users who have already signed up.</p>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Roles</th>
              <th className="px-5 py-3 font-medium">Joined</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.isLoading && <tr><td className="px-5 py-6 text-muted-foreground" colSpan={4}>Loading…</td></tr>}
            {users.data?.map((u) => {
              const isAdmin = u.roles.includes("admin");
              return (
                <tr key={u.id}>
                  <td className="px-5 py-3 font-medium">{u.email || "—"}</td>
                  <td className="px-5 py-3">
                    {u.roles.length === 0 ? (
                      <span className="text-muted-foreground">user</span>
                    ) : (
                      u.roles.map((r) => (
                        <span key={r} className="mr-1 inline-flex rounded-full bg-muted px-2 py-0.5 text-xs">{r}</span>
                      ))
                    )}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{new Date(u.created_at).toLocaleDateString("en-GB")}</td>
                  <td className="px-5 py-3 text-right">
                    {isAdmin ? (
                      <button
                        onClick={() => { if (confirm(`Revoke admin from ${u.email}?`)) revokeMut.mutate(u.id); }}
                        className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs hover:bg-muted"
                      >
                        <ShieldOff className="h-3.5 w-3.5" /> Revoke admin
                      </button>
                    ) : (
                      <button
                        onClick={() => grantMut.mutate(u.id)}
                        className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs hover:bg-muted"
                      >
                        <ShieldCheck className="h-3.5 w-3.5" /> Make admin
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

// Avoid tree-shaking unused icon import warning
void UserPlus;
