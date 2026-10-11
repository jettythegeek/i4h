import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return <main style={{ fontFamily: "sans-serif", maxWidth: 720, margin: "80px auto", padding: 24 }}><h1>Connect Sanity Studio</h1><p>Add your Sanity project ID and dataset to <code>.env.local</code>, then restart the development server.</p><pre>NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id{"\n"}NEXT_PUBLIC_SANITY_DATASET=production</pre></main>;
  }
  return <NextStudio config={config} />;
}
