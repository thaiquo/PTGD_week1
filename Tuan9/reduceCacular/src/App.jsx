import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

const Cacular=(state,action)=>{
  switch(action.type){
    case ("+"):{
      return {...state,result:action.A+action.B}
    }
    case ("-"):{
      return {...state,result:action.A-action.B}
    }
    case ("*"):{
      return {...state,result:action.A*action.B}
    }
    case ("/"):{
      return {...state,result:action.A/action.B}
    }
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [A, setA] = useState(0)
  const [B, setB] = useState(0)
  const [statement,SetStatement]=useState('');
  
  const [state,dispatch]=useReducer(Cacular,{result:0});
  
  
  return (
    <>
      <input type="text" onChange={(e)=>setA(e.target.value)} />
      <input type="text" onChange={(e)=>setB(e.target.value)} />
      <div>
        <input type="radio" name='chon' onChange={()=>SetStatement("+")} /> <span>+</span>
        <input type="radio" name='chon' onChange={()=>SetStatement("-")} /> <span>-</span>
        <input type="radio" name='chon' onChange={()=>SetStatement("*")} /> <span>*</span>
        <input type="radio" name='chon' onChange={()=>SetStatement("/")} /> <span>/</span>
      </div>
      <div>
        <button onClick={()=>dispatch({type:statement,A:Number(A),B:Number(B)})}>caculator</button>
      </div>
      <h1>Result:{state.result}</h1>
    </>
  )
}

export default App
