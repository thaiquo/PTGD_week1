// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-white col-3">
    
    {/* <a style={{float:"letf"}} className="navbar-brand mr-5" href="#"><img src="Hinhanh/Image 1858.png" alt="" /></a> */}
       

        <div className=" navbar w-400" >
       
      <ul className="navbar-nav flex flex-col items-center w-400">

      <li className="nav-item">
      <NavLink to="#" className="nav-link">
      <img src="Hinhanh/Image 1858.png" alt="" />
        </NavLink>
        </li>


      <li className="nav-item">
      <NavLink to="/dashboard" style={isActive => ({
    background: isActive ? "pink" : "white"
  })} className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }>
      <span><img src="Hinhanh/Squares four 1.png" alt="" /></span>
          Dashboard
        </NavLink>
        </li>
      
        <li className="nav-item">
        <NavLink className="nav-link"  to="/projects"> <span><img src="Hinhanh/Folder.png" alt="" /></span>
        Projects</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link" to="/teams">  <span><img src="Hinhanh/Groups.png" alt="" /></span>
        Teams</NavLink>
        </li>
        <li className="nav-item">
          
        <NavLink  className="nav-link" to="/analytics">  <span><img src="Hinhanh/Pie chart.png" alt="" /></span>
        Analytics</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link" to="/messages">  <span><img src="Hinhanh/Chat.png" alt="" /></span>
        Messages</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  className="nav-link" to="/integrations">  <span><img src="Hinhanh/Code.png" alt="" /></span>
          Integrations</NavLink>
          </li>
       
      </ul>
    </div>

        
      
       <img style={{marginRight:75,marginTop:100}} src="Hinhanh/Group.png" alt="" />
       

    </aside>
  );
};

export default Sidebar;
