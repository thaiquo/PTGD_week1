export default function Center({image,name,title}){
    return (
        <>
         
            <div className="container-center">
{/* 
              <div className="session">
                <div id='lable-cen'>
                <label htmlFor="#" >FILTERS</label>
                </div>
                <table>
                  <tr>
                    <th><input type="checkbox" name="" id="" /><label>Pan-fried</label></th>
                    <th><input type="checkbox" name="" id="" /><label>Stir-fried</label></th>
                  </tr>
                  <tr>
                  <th><input type="checkbox" name="" id="" /><label>Grilled</label></th>
                  <th><input type="checkbox" name="" id="" /><label>Roasted</label></th>
                  </tr>
                  <tr>
                  <th><input type="checkbox" name="" id="" /><label>Sauteed</label></th>
                  <th><input type="checkbox" name="" id="" /><label>Baked</label></th>
        
                  </tr>
                  <tr>
                  <th><input type="checkbox" name="" id="" /><label>Steamed</label></th>
                  <th><input type="checkbox" name="" id="" /><label>Stewed</label></th>
                  </tr>
                </table>
                <div className="time_minute">
                  
                </div>
              </div> */}

        <div className="aside">
              <div className="card">
                   <img src={image} alt="Avatar" style={{ width: "100%" }} />
                 <div className="content">
                    <h4><b>{name}</b></h4>
                     <p>{title}</p>
                 </div>
              </div>
        </div>
      


            </div> <br /><br />
       
        </>
      );
}