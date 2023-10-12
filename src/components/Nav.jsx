import { useState } from "react";
import { headerLogo } from "../assets/images/index";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import NavigationLinks from "./NavigationLinks";

const logoVariant = {
  hidden: {
    x: -200
  },

  visible: {
    x: 0,
    transition: {delay: 0.3}
  }
  
}




const Nav = ({ onToggle }) => {
  const [isActive, setIsActive] = useState(false);

  const sidebarToggleHandler = (isFalse = false) => {
    
    if(isFalse) {
      setIsActive(false)
    } else {
      setIsActive(prevState => !prevState)
    }
    onToggle(isActive);
  };

  return (
    <header className="padding-x absolute z-10 w-full py-8 ">
      <nav className="max-container flex items-center justify-between">
        <motion.a 
        variants={logoVariant}
        initial="hidden"
        animate="visible"
        href="/">
          <img src={headerLogo} alt="Nike Logo" width={120} height={40} />
        </motion.a>
        <NavigationLinks isActive={isActive} onToggleHandler={sidebarToggleHandler} navLinks={navLinks} />

        <motion.div
          className="z-[100] hidden cursor-pointer max-lg:relative max-lg:block"
          onClick={() => sidebarToggleHandler()}
          role="button"
          initial={{
            x: 800,
          }}
          animate={{
            x: 0,
          }}
          transition={{ delay: 0.5 }}
        >
          <motion.img
            src={isActive ? close : hamburger}
            alt="hamburger-menu"
            width={30}
            height={40}
          />
        </motion.div>
      </nav>
    </header>
  );
};

export default Nav;
