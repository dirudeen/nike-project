import { star } from "../assets/icons";


const PopularProductCard = ({imgURL, price, name ,rating}) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
           <img 
           src={imgURL} alt={name} className="w-[12.5rem] h-[12.5rem]" />
           <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="text-slate-gray font-montserrat text-xl leading-normal dark:text-slate-light-gray">{rating}</p>
           </div>
           <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin ">{name}</h3>
           <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">{price}</p>
        </div>
    );
}

export default PopularProductCard;
