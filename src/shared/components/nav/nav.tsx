import { Link } from "react-router-dom";
import { navConst } from "../../constants";
import { INavLink } from "../../models";
import { useViewPort } from "../../custom-hooks";
import Menu from "@mui/icons-material/Menu";
import { useState } from "react";
import { Box } from "@mui/material";
import Clear from "@mui/icons-material/Clear";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { width } = useViewPort();
  const breakpoint = 620;

  function handleMenuClick() {
    if (!menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      {width < breakpoint ? (
        <div className="flex justify-end mx-8 h-14 items-center">
          {!menuOpen ? (
            <Menu sx={{ fontSize: 40 }} onClick={handleMenuClick}></Menu>
          ) : (
            <nav className="fixed bg-[#fff] w-full h-full top-0 left-0 z-10">
              <div className="flex justify-end m-8">
                <Clear sx={{ fontSize: 40 }} onClick={handleMenuClick}></Clear>
              </div>
              <div className="flex flex-col items-center">
                {navConst.map((nav: INavLink, index: number) => (
                  <Link
                    key={index}
                    className="text-4xl mt-8 first:mt-0 font-black"
                    to={nav.to}
                    onClick={handleMenuClick}
                  >
                    {nav.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      ) : (
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
      )}
    </>
  );
}
