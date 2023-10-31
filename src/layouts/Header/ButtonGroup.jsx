import { Button } from "@/components/ui/button.jsx";
import { Github } from "lucide-react";
import { ModeToggle } from "@/layouts/Theme/ModeToggle.jsx";
import ThemeButton from "@/layouts/Header/ThemeButton.jsx";

const ButtonGroup = () => {
  return (
    <>
      <Button
        onClick={() => window.open("https://github.com/shourov00/shadcn-x-three", "_blank")}
        variant={"outline"}
        size={"icon"}
        className={"btn-rounded"}
      >
        <Github className={"btn-icon"} />
      </Button>
      <ModeToggle />
      <ThemeButton />
    </>
  );
};

export default ButtonGroup;
