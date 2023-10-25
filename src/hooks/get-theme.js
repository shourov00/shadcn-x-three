import { useTheme } from "next-themes";

export const useCurrentTheme = () => {
  const { theme } = useTheme();
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  if (theme === "light" || (theme === "system" && systemTheme === "light")) {
    return "light";
  } else if (theme === "dark" || (theme === "system" && systemTheme === "dark")) {
    return "dark";
  }

  return systemTheme;
};
