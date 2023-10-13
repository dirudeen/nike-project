import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";


const SpecialOffer = () => {
    return (
      <section className="max-container flex items-center gap-10 max-xl:flex-col-reverse">
        <div className="flex-1">
          <img
            src={offer}
            height={687}
            width={773}
            alt="Special-Offer"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
            <span className="text-coral-red">Special</span> Offer
          </h2>
          <p className="info-text dark:text-slate-light-gray mt-4  lg:max-w-lg">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premium selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="info-text dark:text-slate-light-gray mt-6  lg:max-w-lg">
            Navigate a reaalm of possibilites designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional
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
        </div>
      </section>
    );
}

export default SpecialOffer;
