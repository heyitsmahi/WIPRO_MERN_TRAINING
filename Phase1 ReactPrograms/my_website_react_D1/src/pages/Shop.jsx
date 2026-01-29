import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  if (!products || products.length === 0) {
    return <h2 style={{ padding: 20 }}>Loading products...</h2>;
  }

  return (
    <div className="shop">
      <h2>Products</h2>
      <div className="grid">
        {products.map(p => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </div> 
  );
}
