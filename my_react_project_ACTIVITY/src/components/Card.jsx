export default function Card({ children }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4 bg-white">
      {children}
    </div>
  );
}
