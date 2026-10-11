export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-10-10";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
);
