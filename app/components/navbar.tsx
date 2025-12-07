import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex h-12 items-center gap-8 text-base">
        <li>
          <NavLink
            className={({ isActive }) =>
              `relative before:content-[''] before:absolute before:h-0.5 before:bg-white before:-bottom-0.5 before:transition-all before:duration-300 ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}`
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `relative before:content-[''] before:absolute before:h-0.5 before:bg-white before:-bottom-0.5 before:transition-all before:duration-300 ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}`
            }
            to={"/blog"}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
