import { motion } from "framer-motion";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import useScrollReveal from "../hooks/useScrollReveal";

const textContainerVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

const ImageContainerVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

const SpecialOffer = () => {
  const { ref, control } = useScrollReveal();
  return (
    <section className="max-container flex items-center gap-10 max-xl:flex-col-reverse">
      <motion.div
        className="flex-1"
        variants={ImageContainerVariants}
        animate={control}
        initial="hidden"
        ref={ref}
      >
        <img
          src={offer}
          height={687}
          width={773}
          alt="Special-Offer"
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="flex flex-col"
        variants={textContainerVariants}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4 dark:text-slate-light-gray  lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premium selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 dark:text-slate-light-gray  lg:max-w-lg">
          Navigate a reaalm of possibilites designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button label="Shop Now" icon={arrowRight} />
          <Button
            label="Learn More"
            bgClr="bg-white"
            borderClr="border-slate-grey"
            textClr="text-slate-gray"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
