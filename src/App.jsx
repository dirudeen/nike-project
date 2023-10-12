import { useState } from "react";
import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  SuperQuality,
  SpecialOffer,
  Services,
  Subscribe,
} from "./sections/index";

const App = () => {
  const [sidebarIsNotActive, setSidebarIsNotActive] = useState(true);



  const toggleHander = (val) => {
    setSidebarIsNotActive(val);
  };

  return (
    <main
      className={` ${
        sidebarIsNotActive ?  "relative" : "fixed inset-0 overflow-hidden" 
      }`}
    >
      <Nav onToggle={toggleHander} />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>

      <section className="padding-x w-full py-16 sm:py-32">
        <Subscribe />
      </section>

      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
