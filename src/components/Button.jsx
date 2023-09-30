const Button = ({ label, icon }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 font-montserrat leading-none text-lg bg-coral-red rounded-full text-white ">
      {label}
      <img src={icon} alt="arrow-right" className="h-5 w-5 rounded-full ml-2" />
    </button>
  );
};

export default Button;
