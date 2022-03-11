import React from 'react';

function CartDetailCard({product, handleAddToLikes, handleRemoveFromCart}) {
    const {name, description, price, image, size} = product

        return (
        <div className="card mb-3 border-light rounded" id='detail-card' >
        <div className="row g-0">
            <div className="col-md-6">
                <img id='detail-image' src={image} class="img-fluid rounded-start" alt={name}></img>
            </div>
            <div className="col-md-6">
                <div className="card-body h-100 w-100">
                    <h5 className="card-title">{name}</h5>
                    <h6 className='card-subtitle text-muted'>Size: {size}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <div className='row'>
                        <button onClick={(e)=> handleAddToLikes(e, product)} className='btn-secondary m-1 p-1'> Add to Likes </button>
                        <button onClick={(e)=> handleRemoveFromCart(e, product)} className='btn-secondary m-1 p-1'> Remove From Cart </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default CartDetailCard;


