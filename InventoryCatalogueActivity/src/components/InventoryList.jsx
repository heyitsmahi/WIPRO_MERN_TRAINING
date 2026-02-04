import React from "react";
import InventoryCard from "./InventoryCard";
function InventoryList(){
const products=[
        { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Charger", price: 2500, category: "Electronics" },
];
return(
     <div className="container mt-4">
      <h2 className="text-center mb-4">Inventory Catalog</h2>

      <div className="row">
        {products.map((item) => (
          <InventoryCard key={item.id} product={item} />
        ))}
      </div>
    </div>
)
}

export default InventoryList;