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
    <div className="min-w-0">
      <title>Blog | Handicca</title>
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Blog
        </h1>
        <p className="text-sm sm:text-base text-theme-muted mt-2">
          A collection of articles about web development, data science, and
          technical notes.
        </p>
      </header>

      <nav aria-label="Daftar artikel">
        <ul className="divide-y divide-theme">
          {posts.map((post) => (
            <li key={post.slug} className="py-6 sm:py-8 first:pt-0 last:pb-0">
              <article className="group">
                <header>
                  <h2 className="text-lg sm:text-xl font-semibold">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-current hover:text-theme-accent underline-offset-4 hover:underline transition-colors text-theme"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.date && (
                    <time
                      dateTime={post.date}
                      className="text-sm text-theme-muted block mt-1"
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
                  <p className="text-sm sm:text-base text-theme-subtle mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}

                <footer className="mt-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm text-theme-subtle hover:text-theme-accent transition-colors"
                    aria-label={`Baca artikel ${post.title}`}
                  >
                    Read more
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
