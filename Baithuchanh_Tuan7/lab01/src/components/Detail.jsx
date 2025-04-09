import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Model from "../pages/Model";
import { useItemContext } from "../contextItem/ProvideItem";

function Detail() {
     const [Data,SetData]=useState([]);
     const [NewData,SetnewData]=useState([]);
     //day la use
    useEffect(() => {
        fetch("https://67f6171e913986b16fa6a104.mockapi.io/people").then(data=>data.json()).then(data=>SetData(data))
    }, []);

     const {Select,DelItem,Clearn}= useItemContext();

   
    return ( <>
    <div className="container">
        <div className="lab">
            <h3 style={{float:"left"}}><span><img src="Hinhanh/File text 1.png" alt="" /></span>Detailed report</h3>
        </div>
        <div className="but">
            <button data-bs-toggle="modal" data-bs-target="#myModal"  style={{borderColor:"pink", backgroundColor:"white",color:"pink",float:"right"}} type="button"><span><img src="Hinhanh/Download.png" alt="" /></span>Import</button>
            <button style={{borderColor:"pink",marginLeft:30, backgroundColor:"white",color:"pink",float:"right"}} type="button"><span><img src="Hinhanh/Move up.png" alt="" /></span>Export</button>
        </div>

{/* model */}
     <Model/>


        
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">CUSTOMER</th>
      <th scope="col">COMPANY</th>
      <th scope="col">ORDER VALUE</th>
      <th scope="col">ORDER DATE</th>
      <th scope="col">STATUS</th>
      <th scope="col">#</th>
    </tr>
  </thead>
  {Select!=null}{
      <tbody id="bang">
        {Select.map(item=>(
            <tr key={item.id}>
             
             <td><input type="checkbox" name="" id="" /></td>
             <td><span><img style={{width:30,height:30}} src={item.avatar} alt="" /></span>{item.name}</td>
             <td>{item.company}</td>
             <td>{item.orderValue}</td>
             <td>{item.orderDate}</td>
             <td>{item.status}</td>
             <td><button type="button"><img src="Hinhanh/create.png" alt="" /></button></td>
        
             
           </tr>
           
            ))}
            </tbody>
    
    }
    
    {
         <tbody id="bang">
            {Data.map(item=>(
                <tr key={item.id}>
                 
                 <td><input type="checkbox" name="" id="" /></td>
                 <td><span><img style={{width:30,height:30}} src={item.avatar} alt="" /></span>{item.name}</td>
                 <td>{item.company}</td>
                 <td>{item.orderValue}</td>
                 <td>{item.orderDate}</td>
                 <td>{item.status}</td>
                 <td><button type="button"><img src="Hinhanh/create.png" alt="" /></button></td>
            
                 
               </tr>
               
                ))}
          </tbody>

    }
            
    
    

</table>






{/* end */}
</div>    
    </>);
}

export default Detail;