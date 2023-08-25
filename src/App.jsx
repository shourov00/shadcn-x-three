import { ThemeProvider } from "@/components/theme-provider.jsx";
import { BrowserRouter } from "react-router-dom";
import RouteTable from "@/routes/RouteTable.jsx";

const App = () => {
  return (
    <ThemeProvider defaultTheme={"system"} storageKey={"vite-ui-theme"}>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <RouteTable />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
