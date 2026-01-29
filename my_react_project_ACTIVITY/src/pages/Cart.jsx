import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart } =
    useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-10 text-2xl">
        Your cart is empty 🛒
      </div>
    );
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() => addToCart(item)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: ₹{totalPrice}
      </h2>
    </div>
  );
}
