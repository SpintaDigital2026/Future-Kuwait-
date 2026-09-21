# Hostinger deployment

This is a **TanStack Start (Node.js SSR)** app. It cannot run as a WordPress site or as a folder of HTML files. The CMS/auth/files stay on **Supabase**; Hostinger only runs the website process.

**Do not use Hostinger Shared / Web Hosting / WordPress.** Use one of:

| Plan | How you run the app |
|---|---|
| **Hostinger Node.js** (hPanel “Websites → Node.js”) | Recommended if your plan includes it |
| **VPS / Cloud** with Ubuntu | Use PM2 + Nginx |

---

## What you need before starting

- A Hostinger **Node.js** or **VPS** plan (not shared PHP)
- Domain DNS you can change (A record → Hostinger IP)
- SSH access (VPS) or hPanel Node.js app (Node hosting)
- These values (already in your local `.env`; copy them onto the server):

```env
NODE_ENV=production
SUPABASE_PROJECT_ID=zsjhwghrhiiqftqygzlt
SUPABASE_URL=https://zsjhwghrhiiqftqygzlt.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_kI3w8-6Hn9NKI_IGZQ8_GA_dyQXoIY0
VITE_SUPABASE_PROJECT_ID=zsjhwghrhiiqftqygzlt
VITE_SUPABASE_URL=https://zsjhwghrhiiqftqygzlt.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_kI3w8-6Hn9NKI_IGZQ8_GA_dyQXoIY0
```

Optional, **server-only**, never put in Git:

```env
SUPABASE_SERVICE_ROLE_KEY=   # only needed to create admin users from the app
```

Get the service-role key from the [Supabase dashboard](https://supabase.com/dashboard) → Project Settings → API. It bypasses database security.

`VITE_*` values are baked in at **build** time. If you change them, you must rebuild.

---

## Path A — Hostinger Node.js (hPanel)

1. In hPanel open **Websites → Node.js** (or **Website list → your domain → Node.js**).
2. Create an application:
   - **Application type:** `nitro`
   - **Node version:** 20 or 22
   - **Build script:** `build`
   - **Output directory:** `.output`
   - **Entry file:** `server/index.mjs`
3. Connect the GitHub repo `SpintaDigital2026/Future-Kuwait-` (branch `main`), or upload the project (include `package.json`, `src/`, `public/`, **not** `node_modules`).
4. Paste the env vars above into the Node.js app environment.
5. Deploy / Rebuild. Hostinger will run `npm install` then `npm run build` and start `.output/server/index.mjs`.
6. Point the domain at this app and enable SSL in hPanel.

If hPanel has no “nitro” type, pick **Custom / Node.js** and set:
- Start command: `node .output/server/index.mjs`
- Port: use Hostinger’s `PORT` (the app already reads `PORT`).

---

## Path B — Hostinger VPS

SSH in as root (or a sudo user). Replace `/var/www/future-kuwait` and `example.com`.

```bash
# 1. Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx
sudo npm i -g pm2

# 2. App files
sudo mkdir -p /var/www/future-kuwait
sudo chown "$USER":"$USER" /var/www/future-kuwait
cd /var/www/future-kuwait
git clone https://github.com/SpintaDigital2026/Future-Kuwait- .
cp .env.example .env
nano .env   # paste the values listed above

# 3. Build
npm ci
npm run build

# 4. Process manager (keeps the site up after reboot)
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup

# 5. Nginx + HTTPS
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/future-kuwait
sudo nano /etc/nginx/sites-available/future-kuwait   # replace example.com
sudo ln -s /etc/nginx/sites-available/future-kuwait /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

Later updates:

```bash
cd /var/www/future-kuwait
git pull
npm ci
npm run build
pm2 restart future-kuwait
```

---

## After the site is live

Do these in the [Supabase dashboard](https://supabase.com/dashboard) for project `zsjhwghrhiiqftqygzlt`:

1. **Authentication → URL configuration**
   - Site URL = `https://your-domain.com`
   - Redirect URLs include `https://your-domain.com/**` and `https://your-domain.com/admin`
2. **Storage → `resources` bucket**
   - If uploads from `/admin` fail, add the new domain to CORS allowed origins.
3. Sign in at `https://your-domain.com/auth` and confirm `/admin` and `/resources/blogs`.

---

## What this repo already does for Hostinger

- Production Nitro preset is **`node-server`** (not Cloudflare Workers).
- `npm run build` writes `.output/`
- `npm start` runs `node .output/server/index.mjs`
- Site images live in `public/__l5e/` and are copied into the build
- `ecosystem.config.cjs` and `deploy/nginx.conf.example` are for Path B

---

## Checks after deploy

- [ ] Homepage loads over HTTPS
- [ ] Images (logo, heroes, solution cards) load
- [ ] `/resources/blogs`, case studies, events, glossary, white papers load (empty is OK if CMS has no rows)
- [ ] `/auth` sign-in works
- [ ] Admin image/PDF upload works (needs the `resources` bucket)

---

## If something fails

| Symptom | Likely cause |
|---|---|
| Site is a Hostinger “coming soon” or PHP page | Wrong plan / document root; this app is not `public_html` HTML |
| Build succeeds, start crashes | Missing `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY` on the **server** |
| Pages load, images 404 | `public/` was not uploaded / build did not include `public/__l5e` |
| Admin cannot create users | Missing `SUPABASE_SERVICE_ROLE_KEY` |
| Login redirects to old domain | Supabase Site URL / Redirect URLs not updated |
