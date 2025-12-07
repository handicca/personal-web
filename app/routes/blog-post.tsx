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

/** 2) Helper: normalize metadata hasil parse (sederhana) */
function normalizeMeta(raw: any): PostMeta {
  const meta: PostMeta = {};

  if (!raw) return meta;

  if (typeof raw.title === "string") meta.title = raw.title;
  if (typeof raw.date === "string") meta.date = raw.date;
  if (typeof raw.description === "string") meta.description = raw.description;

  // tags: bisa berupa string "tag1, tag2" atau array
  if (Array.isArray(raw.tags)) {
    meta.tags = raw.tags.filter(Boolean).map(String);
  } else if (typeof raw.tags === "string") {
    // split by comma or whitespace
    meta.tags = raw.tags
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

  // periksa content-type — Netlify/redirect SPA sering mengembalikan index.html (text/html)
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    // server mengembalikan index.html (SPA redirect) => anggap file tidak ada
    throw new Response("Post not found", { status: 404 });
  }

  const raw = await res.text();
  const parsed = fm(raw);

  const meta = normalizeMeta(parsed.attributes);
  const markdown = parsed.body;

  return {
    markdown,
    meta,
  } as const;
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { markdown, meta } = loaderData;
  const navigate = useNavigate();

  return (
    <article className="prose prose-invert max-w-none">
      <title>Blog | Handicca</title>
      <meta name="description" content={meta?.description || ""} />
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <span className="text-xl">←</span> Kembali
      </button>

      {meta?.title && <h1 className="mb-4 text-3xl font-bold">{meta.title}</h1>}
      {meta?.date && <p className="text-gray-400 text-sm mb-6">{meta.date}</p>}
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
