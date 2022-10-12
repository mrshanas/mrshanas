import { FC, useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

const ThemeToggler: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      {theme === "dark" ? (
        <SunIcon
          onClick={toggleTheme}
          className="cursor-pointer tranisition-all text-white h-8"
        />
      ) : (
        <MoonIcon
          onClick={toggleTheme}
          className="cursor-pointer transition-all h-8"
        />
      )}
    </>
  );
};

export default ThemeToggler;
