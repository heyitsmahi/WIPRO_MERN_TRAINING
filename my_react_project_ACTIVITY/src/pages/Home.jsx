import Hero from "../sections/Hero";
import products from "../data/products";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function Home() {
  const featured = products.slice(0, 6); // first 6 items

  return (
    <>
      <Hero />

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Card key={p.id}>
              <img
                src={p.image}
                alt={p.name}
              className="h-40 w-full object-contain mb-3 rounded bg-white"



              />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-blue-600">₹{p.price}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
