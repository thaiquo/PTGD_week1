import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListUser from './ListUser'
import { createContext } from 'react'


export const ThemeContext=createContext();
function App() {
  const [count, setCount] = useState(0)
  const [theme,SetTheme]=useState("dark");
  return (
    <ThemeContext.Provider value={{theme,SetTheme}}>
     <ListUser />
    </ThemeContext.Provider>
  )
}

export default App
