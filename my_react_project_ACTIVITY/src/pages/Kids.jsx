import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import Card from "../components/Card";
import { motion } from "framer-motion";


export default function Kids() {
  const { cart, addToCart } = useContext(CartContext);

  const kidsProducts = products.filter(p => p.category === "kids");

  return (
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Kids Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {kidsProducts.map((p) => {
          const cartItem = cart.find(c => c.id === p.id);
          const qty = cartItem?.qty || 0;

          return (
            <Card key={p.id}>
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-contain mb-3 rounded bg-white"
              />

              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-blue-600 mb-2">₹{p.price}</p>

              <button
                onClick={() => addToCart(p)}
                className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition"
              >
                 Add to Cart {qty > 0 && `(${qty})`}
              </button>

            
            </Card>
          );
        })}
      </div>
    </div>
  );
}
