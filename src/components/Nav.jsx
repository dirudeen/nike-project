import { useState } from "react";
import { headerLogo } from "../assets/images/index";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = ({onToggle}) => {
  const [isActive, setIsActive] = useState(false);

  const sidebarToggleHandler = () => {
    setIsActive(prevState => !prevState)
    onToggle(isActive)
  }
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={120} height={40} />
        </a>
        {isActive && <div className="lg:hidden fixed w-screen h-[200%] bg-slate-800 opacity-60 mx-[-4rem]"></div>}
        <ul className={`flex flex-1 lg:justify-center gap-16 ${isActive ? "sidebar" : "max-lg:hidden"}`}>
          {navLinks.map((link) => (
            <li key={link.label} onClick={() => sidebarToggleHandler()}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block max-lg:relative z-[100] cursor-pointer"
        onClick={sidebarToggleHandler}
        role="button">
          <img src={isActive ? close : hamburger} alt="hamburger-menu" width={30} height={40} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
