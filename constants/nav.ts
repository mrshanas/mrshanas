import { ReactNode } from "react";

interface nav {
  url: string;
  to: string;
}

export const navLinks: nav[] = [
  {
    url: "Expriences",
    to: "/experiences",
  },
  {
    url: "Projects",
    to: "/projects",
  },
  {
    url: "About Me",
    to: "/about",
  },
];
