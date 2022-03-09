import ItemCard from './ItemCard.js';
import React from "react";


function HomePage({inventory, onAddToCart, onCardClick, onAddToLikes}){
    const product = inventory.map((productObj)=> (
        
            <ItemCard 
                key={productObj.id + productObj.name}
                product={productObj}
                handleAddToCart = {onAddToCart}
                handleCardClick = {onCardClick}
                handleAddToLikes ={onAddToLikes}
            />
        
    ))
    
    return (
        <div className='row content  d-flex justify-content-center m-2 p-2 ' id='items' >
            {product}
        </div>
    )
}

export default HomePage;