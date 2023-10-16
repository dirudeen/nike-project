import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";

const containerVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: { easing: "easeOut", duration: 1 },
  },
};

const ServiceCard = ({ imgURL, label, subText }) => {
  const {ref, control} = useScrollReveal()
  return (
    <motion.div
      className="w-full flex-1 rounded-[1.35rem] px-10 py-16 shadow-3xl dark:bg-slate-900 dark:text-white dark:shadow-dark  sm:w-[21.875] sm:min-w-[21.875]"
      initial="hidden"
      animate={control}
      variants={containerVariants}
      ref={ref}
    >
      <div className="h-11 w-11 items-center justify-center rounded-full bg-coral-red">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray  dark:text-slate-light-gray">
        {subText}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
