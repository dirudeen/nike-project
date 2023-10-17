import { motion } from "framer-motion";

const Button = ({ label, icon, bgClr, borderClr, textClr, fullWidth }) => {
  return (
    <motion.button
      className={`flex items-center
      justify-center
      gap-2 rounded-full border-2 px-7 py-4 font-montserrat text-lg   leading-none outline-none ${
        fullWidth && "w-full"
      }
    ${
      bgClr
        ? `${bgClr} ${borderClr} ${textClr}`
        : "border-coral-red bg-coral-red text-white"
    }
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      whileFocus={{ border: "2px solid white" }}
    >
      {label}
      {icon && (
        <img
          src={icon}
          alt="arrow-right"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </motion.button>
  );
};

export default Button;
