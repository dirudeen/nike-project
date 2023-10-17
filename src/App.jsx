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
import useDark from "./hooks/useDark";

const App = () => {
  const [sidebarIsNotActive, setSidebarIsNotActive] = useState(true);
  const { theme, toggleTheme } = useDark();

  const toggleHander = (val) => {
    setSidebarIsNotActive(val);
  };

  return (
    <main
      className={` dark:bg-slate-900 dark:text-white ${
        sidebarIsNotActive ? "relative" : "fixed inset-0 overflow-hidden"
      }`}
    >
      <Nav onToggle={toggleHander} toggleTheme={toggleTheme} theme={theme} />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero theme={theme} />
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

      <section className="padding bg-pale-blue dark:bg-inherit">
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
