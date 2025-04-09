import {Link} from 'react-router-dom';
export default function Header(){
    return<>
     

      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-dark">
  <div className="container-fluid">
    <a style={{color:"pink",fontWeight:"bold"}} className="navbar-brand" href="#">Dashboard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
  
   <form style={{marginLeft:250}} className="form-inline d-flex ">
   <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><img src="Hinhanh/Search.png" alt="" /></button>
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button style={{marginLeft:10}} className="btn btn-outline-success my-2 my-sm-0" type="submit"><img src="Hinhanh/Bell 1.png" alt="" /></button>
    <button style={{marginLeft:10}} className="btn btn-outline-success my-2 my-sm-0" type="submit"><img src="Hinhanh/Question 1.png" alt="" /></button>
  </form>
    <Link className="navbar-brand" to="#"><img src="Hinhanh/Avatar (3).png" alt="" /></Link>
  </div>
</nav>
        </div>
    </>
}