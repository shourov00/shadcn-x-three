import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { useTheme } from "@/components/theme-provider.jsx";
import { Icons } from "@/Icons/Icons";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const handleThemeChange = () => {
    if (theme === "light" || (theme === "system" && systemTheme === "light")) setTheme("dark");
    else if (theme === "dark" || (theme === "system" && systemTheme === "dark")) setTheme("light");
  };

  return (
    <Button
      onClick={handleThemeChange}
      variant={"outline"}
      size={"icon"}
      className={"min-h-[2.5rem] min-w-[2.5rem] rounded-3xl"}
    >
      <Sun
        className={
          "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        }
      />
      <Icons.moon
        className={
          "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        }
      />
      <span className="sr-only select-none">Toggle theme</span>
    </Button>
  );
};
