import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { useTheme } from "next-themes";
import { useCurrentTheme } from "@/hooks/get-theme.js";
import { Icons } from "@/Icons/Icons.jsx";

export const ModeToggle = () => {
  const { setTheme } = useTheme();
  const currentTheme = useCurrentTheme();

  const handleThemeChange = () => {
    if (currentTheme === "light") setTheme("dark");
    else if (currentTheme === "dark") setTheme("light");
  };

  return (
    <Button onClick={handleThemeChange} variant={"outline"} size={"icon"} className={"btn-rounded"}>
      <Sun className={"btn-icon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"} />
      <Icons.moon
        className={
          "btn-icon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        }
      />
      <span className="sr-only select-none">Toggle theme</span>
    </Button>
  );
};
