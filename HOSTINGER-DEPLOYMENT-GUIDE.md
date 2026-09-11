# Hostinger Deployment & Project Export Guide

**Project:** Future Kuwait website  
**Stack:** TanStack Start, React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui  
**Backend:** Lovable Cloud (Supabase) — auth, database, storage, CMS content  
**Current published URL:** https://futurekuwait.sashfutureworks.com

---

## 1. What your team needs to know about the stack

This is a **modern full-stack React application**, not a WordPress/static HTML site. It requires:

- **Node.js runtime** for server-side rendering (SSR) and server functions
- **A server/hosting environment that supports TanStack Start / Vite SSR**, OR
- **Cloudflare Workers** (the current default edge runtime)

The database, authentication, file storage, and CMS content stay on the existing Lovable Cloud backend. Only the frontend application code moves to Hostinger.

---

## 2. Recommended Hostinger hosting options

### Option A: Hostinger Cloud Hosting or VPS (recommended)

Best fit for a TanStack Start app with SSR.

**Why:** You get a Linux server with full control to install Node.js, run the production build, and serve the app with a process manager like PM2.

**Suggested plan:** Cloud Startup or higher, or a VPS with at least 2 vCPU / 4 GB RAM / 50 GB SSD.

### Option B: Hostinger Shared Hosting

**Not recommended.** Shared hosting is built for PHP/WordPress/static sites. Running a Node.js SSR app on shared hosting is unreliable and usually unsupported.

### Option C: Stay on Lovable + connect a custom domain

If the goal is simply to use a Hostinger-registered domain, the easiest path is to keep hosting on Lovable and point the domain's DNS records to Lovable. This avoids moving the app.

---

## 3. Project export steps

### Step 1: Download the project files

From the Lovable editor:

1. Open the project.
2. Go to **Settings** or the project menu (top-left / sidebar).
3. Look for **Export project**, **Download source**, or **Git repository** options.
4. Download the ZIP, or connect/push to a Git repository (GitHub/GitLab) that your team can clone.

**What to export:**

- All source files (`src/`, `public/`, `package.json`, `vite.config.ts`, `tsconfig.json`, etc.)
- `.env` file (contains public Supabase keys only — safe to share, but do not expose service-role keys)

**Important:** Do not share `SUPABASE_SERVICE_ROLE_KEY` or any admin credentials. These should stay private and be set as environment variables on the server only.

### Step 2: Confirm environment variables

The project already has a `.env` file with these public values:

```env
VITE_SUPABASE_URL=https://zsjhwghrhiiqftqygzlt.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_kI3w8-6Hn9NKI_IGZQ8_GA_dyQXoIY0
VITE_SUPABASE_PROJECT_ID=zsjhwghrhiiqftqygzlt
```

On the Hostinger server, set these as environment variables. Do not hard-code secrets into the source code.

If your team needs a service-role key for server-side admin tasks, it must be obtained from the Lovable Cloud/backend admin panel and kept secret.

---

## 4. Hostinger deployment checklist

### Server setup

- [ ] Provision Hostinger Cloud Hosting or VPS with Ubuntu/Debian
- [ ] Install Node.js LTS (v20 or later recommended)
- [ ] Install a process manager: `pm2` or `systemd`
- [ ] Install a reverse proxy: `nginx` or use Hostinger's built-in tools
- [ ] Configure firewall to allow HTTP (80) and HTTPS (443)

### Application build

- [ ] Clone or upload the project files to the server
- [ ] Run `npm install` or `bun install` (the project uses `bun` by default)
- [ ] Run the production build command (check `package.json` scripts; likely `npm run build` or `bun run build`)
- [ ] Verify the build output folder (commonly `dist/` or `.output/`)

### Runtime & environment

- [ ] Set environment variables on the server:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`
  - `VITE_SUPABASE_PROJECT_ID`
  - `NODE_ENV=production`
  - Any additional secrets your team adds
- [ ] Start the app with the process manager
- [ ] Confirm the app is running on localhost/port (default usually `http://localhost:3000` or `8080`)

### Domain & SSL

- [ ] Point the Hostinger domain's DNS A record to the server IP
- [ ] Configure Nginx reverse proxy to forward domain traffic to the app port
- [ ] Install SSL certificate (Let's Encrypt via Hostinger or Certbot)
- [ ] Force HTTPS redirect

### Post-deployment verification

- [ ] Homepage loads at the custom domain
- [ ] Navigation and internal links work
- [ ] CMS-managed pages (blogs, case studies, events, white papers, glossary) load
- [ ] Admin sign-in at `/auth` works
- [ ] Image uploads and PDF downloads work
- [ ] Contact/CTA forms or mailto links work
- [ ] Mobile responsiveness checked
- [ ] Social media header links open correctly

### Auth/callback update (if needed)

- [ ] If the domain changes, update any OAuth redirect URIs in the backend/auth provider settings
- [ ] Update the site URL in the backend project settings to the new domain

---

## 5. Important caveats

1. **Edge runtime vs. VPS:** The current app is configured for a serverless/edge runtime. Moving to a traditional VPS may require small config changes in `vite.config.ts` or the server entry. Your AI engineer should review the TanStack Start deployment docs for the target environment.

2. **Database and CMS stay put:** Do not migrate the database to Hostinger. The app connects to the existing Lovable Cloud backend. Moving the database would require a separate migration project.

3. **Do not expose service-role keys:** The service-role key bypasses all security. It must only exist as a server environment variable, never in the frontend code or Git history.

4. **Build before deploying:** This app requires a build step. You cannot simply upload the `src/` folder and expect it to run.

5. **Keep Lovable as a backup:** Until Hostinger is fully tested and live, keep the Lovable published site running. You can switch the domain DNS when ready.

---

## 6. Quick reference: useful commands

```bash
# Install dependencies
bun install

# Build for production
bun run build

# Start production server (check package.json for exact script)
bun run start

# Or with Node
npm install
npm run build
npm run start
```

---

## 7. Next steps

1. **Confirm the Hostinger plan** your team wants to use (Cloud/VPS recommended).
2. **Export the project** from Lovable (download ZIP or push to Git).
3. **Share this document** with your web team / AI engineer.
4. **Keep the Lovable Cloud backend active** — the new Hostinger frontend will continue using it.

If your team hits specific errors during build or deployment, share the exact error message and we can troubleshoot further.
