import { FC, useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

const ThemeToggler: FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <>
      {theme === "dark" ? (
        <SunIcon
          onClick={toggleTheme}
          className="cursor-pointer h-8 dark:text-white"
        />
      ) : (
        <MoonIcon onClick={toggleTheme} className="cursor-pointer h-8" />
      )}
    </>
  );
};

export default ThemeToggler;
