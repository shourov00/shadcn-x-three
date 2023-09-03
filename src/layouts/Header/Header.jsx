import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils.js";
import PropTypes from "prop-types";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { ModeToggle } from "@/components/mode-toggle.jsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.jsx";
import Rotator from "@/layouts/Header/Rotator.jsx";
import MobileNav from "@/layouts/MobileNav.jsx";

const ListItem = ({ className, title, children, href, ...props }) => {
  const navigate = useNavigate();

  return (
    <li>
      <NavigationMenuLink>
        <a
          className={cn(
            "block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
          onClick={(e) => {
            e.preventDefault();
            navigate(href);
          }}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={
        "bg-#1F2023B3 fixed z-[50] flex h-20 w-full flex-col items-center justify-center border-b border-input backdrop-blur-xl lg:z-[999]"
      }
    >
      <div className={"relative flex w-11/12 items-center justify-between xl:w-10/12 2xl:w-8/12"}>
        <MobileNav />
        <div
          className={"flex cursor-pointer items-center justify-start"}
          onClick={() => navigate("/")}
        >
          <div className={"mr-4"}>
            <Rotator className={"h-[40px] w-[40px]"} />
          </div>
          <div className={"text-xl font-bold"}>ui demo</div>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className={"cursor-pointer"} onClick={() => navigate("/")}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={"bg-transparent"}>
                Introduction
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink className={"flex flex-col"}>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="https://ui.shadcn.com/"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <Rotator className={"h-[100px] w-[100px] before:blur-[32px]"} />
                        <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                        <p className="w-full text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem
              className={"cursor-pointer"}
              onClick={() => navigate("/weather-app")}
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Weather
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={"cursor-pointer"} onClick={() => navigate("/pricing")}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={"cursor-pointer"} onClick={() => navigate("/error")}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Error
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className={"flex flex-row items-center justify-center gap-3"}>
          <Button
            onClick={() => window.open("https://github.com/FalconiZzare/shadcn-x-three", "_blank")}
            variant={"outline"}
            size={"icon"}
            className={"min-h-[2.5rem] min-w-[2.5rem] rounded-3xl"}
          >
            <Github className={"h-[1.2rem] w-[1.2rem]"} />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;

ListItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
