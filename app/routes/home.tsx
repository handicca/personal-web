import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Handicca" },
    { name: "description", content: "Handika — Web developer & data scientist building efficient systems and turning data into insights." },
  ];
}

const socialLinks = [
  { href: "https://github.com/handicca", label: "GitHub", icon: RiGithubFill },
  {
    href: "https://linkedin.com/in/handicca",
    label: "LinkedIn",
    icon: RiLinkedinBoxFill,
  },
  {
    href: "https://twitter.com/handicca",
    label: "Twitter",
    icon: RiTwitterFill,
  },
] as const;

const portfolioItems = [
  {
    title: "Web Development",
    description:
      "React, Next.js, Node.js — performant apps with clean architecture.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Data Science",
    description:
      "Statistical modeling, ML, and visualization for actionable insights.",
    tags: ["Python", "ML", "Visualization"],
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end systems from API design to intuitive UX.",
    tags: ["API", "Database", "UI/UX"],
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero / About */}
      <article className="mb-12 sm:mb-16">
        <header className="mb-6 sm:mb-8 hidden md:block">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Hello, world!
          </h1>
        </header>

        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <figure className="shrink-0 mx-auto md:mx-0 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 order-first md:order-2">
            <img
              className="w-full h-full rounded-full object-cover ring-2 ring-theme"
              src="/handicca-circle.png"
              alt="Handika profile picture"
            />
            <figcaption className="mt-4 text-center md:text-left">
              <nav aria-label="Handika's social links">
                <ul className="flex gap-4 justify-center">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-theme-muted hover:text-theme-accent transition-colors"
                        title={`${label} — opens in new tab`}
                        aria-label={label}
                      >
                        <Icon size={20} />
                        <span className="sr-only">{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </figcaption>
          </figure>

          <div className="flex-1 min-w-0 md:order-1">
            <header className="mb-3 md:hidden">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Hello, world!
              </h1>
            </header>

            <p className="text-base sm:text-lg leading-relaxed text-theme-muted dark:text-theme-subtle">
              I'm Handika, a web developer and data scientist who enjoys
              building things from both angles: designing efficient systems with
              modern code, and turning raw data into meaningful insights. I work
              with technologies like React, Next.js, Node.js, and various data
              analysis tools to create solutions that don't just work—they're
              clear, measurable, and built to scale.
            </p>
            <p className="text-base sm:text-lg leading-relaxed dark:text-theme-subtle text-theme-muted mt-4 sm:mt-5">
              I'm constantly exploring the intersection of software engineering
              and data science, because I believe the best technology emerges
              when the two complement each other. On the web side, I focus on
              performance, clean architecture, and intuitive user experience. On
              the data side, I emphasize rigorous analytical approaches—from
              statistical modeling and machine learning to visualization that
              makes findings accessible.
            </p>
          </div>
        </div>
      </article>

      {/* Portfolio / Skills Section */}
      <section aria-labelledby="portfolio-heading" className="mt-12 sm:mt-16">
        <header className="mb-6 sm:mb-8">
          <h2
            id="portfolio-heading"
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
          >
            What I Do
          </h2>
          <p className="mt-2 text-sm sm:text-base text-theme-muted">
            Areas I focus on and technologies I work with.
          </p>
        </header>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="p-5 sm:p-6 rounded-xl border border-theme bg-theme-subtle hover:bg-theme-muted transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2 text-theme">{item.title}</h3>
              <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
                {item.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" role="list">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    <span className="text-xs px-2 py-1 rounded-md bg-theme-subtle text-theme-subtle">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CTA / Links */}
      <section aria-labelledby="cta-heading" className="mt-12 sm:mt-16">
        <h2 id="cta-heading" className="sr-only">
          Get in touch
        </h2>
        <p className="text-base sm:text-lg text-theme-muted">
          Interested in collaborating or just want to chat?{" "}
          <a
            href="/blog"
            className="text-theme-accent font-medium underline underline-offset-4 hover:no-underline transition"
          >
            Read my blog
          </a>{" "}
          or find me on social media above.
        </p>
      </section>
    </>
  );
}
