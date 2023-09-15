import { useEffect } from "react";
import { ThemeProvider } from "@/layouts/Theme/ThemeProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import RouteTable from "@/routes/RouteTable.jsx";
import Header from "@/layouts/Header/Header.jsx";
import { themes } from "@/registry/themes.js";
import { useConfig } from "@/hooks/use-config.js";
import Footer from "@/layouts/Footer/Footer.jsx";

const App = () => {
  const [config] = useConfig();

  useEffect(() => {
    themes.forEach((theme) => {
      if (document.body.classList.contains(theme.name)) {
        document.body.classList.remove(theme.name);
      }
    });

    document.body.classList.add(config.theme);
    document.body.style.setProperty("--radius", `${config.radius}rem`);
  }, [config]);

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ThemeProvider
        defaultTheme={"system"}
        attribute={"class"}
        enableSystem
        disableTransitionOnChange={false}
      >
        <Header />
        <div className={"relative flex h-screen flex-col pt-14 sm:pt-20"}>
          <RouteTable />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
