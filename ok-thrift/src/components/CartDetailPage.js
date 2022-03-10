import React from 'react';
import CartDetailCard from "./CartDetailCard";

function CartDetailPage({detail, handleReturnToCart, onRemoveFromCart, onAddToLikes}){
    const detailItem = detail.map((productObj)=> (
        <div>
            <CartDetailCard
                key={productObj.id + productObj.name}
                product={productObj}
                handleAddToLikes = {onAddToLikes}
                handleRemoveFromCart = {onRemoveFromCart}
            />
        </div>
    ))
    
    return (
        
        <div>
            <div className=' row d-flex justify-content-center m-2 p-2' id='cart'>
                {detailItem}
            </div>
            <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
                <button onClick={() => handleReturnToCart()} className="btn btn-secondary">Return to Cart</button>
            </div>
        </div>
    )
}

export default CartDetailPage;


    
