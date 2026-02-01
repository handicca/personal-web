import fm from "front-matter";
import type { Route } from "./+types/blog-post";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useNavigate } from "react-router";
import { TagList } from "~/components/taglist";

type PostMeta = {
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
};

function normalizeMeta(raw: unknown): PostMeta {
  const meta: PostMeta = {};
  const r = raw as Record<string, unknown> | null;
  if (!r) return meta;

  if (typeof r.title === "string") meta.title = r.title;
  if (typeof r.date === "string") meta.date = r.date;
  if (typeof r.description === "string") meta.description = r.description;

  if (Array.isArray(r.tags)) {
    meta.tags = r.tags.filter(Boolean).map(String);
  } else if (typeof r.tags === "string") {
    meta.tags = r.tags
      .split(",")
      .map((t: string) => t.trim())
      .filter(Boolean);
  }

  return meta;
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const slug = params.slug;
  const res = await fetch(`/posts/${slug}.md`);

  if (!res.ok) {
    throw new Response("Post not found", { status: 404 });
  }

  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    throw new Response("Post not found", { status: 404 });
  }

  const raw = await res.text();
  const parsed = fm(raw);
  const meta = normalizeMeta(parsed.attributes);
  const markdown = parsed.body;

  return { markdown, meta } as const;
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { markdown, meta } = loaderData;
  const navigate = useNavigate();

  return (
    <article className="prose prose-invert max-w-none min-w-0">
      <title>Blog | Handicca</title>
      <meta name="description" content={meta?.description || ""} />
      <button
        onClick={() => navigate(-1)}
        className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <span className="text-xl" aria-hidden>←</span> Back to Blog
      </button>

      {meta?.title && (
        <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold">
          {meta.title}
        </h1>
      )}
      {meta?.date && (
        <p className="text-gray-400 text-sm mb-4 sm:mb-6">{meta.date}</p>
      )}
      <TagList tags={meta.tags} />

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
