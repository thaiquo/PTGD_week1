
import Detail from "../components/Detail";
import Header from "../components/Header";
import Overview from "../components/Overview";
import {Outlet} from "react-router-dom"

function Dashboard() {
    return ( <>
    
        <div className="aside col-9">
            <Detail/>
            {/* <Outlet/> */}
        </div>
    </>);
}

export default Dashboard;