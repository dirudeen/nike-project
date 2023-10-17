import { motion } from "framer-motion";
const NavigationLinks = ({ isActive, navLinks, onToggleHandler }) => {
  const clickHandler = () => {
    if (isActive) {
      onToggleHandler(true);
    }
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <>
      {isActive && (
        <div
          className="fixed mx-[-4rem] h-[200%] w-screen bg-slate-800 opacity-60 lg:hidden"
          onClick={() => onToggleHandler(true)}
        ></div>
      )}
      <motion.ul
        className={`flex flex-1 gap-16 max-lg:dark:bg-slate-800 lg:justify-center ${
          isActive ? "sidebar" : "sidebar-In"
        }`}
        variants={linkVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link) => (
          <li key={link.label} onClick={clickHandler}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default NavigationLinks;
