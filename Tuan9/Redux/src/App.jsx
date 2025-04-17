// src/App.jsx

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/actions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>-</button>
    </div>
  );
}

export default App;
