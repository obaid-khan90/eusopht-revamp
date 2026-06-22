import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

/**
 * Singleton Postgres pool + Drizzle client.
 *
 * In dev, Next.js hot-reload re-evaluates modules, which would otherwise
 * open a new pool on every change and exhaust connections. Stash the pool
 * on `globalThis` so it survives reloads.
 */
const globalForDb = globalThis as unknown as { __pgPool?: Pool };

const pool =
  globalForDb.__pgPool ??
  new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== 'production') {
  globalForDb.__pgPool = pool;
}

export const db = drizzle(pool, { schema });
