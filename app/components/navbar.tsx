import { NavLink } from "react-router";
import { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative block py-2 text-base before:content-[''] before:absolute before:h-0.5 before:bg-white before:-bottom-0.5 before:left-0 before:transition-all before:duration-300 sm:py-0 sm:inline-block sm:before:left-0 sm:before:right-0 ${
      isActive ? "before:w-full font-medium" : "before:w-0 hover:before:w-full"
    }`;

  return (
    <header className="relative">
      <nav
        className="flex items-center justify-between py-4 sm:py-0 sm:h-14"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between w-full sm:w-auto">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity"
          >
            Handika
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 -mr-2 sm:hidden rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="main-nav-menu"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="hidden sm:flex sm:items-center sm:gap-8 sm:text-base">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink className={linkClass} to={to} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav overlay — inert when closed to prevent focus + a11y conflict */}
      <div
        id="main-nav-menu"
        className={`fixed inset-0 z-40 sm:hidden transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
        {...(!menuOpen && { inert: true })}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gray-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-xs h-full bg-gray-950 border-l border-white/10 shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-20 px-6">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  className={linkClass}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
