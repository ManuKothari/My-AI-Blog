import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8 font-sans text-gray-900">
      <header className="mb-12 border-b pb-8 mt-12">
        <h1 className="text-4xl font-bold mb-2">Manu Kothari</h1>
        <p className="text-xl text-gray-600">Senior Machine Learning Engineer | AI & RAG Specialist</p>
        <div className="flex gap-4 mt-4 text-sm text-blue-600">
          <a href="https://linkedin.com/in/manukothari" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ManuKothari" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed text-gray-700">
          I build production-grade AI systems, specializing in Large Language Models, Natural Language Processing, and Retrieval-Augmented Generation (RAG). Currently engineering machine learning solutions at Apple, with previous award-winning AI implementations at Myntra. I write about taking AI from prototype to production.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
        <article className="border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm text-gray-500 font-medium tracking-wide uppercase">Tutorial</span>
          <h3 className="text-xl font-bold mt-2 mb-3">
            <Link href="/blog/multimodal-rag-gemini" className="hover:text-blue-600 transition-colors">
              Building a Multimodal RAG Pipeline for Semantic Image Search using Gemini 1.5 Pro
            </Link>
          </h3>
          <p className="text-gray-700 mb-4">
            Learn how to build a semantic photo retrieval system by combining Gemini 1.5 Pro&apos;s multimodal vision capabilities with vector embeddings and cosine similarity search.
          </p>
          <Link href="/blog/multimodal-rag-gemini" className="text-blue-600 font-medium">Read Article &rarr;</Link>
        </article>
      </section>
    </main>
  );
}