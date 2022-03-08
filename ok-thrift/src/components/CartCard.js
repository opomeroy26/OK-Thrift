import React from 'react'

function CartCard({product}) {
    const {image, name, description, price} = product
    
    return (
        <div>
            <div className="card col-8 m-1 p-1" >
                <img className="card-img-top" src={image} alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <span className="price">{price}</span>
                    <button className="btn btn-primary">Remove From Cart</button>
                </div>
            </div>
       </div>
   );
   }
   

export default CartCard;