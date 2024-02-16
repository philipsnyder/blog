import { Link } from "react-router-dom";
import { navConst } from "../../constants";
import { INavLink } from "../../models";

export function Nav() {
  return (
    <>
      <nav className="fixed z-[1] top-0 left-0 w-full h-12 bg-white text-xl font-bold flex justify-center items-center">
        {navConst.map((nav: INavLink, index: number) => (
          <Link key={index} className="ml-6 first:ml-0" to={nav.to}>
            {nav.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
