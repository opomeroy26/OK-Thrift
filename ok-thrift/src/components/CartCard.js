import React from 'react'
import '../styles/ItemCard.css'
function CartCard({product, handleRemoveFromCart, handleAddToLikes}) {
    const {image, name, description, price, size} = product
    
    return (
        
            <div className= "card border-light col-4  p-2 m-2 item">
                <img className="card-img-top image" src={image} alt={name}/>
                <div className="card-body h-100">
                    <h5 className="card-title">{name}</h5>
                    <h6 className='card-subtitle md-2 text-muted'>Size: {size}</h6>
                    <p className="card-text-item">{description}</p>
                    
                    <p className="price">${price}</p>
                <div className='row'> 
                    <button onClick={(e)=>handleRemoveFromCart(e, product)} className="btn btn-secondary">Remove From Cart</button>
                    <button onClick={(e)=> handleAddToLikes(e, product)} className='btn-secondary'>Add to Likes </button>
                </div>
                </div>
            </div>
       
   );
   }
   

export default CartCard;