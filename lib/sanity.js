import { createClient, defineQuery } from "next-sanity";
import { posts as fallbackPosts } from "@/data/site";
import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const postsQuery = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, publishedAt, author, categories,
  "image": mainImage.asset->url, "imageAlt": mainImage.alt
}`);

const postQuery = defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, excerpt, publishedAt, author, categories,
  body[]{..., _type == "image" => {..., "asset": asset->{url}}},
  "image": mainImage.asset->url, "imageAlt": mainImage.alt
}`);

const slugsQuery = defineQuery(`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`);
const fallbackImage = "/images/chs/home-work.jpeg";

function formatPost(post) {
  return {
    ...post,
    author: post.author || "Admin",
    image: post.image || fallbackImage,
    imageAlt: post.imageAlt || post.title,
    date: post.publishedAt
      ? new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(post.publishedAt))
      : "",
  };
}

export async function getPosts() {
  if (!client) return fallbackPosts;
  try {
    const posts = await client.fetch(postsQuery, {}, { next: { revalidate: 60, tags: ["post"] } });
    return posts.length ? posts.map(formatPost) : fallbackPosts;
  } catch (error) {
    console.error("Unable to load Sanity posts; using local fallback.", error);
    return fallbackPosts;
  }
}

export async function getPost(slug) {
  if (!client) return fallbackPosts.find(post => post.slug === slug) || null;
  try {
    const post = await client.fetch(postQuery, { slug }, { next: { revalidate: 60, tags: ["post", `post:${slug}`] } });
    return post ? formatPost(post) : fallbackPosts.find(item => item.slug === slug) || null;
  } catch (error) {
    console.error(`Unable to load Sanity post "${slug}"; using local fallback.`, error);
    return fallbackPosts.find(post => post.slug === slug) || null;
  }
}

export async function getPostSlugs() {
  if (!client) return fallbackPosts.map(({ slug }) => ({ slug }));
  try {
    const slugs = await client.fetch(slugsQuery, {}, { next: { revalidate: 60, tags: ["post"] } });
    return slugs.length ? slugs : fallbackPosts.map(({ slug }) => ({ slug }));
  } catch {
    return fallbackPosts.map(({ slug }) => ({ slug }));
  }
}
