import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { useConfig } from "@/hooks/use-config.js";

export const ThemeWrapper = ({ defaultTheme, children, className }) => {
  const [config] = useConfig();
  return (
    <div
      className={cn(`theme-${defaultTheme || config.theme}`, "w-full", className)}
      style={{
        "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
      }}
    >
      {children}
    </div>
  );
};

ThemeWrapper.propTypes = {
  defaultTheme: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
