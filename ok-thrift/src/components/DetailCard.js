import React from 'react';
import '../styles/DetailCard.css'

function DetailCard({product, handleAddToCart, handleCardClick, handleAddToLikes}) {
    const {name, description, price, image, size} = product

    return (

    <div class="card mb-3 border-light rounded" id='detail-card' >
        <div class="row g-0">
            <div class="col-md-6">
                <img id='detail-image' src={image} class="img-fluid rounded-start" alt={name}></img>
            </div>
            <div class="col-md-6">
                <div class="card-body h-100 w-100">
                    <h5 class="card-title">{name}</h5>
                    <h6 class='card-subtitle text-muted'>Size: {size}</h6>
                    <p class="card-text">{description}</p>
                    <p class="card-text">${price}</p>
                    <button onClick={(e)=> handleAddToCart(e, product)} className="btn btn-secondary">Add to Cart 🛒 </button> 
                    <button onClick={(e)=> handleAddToLikes(e, product)} className='btn-secondary'> Add to Likes </button>
                </div>
            </div>
        </div>

    </div>
 
);
}

export default DetailCard;


