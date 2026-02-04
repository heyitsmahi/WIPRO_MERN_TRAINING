import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Products</h2>
      <Link to="/add">Add New</Link>

      {products.map(p => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>
            {p.name} - ₹{p.price}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
