import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Center from './component/Center'
import Footer from './component/Footer'

function App() {
 
  const [arr, setArr] = useState([])


  var url="https://67c83dfc0acf98d07085922d.mockapi.io/node";


  useEffect(()=>{
    fetch(url).then(data=>data.json()).then(data=>{
      console.log(data);
      setArr(data)});

  },[]
  );


  return (
    <>
      <div className="container">
       <Header></Header>
       
        {arr.map((item)=>{

            return(
            <div key={item.id}>
                <Center image={item.image} name={item.name} title={item.title}/>
            </div>
            );
         
      })}
    
      
       <Footer></Footer>
      </div>
    </>
  )
}

export default App
