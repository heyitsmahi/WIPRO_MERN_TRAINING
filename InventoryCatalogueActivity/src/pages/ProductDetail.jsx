import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Product not found");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

return (
  <div className="container mt-4">
    <div className="card p-3 shadow">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  </div>
);

}

export default ProductDetail;
