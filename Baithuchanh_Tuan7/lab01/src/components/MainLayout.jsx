import Header from "./Header";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return ( <>
    <div className="container d-flex">

    <div className="asided">
      <Sidebar/>
    </div>
   
    <div className="session">
         <Header/>
         <Overview/>
         
         <Outlet/>
    </div>
   
    </div>
    
    </> );
}

export default MainLayout;