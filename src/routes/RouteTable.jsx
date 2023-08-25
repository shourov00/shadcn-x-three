import { Route, Routes } from "react-router-dom";

import WeatherApp from "@/components/WeatherApp/WeatherApp.jsx";
import Error from "@/pages/Error.jsx";
import Home from "@/components/Home/Home.jsx";

const RouteTable = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/weather-app"} element={<WeatherApp />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </>
  );
};

export default RouteTable;
