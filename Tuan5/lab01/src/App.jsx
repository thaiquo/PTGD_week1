import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

const caculator = (state,aciton) =>{
      switch(aciton.type){
        case '+':{
          return {...state,result:aciton.A + aciton.B}
        }
        case '-':{
          return {...state,result:aciton.A - aciton.B}
        }
        case '*':{
          return {...state,result:aciton.A * aciton.B}
        }
        case '/':{
          return {...state,result:aciton.A / aciton.B}
        }

      }

}

function App() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  const [state, dispatch]=useReducer(caculator,{result:0});

  



  return (
    <>
        <div className="contain">
          <div className="fillnumber">
            <input type="text" onChange={(e)=>(setA(parseFloat(e.target.value) ))}/> <br />
            <input type="text" name="" id="" onChange={(e)=>(setB(parseFloat(e.target.value) ))} />
          </div>
          <div className="option">
            <input type="radio" value="+" name='chon' onClick={()=>dispatch({type:'+',A:Number(A),B:Number(B)})}/> <span>+</span>
            <input type="radio" value="-" name='chon' onClick={()=>dispatch({type:'-',A,B})}/> <span>-</span>
            <input type="radio" value="*" name='chon' onClick={()=>dispatch({type:'*',A,B})}/> <span>*</span>
            <input type="radio" value="/" name='chon' onClick={()=>dispatch({type:'/',A,B})}/> <span>/</span> 
            <br />
          </div>
          <div className="foot">        
                <button>RESULT</button>        
                   <label htmlFor="">{state.result}</label>
          </div>
        </div>
    </>
  )
}

export default App
