import React from "react";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const [NavbarOpen, setNavbarOpen] = React.useState(false);

  // NavBar menu list
  const navlist = [
    { key: "home", name: "Acasă" },
    { key: "menu", name: "Meniu" },
    { key: "contact", name: "Contactează-ne" },
    { key: "admin", name: "Admin" },
  ];

  return (
    <nav className="w-full z-10 fixed flex flex-wrap items-center px-2 py-3 bg-white mb-3">
      <div className="container px-1 mx-auto flex flex-wrap items-center">
        <button
          className=" w-full relative flex justify-end lg:w-auto lg:block lg:justify-end text-black cursor-pointer text-xl leading-none py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!NavbarOpen)}
        >
          <FaBars />
        </button>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (NavbarOpen ? " flex" : " hidden")
          }
          id="burgerlist"
        >
          <ul className="min-h-screen lg:min-h-0 text-right flex justify-start lg:justify-end flex-col lg:flex-row list-none ml-auto ">
            {navlist.map((item, index) => (
              <li className="nav-item" id={index}>
                <a
                  className="block items-center text-xl font-base leading-normal text-black hover:underline hover:decoration-yellow-400"
                  href={"/#" + item.key}
                  data-to-scrollspy-id={item.key}
                  onClick={() => setNavbarOpen(false)}
                >
                  <span className="text-right  ml-2">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
