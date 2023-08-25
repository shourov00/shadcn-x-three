import { useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster.jsx";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Home as House, Loader2, Waves, Wind } from "lucide-react";
import { Card } from "@/components/ui/card.jsx";
import NotFound from "@/assets/images/404.png";
import Clear from "@/assets/images/clear.png";
import Rain from "@/assets/images/rain.png";
import Snow from "@/assets/images/snow.png";
import Clouds from "@/assets/images/cloud.png";
import Haze from "@/assets/images/mist.png";
import StarsCanvas from "@/components/Canvas/Stars.jsx";
import { useNavigate } from "react-router-dom";

const WeatherApp = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const { toast } = useToast();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

  const noAuthHeader = () => {
    return {
      "Content-Type": "multipart/form-data",
    };
  };

  const getData = async () => {
    return await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`,
      {
        headers: noAuthHeader(),
      }
    );
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await setIsLoading(true);

    if (!input) {
      toast({
        title: "Uh oh! Location can't be empty!",
        description: "Please enter a location to get weather forecast.",
        action: (
          <ToastAction altText={"Got It"} onClick={() => setIsLoading(false)}>
            {" "}
            Got It
          </ToastAction>
        ),
      });
      return;
    }

    const fetchData = async () => {
      const res = await getData();

      if (res) {
        setData(res.data);
        setIsLoading(false);
        setIsError(false);
      }
    };

    fetchData().catch((err) => {
      console.log(err);
      setIsLoading(false);
      setIsError(true);
    });
  };

  const getWeatherIcon = (type) => {
    switch (type) {
      case "Clear":
        return Clear;

      case "Rain":
        return Rain;

      case "Drizzle":
        return Rain;

      case "Snow":
        return Snow;

      case "Clouds":
        return Clouds;

      case "Haze":
        return Haze;

      default:
        return "";
    }
  };
  return (
    <div className={"flex h-screen flex-col items-center justify-center gap-3"}>
      <Card
        className={
          "flex min-w-[90%] max-w-[90%] flex-col items-center justify-center gap-[1rem] px-6 py-8 ease-out sm:min-w-[450px] sm:max-w-[450px]"
        }
      >
        <div className={"flex items-center justify-center gap-4"}>
          <form onSubmit={handleSearch} className={"flex items-center justify-center gap-4"}>
            <Input id={"search"} placeholder={"Enter A Location"} onChange={handleChange} />
            <Button
              disabled={isLoading}
              variant={"outline"}
              type={"submit"}
              className={"min-w-[85px] font-light"}
            >
              {isLoading ? <Loader2 className={"h-4 w-4 animate-spin"} /> : "Search"}
            </Button>
          </form>
          <Button
            variant={"outline"}
            size={"icon"}
            className={"min-h-[2.5rem] min-w-[2.5rem] rounded-3xl"}
            onClick={() => navigate("/")}
          >
            <House className={"h-[1.2rem] w-[1.2rem]"} />
          </Button>
          <ModeToggle />
        </div>
        <div
          className={clsx(
            "my-8 mt-[3rem] flex flex-col items-center justify-center gap-[2.5rem]",
            isError
              ? "scale-100 animate-fade-in opacity-100 delay-200"
              : "absolute scale-0 opacity-0"
          )}
        >
          <img src={NotFound} alt={"404"} className={"w-1/2"} />
          <p className={"text-[20px] font-normal capitalize"}> Oops! Location Not Found!</p>
        </div>
        <div
          className={clsx(
            "my-4 flex flex-col items-center justify-center gap-[2.5rem]",
            !isError && data
              ? "scale-100 animate-fade-in opacity-100 delay-200"
              : "absolute scale-0 opacity-0"
          )}
        >
          <img src={getWeatherIcon(data?.weather[0].main)} alt={"404"} className={"w-1/2"} />
          <div className={"flex flex-col items-center justify-center gap-2"}>
            <p className={"relative text-[4rem] font-extrabold capitalize tracking-wider"}>
              {parseInt(data?.main.temp)}
              <span className={"absolute ml-[4px] text-[1.5rem] font-medium"}>°C</span>
            </p>
            <p className={"text-[22px] font-medium capitalize tracking-wide"}>
              {data?.weather[0].description}
            </p>
          </div>
          <div
            className={
              "mt-4 flex w-full items-center justify-between text-[16px] font-medium sm:w-[90%] sm:text-[18px]"
            }
          >
            <div className={"flex items-center justify-center gap-4"}>
              <Waves className={"h-[28px] w-[28px]"} />
              <div>
                <p>{`${data?.main.humidity}%`}</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className={"flex items-center justify-center gap-4"}>
              <Wind className={"h-[28px] w-[28px]"} />
              <div>
                <p>{`${data?.wind.speed} Km/H`}</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <StarsCanvas />
      <Toaster onClose={() => setIsLoading(false)} />
    </div>
  );
};

export default WeatherApp;
