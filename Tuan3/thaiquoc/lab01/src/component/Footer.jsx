export default function Footer(){
    return (
        <>
          
            <div className="footer">

                <div className="foot1">
                    <label htmlFor="#">About</label>
                    <p>Welcome to our webite, a wonderful place to explore and learn how to cook like a pro</p>
                    <input type="text" placeholder="Enter your email"/> <button>Send</button>
                    <div>
                        <img src="../src/anh/foot.PNG" alt="" /><br />
                        <span>2023 chefifty Company      </span><span>  Teams of Servicel privacy policy</span>
                    </div>
                </div>


                <div className="foot2">
                    <div>
                        <label htmlFor="">Learn More</label>
                         <p>Our Cooks</p>
                        <p>See Our Features</p>
                        <p>FAQ</p>
                    </div>

                 <div>
                        <label htmlFor="">Shop</label>
                         <p>Gift Subscription</p>
                        <p>Send Us Feedback</p>
                 </div>
                </div>


                <div className="foot3">
                   
                        <label htmlFor="">Recipes</label>
                         <p>What to Cook this Week</p>
                        <p>Pasta</p>
                        <p>Dinner</p>
                         <p>Healthy</p>
                         <p>Vegetarian</p>
                         <p>Vegan</p>
                         <p>Christmas</p>
                    

                
                </div>
               
                
            </div>
            
          
        </>
      );
}