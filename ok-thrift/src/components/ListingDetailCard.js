import React from 'react'

function ListingDetailCard({product, handleRemoveFromLikes, handleAddToCart}) {
    const {name, description, price, image, size} = product
    return (
        <div className="card mb-3 border-light rounded" id='detail-card' >
        <div className="row g-0">
            <div className="col-md-6">
                <img id='detail-image' src={image} className="img-fluid rounded-start" alt={name}></img>
            </div>
            <div className="col-md-6">
                <div className="card-body h-100 w-100">
                    <h5 className="card-title">{name}</h5>
                    <h6 className='card-subtitle text-muted'>Size: {size}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <div className = 'row'>
                        <button onClick={(e)=> handleAddToCart(e, product)} className="btn btn-secondary">Add to Cart  </button>
                        <button onClick={(e)=> handleRemoveFromLikes(e, product)} className='btn-secondary'>Remove From Likes</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListingDetailCard