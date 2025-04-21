import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  return (
    <div className="p-3">
      <h4>Sản phẩm</h4>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item d-flex justify-content-between">
            <span>{product.name} - ${product.price}</span>
            <button
              className="btn btn-sm btn-success"
              onClick={() => dispatch(addToCart(product))}
            >
              Thêm vào giỏ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
