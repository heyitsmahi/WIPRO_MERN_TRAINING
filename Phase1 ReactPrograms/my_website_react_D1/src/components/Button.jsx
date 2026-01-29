export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-900"
    >
      {text}
    </button>
  );
}