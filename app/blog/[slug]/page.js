import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarBlank, MagnifyingGlass, User } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostBody from "@/components/PostBody";
import { getPost, getPosts, getPostSlugs } from "@/lib/sanity";

export async function generateStaticParams(){return getPostSlugs()}
export async function generateMetadata({params}){const {slug}=await params;const post=await getPost(slug);return post?{title:post.title,description:post.excerpt,openGraph:{title:post.title,description:post.excerpt,images:post.image?[{url:post.image,alt:post.imageAlt||post.title}]:[]}}:{}}

function BlogSidebar({current,posts}){
  return <aside className="blog-sidebar" aria-label="Blog sidebar"><section className="blog-widget"><h2>Search</h2><form className="blog-search" action="/blog"><input name="search" type="search" placeholder="Search here" aria-label="Search the blog"/><button aria-label="Submit search"><MagnifyingGlass size={21}/></button></form></section><section className="blog-widget"><h2>Category</h2><ul className="category-list"><li><span>Kids In Africa</span><b>1</b></li><li><span>Women &amp; skills</span><b>1</b></li><li><span>Foods</span><b>1</b></li></ul></section><section className="blog-widget"><h2>Recent Post</h2><div className="recent-posts">{posts.filter(post=>post.slug!==current).map(post=><Link href={`/blog/${post.slug}`} key={post.slug}><strong>{post.title}</strong><span>{post.date}</span></Link>)}</div></section><section className="blog-widget"><h2>Tags</h2><div className="blog-tags">{["Skilling","Kids","Charity","Donation","Kids & women","Fundraising","Education"].map(tag=><span key={tag}>{tag}</span>)}</div></section></aside>;
}

export default async function Post({params}){const {slug}=await params;const [post,posts]=await Promise.all([getPost(slug),getPosts()]);if(!post)notFound();return <><Header/><main className="internal-main"><section className="page-hero blog-detail-hero"><Image src={post.image} alt={post.imageAlt||""} fill priority className="cover"/><div className="page-hero-shade"/><div className="wrap page-hero-copy"><span className="eyebrow">Blog / Events</span><h1>{post.title}</h1><p><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/blog">Blog</Link></p></div></section><section className="section blog-detail-section"><div className="wrap blog-detail-layout"><article className="blog-article-card"><div className="blog-featured-image"><Image src={post.image} alt={post.imageAlt||""} fill className="cover"/></div><div className="blog-article-content"><div className="post-meta"><span><User size={20} weight="duotone"/>By {post.author}</span><time dateTime={post.publishedAt}><CalendarBlank size={20} weight="duotone"/>{post.date}</time></div><h1>{post.title}</h1><p className="post-intro">{post.excerpt}</p><PostBody body={post.body}/></div></article><BlogSidebar current={post.slug} posts={posts}/></div></section></main><Footer/></>}
