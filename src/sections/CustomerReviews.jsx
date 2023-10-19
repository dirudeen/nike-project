import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";

const textVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const CustomerReviews = () => {
  const { ref, control } = useScrollReveal();
  return (
    <section className="max-container">
      <motion.h3
        className="text-center font-palanquin text-4xl font-bold"
        variants={textVariant}
        animate={control}
        initial="hidden"
        ref={ref}
      >
        What Our <span className="text-coral-red">Customers </span>Says?
      </motion.h3>
      <motion.p
        className="info-text m-auto mt-4 max-w-lg text-center  dark:text-slate-light-gray"
        variants={textVariant}
        animate={control}
        initial="hidden"
        ref={ref}
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </motion.p>

      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
