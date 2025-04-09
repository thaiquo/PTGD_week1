import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
export const ItemContext=createContext();


export  default function ProvideItem({children}){
    const [Select,Setselect]=useState([]);
    // const [Data,SetData]=useState([]);

        // useEffect(() => {
        //     fetch("https://67f6171e913986b16fa6a104.mockapi.io/people").then(data=>data.json()).then(data=>Setselect(data))
        // }, []);

    const AddItem = (item) => (     
        Setselect(prev => [...prev, item])
    )
    

    const DelItem=(id)=>(
        Setselect(prev=>prev.filter(data=>data.id!==id))
    )

    const Clearn=()=>(
        Setselect([])
    )
    return<>
    <ItemContext.Provider value={{Select,AddItem,DelItem,Clearn}}>
        {children}
    </ItemContext.Provider>
    </>
}
export function useItemContext(){
    return useContext(ItemContext);
}