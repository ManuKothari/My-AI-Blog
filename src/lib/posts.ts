import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export async function getAllPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await fs.readFile(
        path.join(POSTS_DIR, `${slug}.mdx`),
        "utf8",
      );
      const { data } = matter(raw);
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    }),
  );
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostMeta(slug: string): Promise<PostMeta | null> {
  try {
    const raw = await fs.readFile(
      path.join(POSTS_DIR, `${slug}.mdx`),
      "utf8",
    );
    const { data } = matter(raw);
    return { slug, ...(data as Omit<PostMeta, "slug">) };
  } catch {
    return null;
  }
}
