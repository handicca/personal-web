import { Link } from "react-router";
import type { Route } from "./+types/blog";

export async function clientLoader() {
  const res = await fetch("/posts/index.json");
  if (!res.ok) throw new Error("Manifest not found");
  const posts = await res.json();
  return { posts };
}

type Post = {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
};

export default function BlogPage({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData as { posts: Post[] };
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-gray-400 mt-2">
          Koleksi tulisan tentang web development, data science, dan catatan
          teknis.
        </p>
      </header>

      <nav aria-label="Daftar artikel">
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="group">
                <header>
                  <h2 className="text-xl font-semibold">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-current hover:text-white underline-offset-4 hover:underline transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.date && (
                    <time
                      dateTime={post.date}
                      className="text-sm text-gray-400 block mt-1"
                    >
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </header>

                {post.excerpt && (
                  <p className="text-gray-300 mt-2">{post.excerpt}</p>
                )}

                <footer className="mt-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm text-gray-300 hover:text-white"
                    aria-label={`Baca artikel ${post.title}`}
                  >
                    Baca selengkapnya
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
