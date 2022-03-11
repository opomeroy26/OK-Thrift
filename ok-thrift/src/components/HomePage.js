import ItemCard from './ItemCard.js';
import React from "react";


function HomePage({inventory, onAddToCart, onCardClick, onAddToLikes, myItems}){
    const product = inventory.map((productObj)=> (
        
            <ItemCard 
                key={productObj.id + productObj.name}
                product={productObj}
                handleAddToCart = {onAddToCart}
                handleCardClick = {onCardClick}
                handleAddToLikes ={onAddToLikes}
                myItems={myItems}
                inventory={inventory}


            />
        
    ))
    const myProduct = myItems.map((productObj) => (
        <ItemCard 
            key={productObj.id + productObj.name}
            product={productObj}
            handleAddToCart = {onAddToCart}
            handleCardClick = {onCardClick}
            handleAddToLikes ={onAddToLikes}
            myItems={myItems}
            inventory={inventory}


    />

    ))
    if (inventory.length !==0){
    return (
        <div className='row content  d-flex justify-content-center m-2 p-2 ' id='items' >
            {product}
            {myProduct}
        </div>
    )
    }
    else return (
        <div className='row content  d-flex justify-content-center m-2 p-2'>
            <h4>Sorry, no dice</h4>
        </div>
    )
}

export default HomePage;