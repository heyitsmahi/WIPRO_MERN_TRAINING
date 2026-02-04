import {createContext, useEffect,useState} from "react";
export const ProductContext =createContext();
export function ProductProvider({children}){
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    function addProduct(newProduct){
        setProducts(prev=>[...prev,newProduct]);
    }
    return(
        <ProductContext.Provider value={{products,addProduct}}>
            {children}
        </ProductContext.Provider>
    );
}