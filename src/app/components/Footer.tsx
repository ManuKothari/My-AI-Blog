import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-6 pb-12 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} Manu Kothari ·{" "}
      <Link href="/blog" className="hover:underline">
        Blog
      </Link>{" "}
      ·{" "}
      <a href="/rss.xml" className="hover:underline">
        RSS
      </a>
    </footer>
  );
}
