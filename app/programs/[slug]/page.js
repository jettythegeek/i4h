import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { programs } from "@/data/site";

export function generateStaticParams(){return programs.map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const p=programs.find(x=>x.slug===slug);return p?{title:p.title,description:p.text}:{}}
export default async function Program({params}){const {slug}=await params;const p=programs.find(x=>x.slug===slug);if(!p)notFound();return <><Header/><main className="internal-main"><section className="page-hero"><Image src={p.image} alt="" fill priority className="cover"/><div className="page-hero-shade"/><div className="wrap page-hero-copy"><span className="eyebrow">Since: {p.since}</span><h1>{p.title}</h1><p>{p.text}</p></div></section></main><Footer/></>}
