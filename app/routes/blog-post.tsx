import fm from "front-matter";
import type { Route } from "./+types/blog-post";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useNavigate } from "react-router";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const slug = params.slug;
  const res = await fetch(`/posts/${slug}.md`);

  if (!res.ok) {
    throw new Response("Post not found", { status: 404 });
  }

  const raw = await res.text();
  const parsed = fm(raw);

  return {
    markdown: parsed.body,
    meta: parsed.attributes,
  };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { markdown, meta } = loaderData;
  const navigate = useNavigate();

  return (
    <article className="prose prose-invert max-w-none">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <span className="text-xl">←</span> Kembali
      </button>

      {meta?.title && <h1 className="mb-4 text-3xl font-bold">{meta.title}</h1>}
      {meta?.date && <p className="text-gray-400 text-sm mb-6">{meta.date}</p>}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
