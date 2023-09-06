import { ThemeProvider } from "@/layouts/Theme/ThemeProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import RouteTable from "@/routes/RouteTable.jsx";
import Header from "@/layouts/Header/Header.jsx";
import { ThemeSwitcher } from "@/layouts/Theme/ThemeSwitcher";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ThemeProvider
        defaultTheme={"system"}
        attribute={"class"}
        enableSystem
        disableTransitionOnChange
      >
        <div className={"h-screen"}>
          <Header />
          <RouteTable />
        </div>
      </ThemeProvider>
      <ThemeSwitcher />
    </BrowserRouter>
  );
};

export default App;
