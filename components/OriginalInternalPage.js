import InternalPageInteractions from "@/components/InternalPageInteractions";

const ORIGIN = "https://internetforhumanity.org";

export const topLevelRoutes = new Set([
  "about",
  "what-we-do",
  "impact",
  "partner",
  "donate",
  "contact",
  "blog",
  "success-stories",
  "privacy-policy",
  "terms-of-service",
]);

export const blogRoutes = new Set([
  "from-connectivity-to-a-development-project",
  "what-a-first-computer-lab-means",
  "why-community-managed-labs-last",
]);

function absolutizeAssetUrls(markup) {
  return markup
    .replace(/\b(src|srcset|imagesrcset)=(['"])\//gi, `$1=$2${ORIGIN}/`)
    .replace(/\bposter=(['"])\//gi, `poster=$1${ORIGIN}/`)
    .replaceAll(`${ORIGIN}/about#`, "/about#")
    .replaceAll(`${ORIGIN}/what-we-do#`, "/what-we-do#")
    .replaceAll(`${ORIGIN}/`, "/");
}

async function getOriginalPage(pathname) {
  const response = await fetch(`${ORIGIN}/${pathname}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Unable to load the original /${pathname} page (${response.status})`);
  }

  const document = await response.text();
  const main = document.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0];
  const stylesheets = [...document.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)]
    .map((match) => new URL(match[1], ORIGIN).href);
  const title = document.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "Internet for Humanity";
  const bodyClass = document.match(/<body\b[^>]*class=["']([^"']*)["']/i)?.[1] ?? "";
  const htmlClass = document.match(/<html\b[^>]*class=["']([^"']*)["']/i)?.[1] ?? "";

  if (!main) {
    throw new Error(`The original /${pathname} page did not contain a main landmark`);
  }

  return { bodyClass: `${htmlClass} ${bodyClass}`.trim(), main: absolutizeAssetUrls(main), stylesheets, title };
}

export async function getOriginalTitle(pathname) {
  return (await getOriginalPage(pathname)).title;
}

export default async function OriginalInternalPage({ pathname }) {
  const { bodyClass, main, stylesheets } = await getOriginalPage(pathname);

  return <>
    {stylesheets.map((href) => <link key={href} rel="stylesheet" href={href} precedence="original-site" />)}
    <div className={`${bodyClass} original-internal-page`} dangerouslySetInnerHTML={{ __html: main }} />
    <InternalPageInteractions />
  </>;
}
