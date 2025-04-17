import { useContext } from "react";
import { ThemeContext } from "./App";

export default function User(){

    const Theme=useContext(ThemeContext);

    const {theme,SetTheme}=Theme;


    return(<>
    
    <div className={theme}>
        <ul>
            <li>Name: Alice</li>
            <li>Age: 18</li>
            <li>Address: HaNoi</li>
        </ul>
  
    <div>
        <button onClick={()=>SetTheme(theme == 'dark'? 'ligth':'dark')}>Change theme</button>
    </div>

    </div>
    </>);
}