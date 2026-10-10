import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OriginalInternalPage, { blogRoutes, getOriginalTitle } from "@/components/OriginalInternalPage";

export function generateStaticParams() {
  return [...blogRoutes].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!blogRoutes.has(slug)) return {};
  return { title: await getOriginalTitle(`blog/${slug}`) };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  if (!blogRoutes.has(slug)) notFound();

  return <>
    <Header />
    <OriginalInternalPage pathname={`blog/${slug}`} />
    <Footer />
  </>;
}
