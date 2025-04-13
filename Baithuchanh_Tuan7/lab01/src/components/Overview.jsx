import { useEffect, useState } from "react";
// import { data } from "react-router-dom";

function Overview() {


        const [Color,Setcolor]=useState([]);
        useEffect(() => {
            fetch("https://67f6171e913986b16fa6a104.mockapi.io/Overview").then(data=>data.json()).then(data=>Setcolor(data))
        }, []);

    return ( <>

        <h3 style={{textAlign:"left"}}>Overview</h3>
        <div style={{justifyContent:"space-evenly",margin:0}}  className="container d-flex col-9">





      {Color.map(item=>(
         <div key={item.id} style={{backgroundColor:item.color,margin:20,width:500}} className="item d-flex">
         <div>
         <h3>{item.name}</h3>
         <h1>${item.price}</h1>
         <p><span style={{color:"green",fontWeight:"bold"}}>{item.percent}%</span>period of change</p>

         </div>
        
         
             <button style={{marginLeft:30,marginTop:10,marginRight:10,padding:0,width:30,height:30}}><img style={{margin:0,padding:0,width:30,height:30}} src="Hinhanh/Button 1509.png" alt="" /></button>
     </div>


      ))}
       

       


        

     
        </div>
        
   
    </> );
}

export default Overview;