import React from 'react'
import '../styles/CartCard.css'
function CartCard({product, handleRemoveFromCart}) {
    const {image, name, description, price, size} = product
    
    return (
        
            <div className= "card col-4  p-2 m-2" >
                <img className="card-img-top image" src={image} alt={name}/>
                <div className="card-body h-100">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text-item">{description}</p>
                    <p className="card-text-item">Size: {size}</p>
                    <p className="price">${price}</p>
                    <button onClick={(e)=>handleRemoveFromCart(e, product)} className="btn btn-secondary">Remove From Cart</button>
                </div>
            </div>
       
   );
   }
   

export default CartCard;