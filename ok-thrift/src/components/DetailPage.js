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
        
        <div>
        <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
            <button onClick={() => handleReturnToHome()} className="btn btn-secondary">Continue Shopping </button>
        </div>
        <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
            {detailItem}
        </div>
        </div>
    )
}

export default DetailPage;


    
