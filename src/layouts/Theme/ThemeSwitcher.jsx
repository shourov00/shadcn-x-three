import { useEffect } from "react";
import { useConfig } from "@/hooks/use-config"
import {useLocation} from "react-router-dom";

export const ThemeSwitcher = () => {
  const [config] = useConfig()
  const location = useLocation()
  const segments = location.pathname.split("/");
  const segment = segments[segments.length - 2];

  useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    const theme = segment === "themes" ? config.theme : null
    if (theme) {
      return document.body.classList.add(`theme-${theme}`)
    }
  }, [segment, config])

  return null
}