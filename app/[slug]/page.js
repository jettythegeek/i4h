import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OriginalInternalPage, { getOriginalTitle, topLevelRoutes } from "@/components/OriginalInternalPage";

export function generateStaticParams() {
  return [...topLevelRoutes].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!topLevelRoutes.has(slug)) return {};
  return { title: await getOriginalTitle(slug) };
}

export default async function InternalPage({ params }) {
  const { slug } = await params;
  if (!topLevelRoutes.has(slug)) notFound();

  return <>
    <Header />
    <OriginalInternalPage pathname={slug} />
    <Footer />
  </>;
}
