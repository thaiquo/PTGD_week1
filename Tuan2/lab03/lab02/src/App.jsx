import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [rs, setrs] = useState(0);
  const [op, OPERATER] = useState('');

  function ChangA(e){
        setA(e.target.value);

  }
function ChangB(e){
  setB(e.target.value);
}

function Cacular(e){
  OPERATER(e.target.value);
}
function Clickrs(){
  if(op=='+')
  setrs(parseFloat(A)+parseFloat(B));
else  if(op=='-')
setrs(parseFloat(A)-parseFloat(B));

else  if(op=='*')
setrs(parseFloat(A)*parseFloat(B));

else  if(op=='/')
setrs(parseFloat(A)/parseFloat(B));

console.log(rs);
}
  return (
    <>
     <input onChange={ChangA}  placeholder='nhap a' type="text" />
     <input onChange={ChangB} placeholder='nhap b' type="text" />
  <br />
     <input name="nhap" onChange={Cacular} type="radio" value="+" /> <span>+</span>
     <input name="nhap" onChange={Cacular} type="radio" value="-" /> <span>-</span>
     <input name="nhap" onChange={Cacular} type="radio" value="*" /> <span>*</span>
     <input name="nhap" onChange={Cacular} type="radio" value="/" /> <span>/</span>

     <br />
     <button onClick={Clickrs}>RESULT</button>
      <br />
     <label htmlFor="">{rs}</label>
    </>
  );
}

export default App
