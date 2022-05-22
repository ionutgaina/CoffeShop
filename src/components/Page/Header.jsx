import React from "react";
import { FaBars, FaCoffee } from "react-icons/fa";

export const Header = () => {
  const [NavbarOpen, setNavbarOpen] = React.useState(false);

  // NavBar menu list
  const navlist = [
    { key: "", name: "Home" },
    { key: "menu", name: "Menu" },
    { key: "contact", name: "Contact" },
    { key: "admin", name: "Admin" },
  ];

  // navbar item
  function nav_item(item, index) {
    return (
      <li className="nav-item" id={index}>
        <a
          className="block items-center text-xl font-base leading-normal text-black hover:underline hover:decoration-primary"
          href={"/" + item.key}
          data-to-scrollspy-id={item.key}
          onClick={() => setNavbarOpen(false)}
        >
          <span className="text-right  ml-2">{item.name}</span>
        </a>
      </li>
    );
  }

  return (
    <nav className="w-full z-10 fixed flex flex-wrap items-center px-2 py-3 bg-white mb-3">
      <div className="container px-1 mx-auto flex flex-wrap items-center">
        <div className="w-full relative flex justify-between lg:w-auto lg:block lg:justify-end">
          <a href="/">
            <FaCoffee
              color="#EFC3A4"
              size={"2xl"}
              className="inline-block h-6 mr-1"
            />
            <p>Unnamed coffeshop</p>
          </a>
          <button
            className=" w-full relative flex justify-end lg:w-auto lg:block lg:justify-end text-black cursor-pointer text-xl leading-none py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!NavbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (NavbarOpen ? " flex" : " hidden")
          }
          id="burgerlist"
        >
          <ul className="min-h-screen lg:min-h-0 text-right flex justify-start lg:justify-end flex-col lg:flex-row list-none ml-auto ">
            {navlist.map((item, index) => nav_item(item, index))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
