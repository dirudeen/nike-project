import { useEffect, useState } from "react";

export default function useDark() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  let initialRender = 1
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light" && initialRender === 2) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    initialRender = 2
  }, [theme, initialRender]);

  return { toggleTheme };
}
