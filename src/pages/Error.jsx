import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import EarthCanvas from "@/components/Canvas/Earth";
import StarsCanvas from "@/components/Canvas/Stars";

import Rocket from "@/assets/rocket.svg";
import Moon from "@/assets/moon.svg";
import Sun from "@/assets/sun.svg";
import Astronaut from "@/assets/astronaut.svg";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={
          "flex min-h-[calc(100%-64px)] flex-col items-center justify-center gap-3 overflow-hidden"
        }
      >
        <div className={"z-40 mt-[6.5rem] flex flex-col items-center justify-center gap-6 sm:mt-0"}>
          <p
            title={"404"}
            className={clsx(`
          before:clip-path-before after:clip-path-after relative animate-glitch select-none 
          text-[100px] font-semibold
          leading-[0.80] before:absolute before:left-0
          before:animate-glitch-top before:content-[attr(title)] after:absolute
          after:left-0 after:animate-glitch-bottom
          after:content-[attr(title)] sm:text-[160px]
          `)}
          >
            404
          </p>
          <div
            className={clsx(`
          drag-none pointer-events-none flex select-none 
          flex-col items-center justify-center gap-2 
          text-center text-base font-light uppercase tracking-[.5rem] sm:text-xl
          `)}
          >
            <p>Looks Like You Are</p>
            <p>Lost In Space</p>
          </div>
          <div className={"flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"}>
            <Button
              variant={"outline"}
              className={
                "select-none text-xs font-thin uppercase tracking-[.1rem] sm:text-sm sm:font-light"
              }
              onClick={() => navigate("/")}
            >
              Go Home
            </Button>
          </div>
        </div>
        <div
          className={
            "absolute -left-[20%] top-[8%] z-40 sm:left-0 sm:top-[15%] lg:left-[5%] lg:top-[15%]"
          }
        >
          <div
            className={
              "-ml-[2rem] h-[200px] w-[350px] sm:-ml-[3rem] sm:-mt-[2rem] sm:h-[320px] sm:w-[400px] lg:h-[400px] lg:w-[400px]"
            }
          >
            <EarthCanvas />
          </div>
        </div>
        <div className={"drag-none pointer-events-none z-30 select-none"}>
          <img
            src={Rocket}
            alt={"rocket"}
            className={"absolute left-0 top-[75%] z-30 w-[40px] animate-rocket-movement"}
            id={"rocket"}
          />
          <img
            src={Sun}
            alt={"sun"}
            className={
              "absolute left-[35%] top-[5%] w-[100px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 sm:left-[25%] sm:top-[5%] sm:w-[130px] lg:left-[25%] lg:top-[10%]"
            }
          />
          <img
            src={Moon}
            alt={"moon"}
            className={
              "absolute left-[35%] top-[5%] w-[100px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 sm:left-[25%] sm:top-[5%] sm:w-[130px] lg:left-[25%] lg:top-[10%]"
            }
          />
          <div
            className={
              "absolute right-[10%] top-[85%] z-40 animate-astronaut-movement will-change-transform sm:top-[80%] lg:top-[70%]"
            }
          >
            <img
              src={Astronaut}
              alt={"astronaut"}
              className={"w-[80px] animate-astronaut-rotate sm:w-[140px]"}
            />
          </div>
        </div>
      </div>
      <StarsCanvas />
    </>
  );
};

export default Error;
