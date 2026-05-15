import { Pool } from "pg";

export function createPostgresPool() {
  const connectionString = process.env.POSTGRES_URL;

  if (!connectionString) {
    throw new Error("Missing POSTGRES_URL environment variable.");
  }

  return new Pool({
    connectionString,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
    ssl: connectionString.includes("localhost")
      ? undefined
      : { rejectUnauthorized: false },
  });
}
