import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between p-3 bg-dark text-white">
      <div>🛒 Sản phẩm trong giỏ: {cartItems.length}</div>
      {user ? (
        <div>
          Xin chào, {user.name}
          <button className="btn btn-sm btn-light ms-2" onClick={() => dispatch(logout())}>
            Đăng xuất
          </button>
        </div>
      ) : (
        <div>Chưa đăng nhập</div>
      )}
    </div>
  );
};

export default Navbar;
