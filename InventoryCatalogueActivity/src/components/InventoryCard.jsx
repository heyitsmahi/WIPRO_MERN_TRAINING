import React, {useState} from "react";
function InventoryCard({product}){
    const[favorite, setFavorite]=useState(false);

    return(
        <div className="col-md-4 mb-4">
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Category: {product.category}</p>
                    <p className="card-text">Price: Rs{product.price}</p>
                    <button
            className={`btn ${
              favorite ? "btn-success" : "btn-outline-primary"
            }`}
            onClick={() => setFavorite(prev => !prev)}
          >
            {favorite ? "★ Favorited" : "☆ Favorite"}
          </button>
                </div>
            </div>
        </div>
    )
}
export default InventoryCard;