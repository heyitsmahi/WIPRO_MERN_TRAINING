import React from 'react'
import {useState} from 'react'
function StockCounter(){
    const[stock, setStock]=useState(0);

      function addStock(){
                setStock(stock+1);
            }

            function removeStock(){
                if(stock>0){
                    setStock(stock-1);
                }
            }
    return(
            <div className="flex items-center justify-center">

            <div className="w-80 p-6 bg-white rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-bold mb-4">Inventory Manager</h1>
            <p className="text-lg m-6">
                Current Stock: <span className="font-semibold">{stock}</span>
            </p>
            <div className="fex justify-between">
                <button onClick={addStock} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add Stock</button>
                <button onCLick={removeStock} disabled={stock==0}  className={`px-4 py-2 rounded text-white
              ${stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}>Remove Stock</button>
            </div>
        </div>
        </div>
    )


}
export default StockCounter

 /*Create a simple inventory screen where
Manager sees inventory count
Can add stock
Can remove stock
Remove disabled when stock is zero*/