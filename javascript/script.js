const themeButtons = document.querySelectorAll(".theme-btn")

if (!("theme" in localStorage)) setThemeByDevice()

if (localStorage.theme === "dark")
  document.documentElement.classList.add("dark")

if (localStorage.theme === "light")
  document.documentElement.classList.remove("dark")

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "light":
        setThemeToLight()
        break
      case "dark":
        setThemeToDark()
        break
      case "device":
        setThemeByDevice()
        break
      default:
        break
    }

    setActiveThemeBtn()
  })
})

function setThemeToLight() {
  document.documentElement.classList.remove("dark")
  localStorage.theme = "light"
}

function setThemeToDark() {
  document.documentElement.classList.add("dark")
  localStorage.theme = "dark"
}

function setThemeByDevice() {
  localStorage.removeItem("theme")
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")

  if (darkThemeMq.matches) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  darkThemeMq.addEventListener("change", (e) => {
    if ("theme" in localStorage) return

    if (e.matches) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })
}

function setActiveThemeBtn() {
  themeButtons.forEach((btn) => {
    btn.classList.remove("active")

    if (btn.id === "device" && !("theme" in localStorage))
      btn.classList.add("active")

    if (btn.id === "dark" && localStorage.theme === "dark")
      btn.classList.add("active")

    if (btn.id === "light" && localStorage.theme === "light")
      btn.classList.add("active")
  })
}

setActiveThemeBtn()
