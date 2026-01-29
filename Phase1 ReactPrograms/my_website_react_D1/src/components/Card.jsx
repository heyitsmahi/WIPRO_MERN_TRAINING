export default function Card({ product }) {
  if (!product) return null;   // SAFETY CHECK

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button>Shop Now</button>
    </div>
  );
}
