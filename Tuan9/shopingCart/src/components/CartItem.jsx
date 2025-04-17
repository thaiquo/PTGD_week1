import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ marginBottom: 10 }}>
      {item.name} - {item.price}đ x
      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={(e) =>
          dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
        }
        style={{ width: 50, margin: '0 10px' }}
      />
      <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
    </li>
  );
};

export default CartItem;
