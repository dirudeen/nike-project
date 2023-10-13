

const ServiceCard = ({imgURL, label, subText}) => {
    return (
      <div className="w-full flex-1 rounded-[1.35rem] px-10 py-16 shadow-3xl dark:bg-slate-900 dark:text-white  sm:w-[21.875] sm:min-w-[21.875]">
        <div className="h-11 w-11 items-center justify-center rounded-full bg-coral-red">
          <img src={imgURL} alt={label} height={24} width={24} />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
          {label}
        </h3>
        <p className="dark:text-slate-light-gray mt-3 break-words font-montserrat text-lg leading-normal  text-slate-gray">
          {subText}
        </p>
      </div>
    );
}

export default ServiceCard;
