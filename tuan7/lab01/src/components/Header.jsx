import {Link} from 'react-router-dom';
// day la header
export default function Header(){
    return<>
     

      <div className="container">
        <nav class="navbar navbar-expand-sm navbar-dark">
  <div class="container-fluid">
    <a style={{color:"pink",fontWeight:"bold"}} class="navbar-brand" href="#">Dashboard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
  
   <form style={{marginLeft:250}} class="form-inline d-flex ">
   <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><img src="Hinhanh/Search.png" alt="" /></button>
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button style={{marginLeft:10}} class="btn btn-outline-success my-2 my-sm-0" type="submit"><img src="Hinhanh/Bell 1.png" alt="" /></button>
    <button style={{marginLeft:10}} class="btn btn-outline-success my-2 my-sm-0" type="submit"><img src="Hinhanh/Question 1.png" alt="" /></button>
  </form>
    <Link class="navbar-brand" to="#"><img src="Hinhanh/Avatar (3).png" alt="" /></Link>
  </div>
</nav>
        </div>
    </>
}