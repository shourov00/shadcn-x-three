import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Paintbrush } from "lucide-react";
import { Drawer } from "vaul";
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer.jsx";
import Customizer from "@/layouts/Theme/Customizer.jsx";

const ThemeButton = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button className={"btn-rounded hidden md:inline-flex"} variant={"outline"} size={"icon"}>
            <Paintbrush className={"btn-icon"} />
          </Button>
        </PopoverTrigger>
        <PopoverContent align={"end"} className={"z-50 w-[340px] rounded-[0.5rem] p-6"}>
          <Customizer />
        </PopoverContent>
      </Popover>
      <Drawer.Root>
        <DrawerTrigger asChild>
          <Button className={"btn-rounded md:hidden"} variant={"outline"} size={"icon"}>
            <Paintbrush className={"btn-icon"} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className={"h-[85%] border p-6 pt-10"}>
          <Customizer />
        </DrawerContent>
      </Drawer.Root>
    </>
  );
};

export default ThemeButton;
