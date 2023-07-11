/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react"
import useThemeDetector from "./useThemeDetector"

const ThemeContext = createContext("dark")

export function ThemeProvider({ children }) {
  const isDarkTheme = useThemeDetector()
  const deviceTheme = isDarkTheme === true ? "dark" : "light"

  const [usingDeviceThemes, setUsingDeviceThemes] = useState(
    !("theme" in localStorage)
  )
  const [theme, setTheme] = useState(localStorage.theme)

  if (theme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  useEffect(() => {
    if (usingDeviceThemes) {
      setTheme(deviceTheme)
    }
  }, [usingDeviceThemes, deviceTheme])
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, usingDeviceThemes, setUsingDeviceThemes }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
