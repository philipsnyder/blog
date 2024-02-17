import { Link } from "react-router-dom";
import { navConst } from "../../constants";
import { INavLink } from "../../models";

export function Nav() {
  return (
    <>
      <nav className="flex items-center justify-center h-12">
        {navConst.map((nav: INavLink, index: number) => (
          <Link
            key={index}
            className="ml-6 first:ml-0 text-xl font-bold"
            to={nav.to}
          >
            {nav.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
