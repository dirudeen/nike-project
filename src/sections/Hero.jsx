import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { motion } from "framer-motion";

const HeroTextVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
};

const Hero = ({ theme }) => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="max-container flex min-h-full w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <motion.div
        className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5"
        variants={HeroTextVariant}
        initial="hidden"
        animate="visible"
      >
        <p className="font-montserrat text-xl text-coral-red ">
          Our Summer Collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[4.5rem] max-sm:leading-[5.125rem]">
          <span className="relative pr-10 lg:z-40 xl:whitespace-nowrap xl:bg-white dark:xl:bg-slate-900">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>

        <p className="mb-16 mt-6 font-montserrat text-lg leading-8 text-slate-gray dark:text-slate-light-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life
        </p>

        <Button label="Shop Now" icon={arrowRight} />

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p className="font-palanquin text-4xl font-bold">{stats.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray dark:text-slate-light-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={` relative flex flex-1  items-center justify-center bg-center dark:bg-slate-dark-600 max-xl:py-40 xl:min-h-screen ${
          theme === "light" ? "bg-hero" : ""
        }`}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain"
        />

        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
                theme={theme}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
