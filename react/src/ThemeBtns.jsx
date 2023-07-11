import { useContext } from "react"
import ThemeContext from "./ThemeContext"

function ThemeBtns() {
  const { setTheme, setUsingDeviceThemes } = useContext(ThemeContext)

  return (
    <div>
      <button
        onClick={() => {
          setTheme("light")
          localStorage.theme = "light"
          setUsingDeviceThemes(false)
        }}
      >
        light
      </button>
      <button
        onClick={() => {
          setTheme("dark")
          localStorage.theme = "dark"
          setUsingDeviceThemes(false)
        }}
      >
        dark
      </button>
      <button
        onClick={() => {
          setUsingDeviceThemes(true)
          localStorage.removeItem("theme")
        }}
      >
        device
      </button>
    </div>
  )
}

export default ThemeBtns
