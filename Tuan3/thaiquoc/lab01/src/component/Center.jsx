export default function Center(){
    return (
        <>
         
            <div className="container-center">
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
              </div>
            </div> <br /><br />
       
        </>
      );
}