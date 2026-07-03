import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),

  // NODE_ENV: z.enum(["development", "production", "test"]),

  // DATABASE_URL: z.string(),

  // REDIS_URL: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(parsed.error.format());

  process.exit(1);
}

export const env = parsed.data;
