import { Button } from "@/components/ui/button.jsx";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import StarsCanvas from "@/components/Canvas/Stars.jsx";
import CrystalCanvas from "@/components/Canvas/Crystal";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={"flex h-screen flex-col items-center justify-center"}>
      <div className={"-mt-[6rem] h-[400px] w-[300px] sm:-mt-[8rem] sm:h-[500px] sm:w-[400px]"}>
        <CrystalCanvas />
      </div>
      <div className={"z-10 -mt-[6rem] flex items-center justify-center gap-2"}>
        <Button
          variant={"outline"}
          onClick={() => navigate("/weather-app")}
          className={"font-normal uppercase tracking-[.1rem]"}
        >
          Weather App
        </Button>
        <Button
          variant={"outline"}
          onClick={() => navigate("/error")}
          className={"font-normal uppercase tracking-[.1rem]"}
        >
          See Error
        </Button>
        <ModeToggle />
      </div>
      <StarsCanvas />
    </div>
  );
};

export default Home;
