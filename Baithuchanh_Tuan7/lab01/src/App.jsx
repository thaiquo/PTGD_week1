import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {Routes , Route,Navigate} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import MainLayout from './components/MainLayout'
import Project from './pages/Project'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
 
  
      {/* <div className="container d-flex">
      <Sidebar/>
      
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div> */}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Project/>} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/mainlayout" replace />} /> */}
      </Routes>
     
   
    </>
  )
}

export default App
