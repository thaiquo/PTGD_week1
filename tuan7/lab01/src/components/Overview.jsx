function Overview() {
    // day la overview
    return ( <>
        <div style={{justifyContent:"space-evenly",margin:0}}  className="container d-flex col-9">

        <div style={{backgroundColor:"pink",margin:20,width:500}} className="item d-flex">
            <div>
            <h3>Turnover</h3>
            <h1>$92,405</h1>
            <p><span style={{color:"green",fontWeight:"bold"}}>5.39%</span>period of change</p>

            </div>
           
            
                <button style={{marginLeft:30,marginTop:10,marginRight:10,padding:0,width:30,height:30}}><img style={{margin:0,padding:0,width:30,height:30}} src="Hinhanh/Button 1509.png" alt="" /></button>
        </div>


        <div style={{backgroundColor:"azure",margin:20}} className="item d-flex">
            <div>
            <h3>Profit</h3>
            <h1>$32,218</h1>
            <p><span style={{color:"green",fontWeight:"bold"}}>5.39%</span>period of change</p>

            </div>
           
            
                <button style={{marginLeft:30,marginTop:10,marginRight:10,padding:0,width:30,height:30}}><img style={{margin:0,padding:0,width:30,height:30}} src="Hinhanh/Button 1529.png" alt="" /></button>
            
        </div>


        <div style={{backgroundColor:"azure",margin:20}} className="item d-flex">
            <div>
            <h3>New customer</h3>
            <h1>298</h1>
            <p><span style={{color:"green",fontWeight:"bold"}}>6,84%</span>period of change</p>

            </div>
           
            
                <button style={{marginLeft:30,marginTop:10,marginRight:10,padding:0,width:30,height:30}}><img style={{margin:0,padding:0,width:30,height:30}} src="Hinhanh/Button 1530.png" alt="" /></button>
            
        </div>

     
        </div>
        
   
    </> );
}

export default Overview;