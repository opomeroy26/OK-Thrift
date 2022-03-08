import React from 'react';
import '../styles/ItemCard.css'

function DetailCard({product, handleAddToCart, handleCardClick,}) {
    const {name, description, price, image} = product

    return (
     <div onClick={()=> handleCardClick(product)} className="card col-12  p-2 m-2" >
         <img className="card-img-top image" src={image} alt= {name}/>
        <div className="card-body h-100">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="price">{price}</p>
            <button onClick={(e)=> handleAddToCart(e, product)} className="btn btn-secondary">Add to Cart 🛒 </button> 
        </div> 
    </div>
);
}

export default DetailCard;