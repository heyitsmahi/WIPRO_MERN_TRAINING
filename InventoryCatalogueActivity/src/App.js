import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import InventoryList from "./components/InventoryList";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/add" element={<AddProduct/>}/>
    </Routes>
    <InventoryList/>
    </>
  );
}

export default App;
