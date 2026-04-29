import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on production AI, RAG, and LLM systems.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const posts = await getAllPosts();
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 border-b pb-8">
        <Link href="/" className="text-sm text-blue-600">
          &larr; Home
        </Link>
        <h1 className="text-4xl font-bold mt-4">Blog</h1>
        <p className="text-zinc-500 mt-2">
          Notes on shipping production AI.
        </p>
      </header>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <time className="text-sm text-zinc-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="text-2xl font-bold mt-2 mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              {post.description}
            </p>
            {post.tags?.length ? (
              <div className="flex gap-2 mt-3 text-xs text-zinc-500">
                {post.tags.map((t) => (
                  <span key={t} className="uppercase tracking-wide">
                    #{t}
                  </span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
