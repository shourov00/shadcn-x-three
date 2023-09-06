import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils.js";
import PropTypes from "prop-types";
import { Icons } from "@/Icons/Icons.jsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.jsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";

import { Button } from "@/components/ui/button.jsx";
import Rotator from "@/layouts/Header/Rotator.jsx";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} className={""}>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.viewVertical className={"h-5 w-5"} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className={"z-50 pr-0"}>
        <MobileLink className={"flex items-center"} href={"/"} onOpenChange={setOpen}>
          <div className={"mr-4"}>
            <Rotator className={"h-[30px] w-[30px]"} />
          </div>
          <span className={"font-bold"}>ui demo</span>
        </MobileLink>
        <div className={"no-scrollbar mt-6 h-[calc(100vh-6rem)] overflow-scroll pl-6"}>
          <div className={"flex flex-col space-y-7"}>
            <MobileLink href={"/"} onOpenChange={setOpen}>
              Home
            </MobileLink>
            <Accordion type="single" collapsible className={"pr-4"}>
              <AccordionItem value="item-1" className={"border-b-0"}>
                <AccordionTrigger className={"py-0 hover:no-underline"}>
                  Introduction
                </AccordionTrigger>
                <AccordionContent>
                  <a
                    className="mt-4 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 pt-10 no-underline outline-none focus:shadow-md"
                    href="https://ui.shadcn.com/"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <Rotator className={"h-[60px] w-[60px] before:blur-[32px]"} />
                    <div className="mb-2 mt-4 text-sm font-medium">shadcn/ui</div>
                    <p className="w-full text-xs leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </AccordionContent>
                <AccordionContent>
                  <ListItem href="/docs" title="Introduction" onOpenChange={setOpen}>
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                </AccordionContent>
                <AccordionContent>
                  <ListItem href="/docs/installation" title="Installation" onOpenChange={setOpen}>
                    How to install dependencies and structure your app.
                  </ListItem>
                </AccordionContent>
                <AccordionContent>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                    onOpenChange={setOpen}
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <MobileLink href={"/weather-app"} onOpenChange={setOpen}>
              Weather
            </MobileLink>
            <MobileLink href={"/pricing"} onOpenChange={setOpen}>
              Pricing
            </MobileLink>
            <MobileLink href={"/error"} onOpenChange={setOpen}>
              Error
            </MobileLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

const MobileLink = ({ href, onOpenChange, className, children, ...props }) => {
  return (
    <Link to={href} className={cn(className)} onClick={() => onOpenChange(false)} {...props}>
      {children}
    </Link>
  );
};

const ListItem = ({ className, title, children, href, onOpenChange, ...props }) => {
  return (
    <MobileLink
      className={cn(
        "block cursor-pointer select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
      onOpenChange={onOpenChange}
      href={href}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
    </MobileLink>
  );
};

MobileLink.propTypes = {
  href: PropTypes.string.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

ListItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onOpenChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
