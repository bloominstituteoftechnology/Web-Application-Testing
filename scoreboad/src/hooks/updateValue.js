import { useEffect } from "react";

export const updateValue = () => {
  const [darkMode, setDarkMode] = useLocalStorage('key')
  useEffect(e => {
    console.log('toggled!')
    if (darkMode === true) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }
  }, [setDarkMode])

  return [darkMode, setDarkMode];
}