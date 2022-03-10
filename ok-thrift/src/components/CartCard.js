import React from 'react'
import '../styles/ItemCard.css'
function CartCard({product, handleRemoveFromCart}) {
    const {image, name, description, price, size} = product
    
    return (
        
            <div className= "card border-light col-4  p-2 m-2 item">
                <img className="card-img-top image" src={image} alt={name}/>
                <div className="card-body h-100">
                    <h5 className="card-title">{name}</h5>
                    <h6 className='card-subtitle md-2 text-muted'>Size: {size}</h6>
                    <p className="card-text-item">{description}</p>
                    
                    <p className="price">${price}</p>
                    <button onClick={(e)=>handleRemoveFromCart(e, product)} className="btn btn-secondary">Remove From Cart</button>
                </div>
            </div>
       
   );
   }
   

export default CartCard;