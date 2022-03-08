import React from 'react'

function CartCard({product, handleRemoveFromCart, handleCardClick}) {
    const {image, name, description, price} = product
    
    return (
        <div>
            <div onClick={()=> handleCardClick(product)} className="card col-8 m-1 p-1" >
                <img className="card-img-top" src={image} alt={name}/>
                <div className="card-body">
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