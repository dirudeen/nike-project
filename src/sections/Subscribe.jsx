import { motion } from "framer-motion";
import Button from "../components/Button";
import useScrollReveal from "../hooks/useScrollReveal";
import { useState } from "react";

const textContainerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.6, type: "spring", stiffness: 250, damping: 10 },
  },
};

const inputContainerVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.8, type: "spring", stiffness: 250, damping: 10 },
  },
};

const Subscribe = () => {
  const { ref, control } = useScrollReveal();
  const [isFocus, setIsFocus] = useState(false);
  const [enterValue, setEnterValue] = useState("");
  return (
    <section
      className="max-container flex items-center justify-between gap-10 max-lg:flex-col"
      id="contact-us"
      data-testid="subscribe-section"
    >
      <motion.h3
        className="font-palanquin  text-4xl font-bold leading-[65px] lg:max-w-md"
        variants={textContainerVariants}
        animate={control}
        initial="hidden"
        ref={ref}
      >
        Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </motion.h3>
      <motion.form
        className={`flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border lg:max-w-[40%] ${
          isFocus ? " sm:border-coral-red" : " sm:border-slate-gray"
        }`}
        variants={inputContainerVariants}
        initial="hidden"
        animate={control}
        ref={ref}
        role="form"
      >
        <input
          type="text"
          placeholder="Subscribe@nike.com"
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          value={enterValue}
          onChange={(e) => setEnterValue(e.target.value)}
          className="input"
        />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </motion.form>
    </section>
  );
};

export default Subscribe;
