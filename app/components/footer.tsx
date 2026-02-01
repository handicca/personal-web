import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 pt-10 text-gray-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold tracking-tight">Handika</h2>
          <p className="text-sm text-gray-400">
            Web Developer • Data Scientist
          </p>
        </div>

        <nav aria-label="Footer Social Links">
          <ul className="flex items-center gap-5">
            <li>
              <a
                href="https://github.com/handicca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors"
              >
                <RiGithubFill size={20} />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/handicca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <RiLinkedinBoxFill size={20} />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/handicca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <RiTwitterFill size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Handika. Crafted with curiosity and clean
        code.
      </div>
    </footer>
  );
}
