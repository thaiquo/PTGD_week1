import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <aside className="bg-white col-3">
      <div className="navbar w-400">
        <ul className="navbar-nav flex flex-col items-center w-400">
         {/* trong cac li la cac navlink co isactive */}
          <li className="nav-item">
            <NavLink
              to="#"
              className="navbar-brand"
            >
              <img src="Hinhanh/Image 1858.png" alt="" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              <span><img src="Hinhanh/Squares four 1.png" alt="" /></span>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              <span><img src="Hinhanh/Folder.png" alt="" /></span>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/teams"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              <span><img src="Hinhanh/Groups.png" alt="" /></span>
              Teams
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/analytics"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              <span><img src="Hinhanh/Pie chart.png" alt="" /></span>
              Analytics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/messages"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              <span><img src="Hinhanh/Chat.png" alt="" /></span>
              Messages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/integrations"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              <span><img src="Hinhanh/Code.png" alt="" /></span>
              Integrations
            </NavLink>
          </li>
        </ul>
      </div>

      <img style={{ marginRight: 75, marginTop: 100 }} src="Hinhanh/Group.png" alt="" />
    </aside>
  );
};

export default Sidebar;
