import { ThemeProvider } from "@/layouts/Theme/ThemeProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import RouteTable from "@/routes/RouteTable.jsx";
import Header from "@/layouts/Header/Header.jsx";
import { ThemeWrapper } from "@/layouts/Theme/ThemeWrapper";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ThemeProvider
        defaultTheme={"system"}
        attribute={"class"}
        enableSystem
        disableTransitionOnChange={false}
      >
        <ThemeWrapper className={"h-screen"}>
          <Header />
          <RouteTable />
        </ThemeWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
