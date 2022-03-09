import ItemCard from './ItemCard.js';
import React from "react";


function HomePage({inventory, onAddToCart, onCardClick}){
    const product = inventory.map((productObj)=> (
        
            <ItemCard 
                key={productObj.id + productObj.name}
                product={productObj}
                handleAddToCart = {onAddToCart}
                handleCardClick = {onCardClick}
            />
        
    ))
    
    return (
        <div className='row content  d-flex justify-content-center' id='items' >
            {product}
        </div>
    )
}

export default HomePage;