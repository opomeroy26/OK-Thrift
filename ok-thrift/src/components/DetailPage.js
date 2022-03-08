import React from 'react';
import ItemCard from "./ItemCard";
import CartCard from "./CartCard";

function DetailPage({detail, handleReturnToHome, handleReturnToCart, onAddToCart, onRemoveFromCart}){
    const itemDetail = detail.map((detailObj)=> (
        <div>
            <ItemCard 
                key={detailObj.id}
                product={detailObj}
                handleAddToClick = {onAddToCart}
            />
            {/* <CartCard
                key={detailObj.id}
                product = {detailObj}
                handleRemoveFromCart = {onRemoveFromCart}
            /> */}

        </div>
    ))

    return (
        <div id='cart'>
            <h1>Detail Page</h1>
            <button onClick={() => handleReturnToHome()} className="btn btn-secondary">Return to Home </button>
            <button onClick={() => handleReturnToCart()} className="btn btn-secondary">Return to Cart </button>
            {itemDetail}
        </div>
    )
}

export default DetailPage;
