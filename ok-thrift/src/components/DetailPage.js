import React from 'react';
import DetailCard from "./DetailCard";

function DetailPage({detail, handleReturnToHome, onAddToCart, handleReturnToCart}){
    const detailItem = detail.map((productObj)=> (
        <div>
            <DetailCard
                key={productObj.id + productObj.name}
                product={productObj}
                handleAddToCart={onAddToCart}
            />
        </div>
    ))
    
    return (
        <div id='cart'>
            {detailItem}
            <button onClick={() => handleReturnToHome()} className="btn btn-secondary">Continue Shopping </button>
        </div>
    )
}

export default DetailPage;


    
