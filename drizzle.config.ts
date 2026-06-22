import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'drizzle-kit';

// Load .env the same way Next.js does, since drizzle-kit runs outside the
// Next.js runtime (see Next.js docs: "Loading Environment Variables with @next/env").
loadEnvConfig(process.cwd());

export default defineConfig({
  schema: './db/schema.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
