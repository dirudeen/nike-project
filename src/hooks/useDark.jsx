import { useEffect, useState } from "react";

export default function useDark() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });
  const[initialRender, setInitialRender] = useState(false);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setInitialRender(true)
    localStorage.setItem("theme", newTheme);
  };
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light" && initialRender) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    
  }, [theme, initialRender]);

  return { toggleTheme };
}
