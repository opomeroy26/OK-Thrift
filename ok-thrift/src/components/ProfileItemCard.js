import React from 'react'
import '../styles/ItemCard.css'

function ProfileItemCard({product, handleCardClick, productId, handleRemoveFromLikes, handleAddToCart}) {
    const {name, description, price, image, size} = product
    return (
    <div onClick={()=> handleCardClick(product, productId)} className="card border-light col-4  p-2 m-2 item" >
    <img className="card-img-top image" src={image} alt= {name}/>
   <div className="card-body h-100">
       <h5 className="card-title">{name}</h5>
       <h6 className='card-subtitle md-2 text-muted'>Size: {size}</h6>
       <p className="card-text-item">{description}</p>
       
       <p className="price">${price}</p>
       <div className ='row'>
        {/* <button onClick={(e)=> handleAddToCart(e, product)} className="btn btn-secondary">Add to Cart  </button>
        <button onClick={(e)=> handleRemoveFromLikes(e, product)} className='btn-secondary'>Remove From Likes</button> */}
       </div>
       
   </div> 
</div>
  )
}

export default ProfileItemCard