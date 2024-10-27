import { useTheme } from "../ThemeProvider"

const ThemeButton = () => {
  const {theme,setTheme}=useTheme()

  const toggleTheme=()=>{
    setTheme(theme==='dark'?'light':'dark')
  }
  return (
    <button onClick={toggleTheme}>
      Theme {theme==='dark' ? 'light':'dark'}
    </button>
  )
}

export default ThemeButton
