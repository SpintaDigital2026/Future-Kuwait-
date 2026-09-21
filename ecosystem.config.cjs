/** PM2 config for Hostinger VPS. Usage: `pm2 start ecosystem.config.cjs` */
module.exports = {
  apps: [
    {
      name: "future-kuwait",
      cwd: __dirname,
      script: ".output/server/index.mjs",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",
        PORT: "3000",
      },
    },
  ],
};
