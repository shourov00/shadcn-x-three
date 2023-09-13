import { Route, Routes } from "react-router-dom";

import WeatherApp from "@/components/WeatherApp/WeatherApp.jsx";
import Error from "@/pages/Error.jsx";
import Home from "@/components/Home/Home.jsx";
import Pricing from "@/components/Pricing/Pricing.jsx";
import Packages from "@/components/InternetPricing/Packages.jsx";

const RouteTable = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/weather-app"} element={<WeatherApp />} />
        <Route path={"/subscription"} element={<Pricing />} />
        <Route path={"/packages"} element={<Packages />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </>
  );
};

export default RouteTable;
