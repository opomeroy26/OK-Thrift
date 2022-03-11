import ItemCard from './ItemCard.js';
import React from "react";


function HomePage({inventory, onAddToCart, onCardClick, onAddToLikes, myItems, handleClearSearch}){
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
        <div>
            <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
                <h4 className='col d-flex justify-content-center m-2 p-2'>Sorry, no results found</h4>
                {}
            </div>
            <hr id='horizontalrule'/>
            <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
                <button onClick={() => handleClearSearch()} className="btn btn-secondary">Back to home</button>
            </div>
        </div>
    )
}

export default HomePage;