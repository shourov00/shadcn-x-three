import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config.js";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Paintbrush } from "lucide-react";
import { Drawer } from "vaul";
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer.jsx";
import Customizer from "@/layouts/Theme/Customizer.jsx";

const ThemeButton = () => {
  const [config] = useConfig();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button className={"btn-rounded hidden md:inline-flex"} variant={"outline"} size={"icon"}>
            <Paintbrush className={"btn-icon"} />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align={"end"}
          className={cn(config.theme, "z-50 w-[340px] p-6")}
          style={{
            "--radius": `${config.radius}rem`,
          }}
        >
          <Customizer />
        </PopoverContent>
      </Popover>
      <Drawer.Root>
        <DrawerTrigger asChild>
          <Button className={"btn-rounded md:hidden"} variant={"outline"} size={"icon"}>
            <Paintbrush className={"btn-icon"} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className={cn(config.theme, "h-[85%] border p-6 pt-10")}>
          <Customizer />
        </DrawerContent>
      </Drawer.Root>
    </>
  );
};

export default ThemeButton;
