import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.js";
import { useTheme } from "next-themes";
import { useConfig } from "@/hooks/use-config.js";
import { Check, Sun, Undo2 } from "lucide-react";
import { ThemeWrapper } from "@/layouts/Theme/ThemeWrapper";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label.jsx";
import { themes } from "@/registry/themes.js";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import { Icons } from "@/Icons/Icons.jsx";

const Customizer = () => {
  const [config, setConfig] = useConfig();
  const [mounted, setMounted] = useState(false);
  const { setTheme: setMode, resolveTheme: mode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeWrapper defaultTheme={"zinc"} className={"flex flex-col space-y-4 lg:space-y-6"}>
      <div className="flex items-start">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">Customize</div>
          <div className="text-xs text-muted-foreground">
            Pick a style and color for your components.
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem]"
          onClick={() => {
            setConfig({
              ...config,
              theme: "zinc",
              radius: 0.5,
            });
          }}
        >
          <Undo2 />
          <span className="sr-only">Reset</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => {
              const isActive = config.theme === theme.name;

              return mounted ? (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={theme.name}
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme.name,
                    });
                  }}
                  className={cn("justify-start", isActive && "border-2 border-primary")}
                  style={{
                    "--theme-primary": `hsl(${
                      theme?.activeColor[mode === "dark" ? "dark" : "light"]
                    })`,
                  }}
                >
                  <span
                    className={cn(
                      "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
                    )}
                  >
                    {isActive && <Check className="h-4 w-4 text-white" />}
                  </span>
                  <span className={"text-xs"}>{theme.label}</span>
                </Button>
              ) : (
                <Skeleton className="h-8 w-full" key={theme.name} />
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    });
                  }}
                  className={cn(config.radius === parseFloat(value) && "border-2 border-primary")}
                >
                  <span className={"text-xs"}>{value}</span>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("light")}
                  className={cn(mode === "light" && "border-2 border-primary", "text-xs")}
                >
                  <Sun className="mr-3 h-[18px] w-[18px]" />
                  Light
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("dark")}
                  className={cn(mode === "dark" && "border-2 border-primary", "text-xs")}
                >
                  <Icons.moon className="mr-3 h-[18px] w-[18px]" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
};

export default Customizer;
