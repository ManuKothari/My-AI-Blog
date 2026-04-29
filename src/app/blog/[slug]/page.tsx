import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostMeta } from "@/lib/posts";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = await getPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.date,
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = await getPostMeta(slug);
  if (!meta) notFound();

  const { default: Post } = await import(
    `@/../content/posts/${slug}.mdx`
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-sm text-blue-600">
        &larr; All articles
      </Link>
      <header className="mt-6 mb-10 border-b pb-8">
        <h1 className="text-4xl font-bold leading-tight">{meta.title}</h1>
        <div className="flex items-center gap-3 mt-4 text-sm text-zinc-500">
          <time>
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {meta.tags?.length ? (
            <>
              <span>·</span>
              <span>{meta.tags.join(", ")}</span>
            </>
          ) : null}
        </div>
      </header>
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <Post />
      </article>
    </main>
  );
}
