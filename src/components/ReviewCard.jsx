import { motion } from "framer-motion";
import { star } from "../assets/icons";
import useScrollReveal from "../hooks/useScrollReveal";

const containerVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.7,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  const { ref, control } = useScrollReveal();
  return (
    <motion.div
      className="flex flex-col items-center justify-center dark:bg-slate-900 dark:text-white"
      variants={containerVariant}
      animate={control}
      initial="hidden"
      ref={ref}
    >
      <img
        src={imgURL}
        alt="customer"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />

      <p className="info-text mt-6 max-w-sm text-center  dark:text-slate-light-gray">
        {feedback}
      </p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray  dark:text-slate-light-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold">
        {customerName}
      </h3>
    </motion.div>
  );
};

export default ReviewCard;
