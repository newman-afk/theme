import { useContext } from "react"
import ThemeContext from "./ThemeContext"
import ThemeBtns from "./ThemeBtns"

function App() {
  const { theme, useDeviceTheme } = useContext(ThemeContext)
  return (
    <>
      <div>
        <p>Current Theme is: {theme}</p>
        <p>Device theme: {useDeviceTheme === true ? "true" : "false"}</p>
        <ThemeBtns />
      </div>
    </>
  )
}

export default App
