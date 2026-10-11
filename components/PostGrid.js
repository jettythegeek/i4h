import Image from "next/image";
import Link from "next/link";

export default function PostGrid({ posts }) {
  return <div className="post-grid">{posts.map(post => <Link className="post-card" href={`/blog/${post.slug}`} key={post.slug}><div className="post-image"><Image src={post.image} alt={post.imageAlt || ""} fill className="cover" sizes="(max-width: 720px) 100vw, 33vw" /></div><div><span>{post.date}</span><h2>{post.title}</h2><p>{post.excerpt}</p><strong>View More</strong></div></Link>)}</div>;
}
