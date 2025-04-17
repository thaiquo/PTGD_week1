import { useDispatch } from 'react-redux';
import { addItem } from './redux/cartSlice';
import Cart from './components/Cart';

function App() {
  const dispatch = useDispatch();

  const handleAddSample = () => {
    dispatch(addItem({ id: 1, name: 'Áo thun', price: 200000, quantity: 1 }));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🛍️ Shopping Cart</h1>
      <button onClick={handleAddSample}>Thêm sản phẩm mẫu</button>
      <Cart />
    </div>
  );
}

export default App;
