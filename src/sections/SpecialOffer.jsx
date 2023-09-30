import { offer } from "../assets/images";


const SpecialOffer = () => {
    return (
        <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} height={687} width={773} alt="Special-Offer" className="object-contain" />
            </div>

            
        </section>
    );
}

export default SpecialOffer;
