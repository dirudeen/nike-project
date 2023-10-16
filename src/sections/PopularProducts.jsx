import { motion } from "framer-motion";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";


const popularTextVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 1, ease: "easeOut"},
  },
};




const PopularProducts = () => {
    const {ref, control} = useScrollReveal()
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <motion.div className="flex flex-col justify-start gap-5"
      variants={popularTextVariants}
      initial="hidden"
      animate={control}
      ref={ref}
      >

        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Projucts
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray dark:text-slate-light-gray lg:max-w-lg">
          Exprience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
