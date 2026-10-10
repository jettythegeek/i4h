import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalPage, { slugs } from "@/components/InternalPage";

export function generateStaticParams(){return [...slugs].map(slug=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;if(!slugs.has(slug))return{};return{title:slug.split("-").map(x=>x[0].toUpperCase()+x.slice(1)).join(" ")}}
export default async function Page({params}){const {slug}=await params;if(!slugs.has(slug))notFound();return <><Header/><InternalPage slug={slug}/><Footer/></>}
