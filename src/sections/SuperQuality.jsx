import { motion } from "framer-motion";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import useScrollReveal from "../hooks/useScrollReveal";

const textContainerVariant = {
  hidden: {
    x: -50,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 1, ease: "easeOut" }
  }
}

const imageContainerVariant = {
  hidden: {
    x: 50,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 1, ease: "easeOut" }
  }
}

const SuperQuality = () => {
  const {ref, control} = useScrollReveal()
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <motion.div className="flex flex-col"
      variants={textContainerVariant}
      initial="hidden"
      animate={control}
      ref={ref}
      >
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="info-text dark:text-slate-light-gray mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your exprience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text dark:text-slate-light-gray mt-6  lg:max-w-lg">
          Our dedication to details and excellence ensures your satisfaction
        </p>

        <div className="mt-6">
          <Button label="View details" icon={null} />
        </div>
      </motion.div>
      <motion.div className=" flex flex-1 items-center justify-center"
      initial="hidden"
      animate={control}
      variants={imageContainerVariant}
      ref={ref}
      >
        <img
          src={shoe8}
          alt="Shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
