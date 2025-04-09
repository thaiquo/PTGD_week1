import Detail from "../components/Detail";
import Header from "../components/Header";
import Overview from "../components/Overview";

function Dashboard() {
    return ( <>
    
        <div className="aside col-9">
            <Header/>
            <Overview/>
            <Detail/>
        </div>
    </>);
}

export default Dashboard;