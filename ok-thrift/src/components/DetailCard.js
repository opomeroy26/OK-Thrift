import React from 'react';
import '../styles/DetailCard.css'

function DetailCard({product, handleAddToCart, handleCardClick,}) {
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
                </div>
            </div>
        </div>
    </div>
 
);
}

export default DetailCard;


/*
    <div onClick={()=> handleCardClick(product)} className="col  card mb-3"  >
        <div className='row '>
            <div className='col-4 '>
                <img  id='detail-image' className="card-img border-none rounded-start" src={image} alt= {name}/>
            </div>
            <div className='col-8 '>  
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="price">{price}</p>
                    <button onClick={(e)=> handleAddToCart(e, product)} className="btn btn-secondary">Add to Cart 🛒 </button> 
                </div> 
            </div> 
        </div>
        
    </div>
*/