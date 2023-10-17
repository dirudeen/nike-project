import { useEffect, useState } from "react";
import { moon, sunlight } from "../assets/icons";
const ToggleSwitcher = ({ toggleTheme, theme }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      return setIsChecked(true);
    }
  }, [theme]);

  const changeHandler = () => {
    setIsChecked((prevState) => !prevState);
    toggleTheme();
  };

  return (
    <div className="relative flex items-center justify-center">
      <input
        type="checkbox"
        id="themeToggle"
        className="hidden"
        checked={isChecked}
        onChange={changeHandler}
      />
      <label
        htmlFor="themeToggle"
        className="relative block h-8 w-16 cursor-pointer rounded-full bg-gray-400 transition duration-300 ease-in-out"
      >
        <span
          className={`absolute left-1 top-1 flex 
          h-6 w-6 
          transform items-center
          justify-center rounded-full bg-white
          transition-transform ${isChecked ? "translate-x-[2rem] " : ""}`}
        >
          <img
            src={!isChecked ? sunlight : moon}
            alt="theme"
            width={18}
            height={18}
          />
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitcher;
