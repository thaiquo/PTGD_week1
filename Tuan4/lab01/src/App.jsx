import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchData = async () => {
  
        const response = await fetch('https://67c83dfc0acf98d07085922d.mockapi.io/node'); 
        const result = await response.json();
        setData(result); 
       
    };

    fetchData(); 
  }, []);


  return (
    <>
   <div className="App">
  <div className="items-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    {data.map(item => (
      <div key={item.id} className="card" style={{ width: '247px', height: '351px', margin: '10px' }}>
        {item.img && (
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ width: '100%', height: '60%', objectFit: 'cover' }} 
          />
        )}
        <br />
        <h5 style={{marginLeft:'15px'}}>{item.name}</h5>
        <div className="box">
          <span className="icon">✅</span> {item.title}
        </div>
      </div>
    ))}
  </div>
</div>


  </>
  );
}

export default App;


