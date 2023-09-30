

const ServiceCard = ({imgURL, label, subText}) => {
    return (
        <div className="flex-1 sm:w-[21.875] sm:min-w-[21.875] w-full rounded-[1.35rem] shadow-3xl px-10 py-16">
            <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} alt={label} height={24} width={24} />
            </div>
            <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subText}</p>
        </div>
    );
}

export default ServiceCard;
