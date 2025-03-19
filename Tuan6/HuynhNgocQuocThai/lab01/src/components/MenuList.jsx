import { useState } from "react"
export default function MenuList(){
    const [mon,Setmon]=useState("");
    return<>
     <div className="center">
        <div className="mon">


        <div>
            <img onClick={()=>Setmon("Cơm Cuộn")} style={{width:280 ,height:200 }} src="../src/anhmonan/a1.PNG" alt="" />
            <h1> Cơm cuộn</h1>
            <p className="descript">xuất sứ từ Hàn Quốc</p>
        </div>
        <div>
            <img onClick={()=>Setmon("Bánh xèo")} style={{width:280 ,height:200 }} src="../src/anhmonan/a2.PNG" alt="" />
            <h1> Bánh xèo</h1>
            <p className="descript">Hương quê miền tây</p>
        </div>
        <div>
            <img onClick={()=>Setmon("Bánh Canh")} style={{width:280 ,height:200 }} src="../src/anhmonan/a3.PNG" alt="" />
            <h1> Bánh canh</h1>
            <p className="descript">Bà tư thơm ngon</p>
        </div> 

        </div>

        <div className="render">
            <label htmlFor="">{mon}</label>
        </div>
        
         
      </div>
    </>
}
