import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>🛒 Giỏ hàng</h2>
      {items.length === 0 ? (
        <p>Chưa có sản phẩm.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <hr />
          <p><strong>Tổng số lượng:</strong> {totalQty}</p>
          <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ</p>
        </>
      )}
    </div>
  );
};

export default Cart;
