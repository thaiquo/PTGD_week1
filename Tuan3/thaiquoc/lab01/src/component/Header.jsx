export default function Header(){
    return (
        <>
          
            <div style={{justifyContent:"space-between"}} className="flex-container">
            <img src="../src/anh/logo.png" alt="" />
            <input style={{borderRadius:30,width:200,marginTop:10}} type="text" placeholder='What would you like to cook?'/>
    
              <div  className="menu">
                <ul >
                  <li><a href="#">What to cook</a></li>
                  <li><a href="#">Recipes</a></li>
                  <li><a href="#">Ingerdients</a></li>
                  <li><a href="#">Occasions</a></li>
                  <li><a href="#">About Us</a></li>
                </ul>
              </div>
              <button id='butbox'>Your Recipes box</button>
              <img src="../src/anh/avatar.png" alt="" />
            </div> <br /> <br />
            
          
        </>
      );
}