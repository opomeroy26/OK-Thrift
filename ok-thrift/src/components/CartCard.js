import React from 'react'
import '../styles/CartCard.css'
function CartCard({product, handleRemoveFromCart, handleCardClick}) {
    const {image, name, description, price} = product
    
    return (
        <div>
            <div onClick={()=> handleCardClick(product)} className="card col-12  p-2 m-2" >
                <img className="card-img-top image" src={image} alt={name}/>
                <div className="card-body h-100">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <span className="price">{price}</span>
                    <button onClick={(e)=>handleRemoveFromCart(e, product)} className="btn btn-primary">Remove From Cart</button>
                </div>
            </div>
       </div>
   );
   }
   

export default CartCard;