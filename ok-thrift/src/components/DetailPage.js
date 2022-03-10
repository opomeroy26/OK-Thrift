import React from 'react';
import DetailCard from "./DetailCard";

function DetailPage({detail, handleReturnToHome, onAddToCart, onAddToLikes, inventory, myItems}){
    const detailItem = detail.map((productObj)=> (
        
            <DetailCard
                key={productObj.id + productObj.name}
                product={productObj}
                handleAddToCart={onAddToCart}
                handleAddToLikes = {onAddToLikes}
                inventory={inventory}
                myItems={myItems}
            />
    ))
    
    return (
        <div>
            <div className=' row d-flex justify-content-center m-2 p-2' id='cart'>
                {detailItem}
            </div>
            <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
                <button onClick={() => handleReturnToHome()} className="btn btn-secondary">Continue Shopping </button>
            </div>
        </div>
    )
}

export default DetailPage;


    
