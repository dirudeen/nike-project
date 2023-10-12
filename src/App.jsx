import { useCallback, useState } from "react";
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
  const [sidebarIsActive, setSidebarIsActive] = useState(null);


  const toggleHander = useCallback((val) => {
    setSidebarIsActive(val)
  },[]);

  return (
    <main className={` ${!sidebarIsActive ? "fixed overflow-hidden inset-0": "relative"}`}>
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
