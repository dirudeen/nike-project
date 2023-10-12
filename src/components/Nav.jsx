import { useState } from "react";
import { headerLogo } from "../assets/images/index";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = ({ onToggle }) => {
  const [isActive, setIsActive] = useState(false);

  const sidebarToggleHandler = (setFalse = false) => {
    if(setFalse) {
      setIsActive(false)
    } else {
      setIsActive(prevState => !prevState)
    }
    onToggle(isActive);
  };

  return (
    <header className="padding-x absolute z-10 w-full py-8 ">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={120} height={40} />
        </a>
        {isActive && (
          <div className="fixed mx-[-4rem] h-[200%] w-screen bg-slate-800 opacity-60 lg:hidden"></div>
        )}
        <ul
          className={`flex flex-1 gap-16 lg:justify-center ${
            isActive ? "sidebar" : "max-lg:hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} onClick={() => sidebarToggleHandler(true)}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div
          className="z-[100] hidden cursor-pointer max-lg:relative max-lg:block"
          onClick={() => sidebarToggleHandler()}
          role="button"
        >
          <img
            src={isActive ? close : hamburger}
            alt="hamburger-menu"
            width={30}
            height={40}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
