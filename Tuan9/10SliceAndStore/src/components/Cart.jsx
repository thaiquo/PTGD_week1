import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-3">
      <h4>Giỏ hàng</h4>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.name} - ${item.price}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
