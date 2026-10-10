import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarBlank, MagnifyingGlass, User } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/data/site";

export function generateStaticParams(){return posts.map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const post=posts.find(p=>p.slug===slug);return post?{title:post.title,description:post.excerpt}:{}}

function PostContent({post}){
  if(post.slug!=="2024-training-year-highlights") return post.body.map((text,index)=><p key={index}>{text}</p>);
  return <><h2>{post.body[0]}</h2><div className="post-highlight-list">{post.body.slice(1,4).map((text,index)=><p key={index}>{text}</p>)}</div><h2>{post.body[4]}</h2><div className="post-breakdown">{post.body.slice(5,13).map((text,index)=><p key={index}>{text}</p>)}</div><div className="post-closing">{post.body[13]}</div></>;
}

function BlogSidebar({current}){
  return <aside className="blog-sidebar" aria-label="Blog sidebar"><section className="blog-widget"><h2>Search</h2><form className="blog-search" action="/blog"><input name="search" type="search" placeholder="Search here" aria-label="Search the blog"/><button aria-label="Submit search"><MagnifyingGlass size={21}/></button></form></section><section className="blog-widget"><h2>Category</h2><ul className="category-list"><li><span>Kids In Africa</span><b>1</b></li><li><span>Women &amp; skills</span><b>1</b></li><li><span>Foods</span><b>1</b></li></ul></section><section className="blog-widget"><h2>Recent Post</h2><div className="recent-posts">{posts.filter(post=>post.slug!==current).map(post=><Link href={`/blog/${post.slug}`} key={post.slug}><strong>{post.title}</strong><span>{post.date}</span></Link>)}</div></section><section className="blog-widget"><h2>Tags</h2><div className="blog-tags">{["Skilling","Kids","Charity","Donation","Kids & women","Fundraising","Education"].map(tag=><span key={tag}>{tag}</span>)}</div></section></aside>;
}

export default async function Post({params}){const {slug}=await params;const post=posts.find(item=>item.slug===slug);if(!post)notFound();return <><Header/><main className="internal-main"><section className="page-hero blog-detail-hero"><Image src={post.image} alt="" fill priority className="cover"/><div className="page-hero-shade"/><div className="wrap page-hero-copy"><span className="eyebrow">Blog / Events</span><h1>{post.title}</h1><p><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/blog">Blog</Link></p></div></section><section className="section blog-detail-section"><div className="wrap blog-detail-layout"><article className="blog-article-card"><div className="blog-featured-image"><Image src={post.image} alt="" fill className="cover"/></div><div className="blog-article-content"><div className="post-meta"><span><User size={20} weight="duotone"/>By Admin</span><time><CalendarBlank size={20} weight="duotone"/>{post.date}</time></div><h1>{post.title}</h1><p className="post-intro">{post.excerpt}</p><PostContent post={post}/></div></article><BlogSidebar current={post.slug}/></div></section></main><Footer/></>}
