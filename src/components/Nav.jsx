import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={120} height={40} />
        </a>

        <ul className="flex flex-1 justify-center gap-16 max-lg:hidden ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger-menu" width={30} height={40} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
