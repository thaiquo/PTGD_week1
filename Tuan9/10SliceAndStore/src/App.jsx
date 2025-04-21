import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ProductList />
        <hr />
        <Cart />
      </div>
    </div>
  );
};

export default App;
