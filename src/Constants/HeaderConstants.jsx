import { Activity, Webhook } from "lucide-react";
import Rotator from "@/layouts/Header/Rotator.jsx";

export const HeaderData = [
  {
    title: "Home",
    megaMenu: false,
    href: "/",
    isExternal: false
  },
  {
    title: "Introduction",
    megaMenu: true,
    megaMenuContent: [
      {
        title: "shadcn/ui",
        description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
        icon: <Rotator className={"h-[85px] w-[85px] before:blur-[32px]"} />,
        href: "https://ui.shadcn.com/",
        isExternal: true
      },
      {
        title: "Introduction",
        description: "Re-usable components built using Radix UI and Tailwind CSS.",
        href: "/docs",
        isExternal: true
      },
      {
        title: "Installation",
        description: "How to install dependencies and structure your app.",
        href: "/docs/installation",
        isExternal: false
      },
      {
        title: "Typography",
        description: "Styles for headings, paragraphs, lists...etc.",
        href: "/docs/primitives/typography",
        isExternal: false
      }
    ]
  },
  {
    title: "Pricing",
    megaMenu: true,
    megaMenuContent: [
      {
        title: "Subscription",
        description: "Choose any tier from a set of carefully planned subscriptions.",
        icon: <Webhook className={"h-[85px] w-[85px] animate-pulse self-center"} />,
        href: "/subscription",
        isExternal: false
      },
      {
        title: "Packages",
        description: "Choose a package and start your internet journey",
        href: "/packages",
        isExternal: false
      }
    ]
  },
  {
    title: "Etc",
    megaMenu: true,
    megaMenuContent: [
      {
        title: "Interactive Particle",
        description: "Interactive Particles with Three.js",
        icon: <Activity className={"h-[85px] w-[85px] animate-pulse self-center"} />,
        href: "/interactive-particle",
        isExternal: false
      },
      {
        title: "Games",
        description: "View a wide selection of your favorite games!",
        href: "/games",
        isExternal: false
      }
    ]
  },
  {
    title: "Weather",
    megaMenu: false,
    href: "/weather-app",
    isExternal: false
  },
  {
    title: "Error",
    megaMenu: false,
    href: "/error",
    isExternal: false
  }
];
