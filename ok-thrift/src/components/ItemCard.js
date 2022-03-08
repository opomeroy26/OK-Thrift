import React from 'react';

function ItemCard({product, handleAddToCart}) {
    const {name, description, price, image} = product

    return (
     <div className="card col-5 m-1 p-1" >
         <img className="card-img-top" src={image} alt= {name}/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <span className="price">{price}</span>
            <button onClick={()=> handleAddToCart(product)} className="btn btn-primary">Add to Cart 🛒 </button>
        </div>
    </div>
);
}

export default ItemCard;