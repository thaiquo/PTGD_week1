import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {Routes , Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import ProvideItem from './contextItem/ProvideItem'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ProvideItem>
      <div className="container d-flex">
      <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div>
      </ProvideItem>
    </>
  )
}

export default App
