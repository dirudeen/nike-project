const Button = ({ label, icon, bgClr, borderClr, textClr }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full px-7 py-4 font-montserrat text-lg  leading-none border-2
    ${bgClr ? `${bgClr} ${borderClr} ${textClr}` : "bg-coral-red border-coral-red text-white"}
      `}
    >
      {label}
      {icon && (
        <img
          src={icon}
          alt="arrow-right"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
