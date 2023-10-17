import { motion } from "framer-motion";
import { star } from "../assets/icons";
import useScrollReveal from "../hooks/useScrollReveal";

const popularCardVariant = {
  hidden: {
    scale: 0.5,
    rotate: -30,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const PopularProductCard = ({ imgURL, price, name, rating }) => {
  const { ref, control } = useScrollReveal();
  return (
    <motion.div
      className="flex w-full flex-1 flex-col max-sm:w-full"
      variants={popularCardVariant}
      initial="hidden"
      animate={control}
      ref={ref}
    >
      <img src={imgURL} alt={name} className="h-[12.5rem] w-[12.5rem]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-light-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal ">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
