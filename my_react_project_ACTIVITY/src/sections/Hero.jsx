import Button from "../components/Button";
import heroImg from "../assets/images/banner.jpg";

export default function Hero() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl font-bold">SUMMER COLLECTION</h1>
          <p className="mt-3 text-gray-600">Cool clothes, 20% OFF</p>
          <Button className="mt-6">Shop Now</Button>
        </div>

       <div className="h-full">
  <img
    src={heroImg}
    alt="model"
    className="w-full h-full object-cover rounded-lg"
  />
</div>

      </div>
    </section>
  );
}
