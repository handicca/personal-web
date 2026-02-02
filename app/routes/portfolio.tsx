import type { Route } from "./+types/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Handicca" },
    { name: "description", content: "Selected projects and work by Handika — web development, data science, and full-stack solutions." },
  ];
}

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Built a scalable e-commerce platform with Next.js and Node.js, handling 10K+ daily active users. Features include real-time inventory management, payment integration, and analytics dashboard.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    year: "2025",
    link: "#",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Developed a machine learning model to predict customer churn with 89% accuracy. Implemented feature engineering, model selection, and deployment pipeline using Python and scikit-learn.",
    tags: ["Python", "ML", "scikit-learn", "Docker"],
    year: "2024",
    link: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Created an interactive dashboard for monitoring business metrics in real-time. Built with React, D3.js, and WebSocket for live data streaming and visualization.",
    tags: ["React", "D3.js", "WebSocket", "Redis"],
    year: "2024",
    link: "#",
  },
  {
    title: "API Gateway Service",
    description:
      "Designed and implemented a microservices API gateway with rate limiting, authentication, and request routing. Reduced latency by 40% and improved system reliability.",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    year: "2023",
    link: "#",
  },
  {
    title: "Data Pipeline Automation",
    description:
      "Automated ETL processes for processing 1M+ records daily. Built data pipelines with Apache Airflow, reducing manual work by 80% and improving data quality.",
    tags: ["Python", "Airflow", "SQL", "AWS"],
    year: "2023",
    link: "#",
  },
  {
    title: "Mobile-First Web App",
    description:
      "Developed a progressive web app with offline-first architecture. Achieved 95+ Lighthouse scores across all metrics with optimized performance and accessibility.",
    tags: ["React", "PWA", "TypeScript", "Tailwind"],
    year: "2023",
    link: "#",
  },
] as const;

export default function Portfolio() {
  return (
    <>
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Portfolio
        </h1>
        <p className="text-sm sm:text-base text-theme-muted mt-2">
          A selection of projects I've worked on — from web applications to data science solutions.
        </p>
      </header>

      <section aria-label="Projects">
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group border-b border-theme pb-8 sm:pb-10 last:border-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h2 className="text-lg sm:text-xl font-semibold text-theme">
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-theme-accent transition-colors underline-offset-4 hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <time className="text-sm text-theme-muted shrink-0">
                  {project.year}
                </time>
              </div>

              <p className="text-sm sm:text-base text-theme-subtle leading-relaxed mb-3">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2" role="list">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="text-xs px-2 py-1 rounded-md bg-theme-subtle text-theme-subtle hover:bg-theme-hover transition">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-theme">
        <p className="text-base sm:text-lg text-theme-muted">
          Interested in working together?{" "}
          <a
            href="/"
            className="text-theme-accent font-medium underline underline-offset-4 hover:no-underline transition"
          >
            Get in touch
          </a>
          .
        </p>
      </footer>
    </>
  );
}
