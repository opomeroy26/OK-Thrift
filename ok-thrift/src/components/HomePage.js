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
        <div id='cart'>
                <div className='row justify-content-center mb-2 pb-2 align-self-center'>
                    <div className='col'></div>
                        <div className='col justify-content-center m-2 p-2'>
                            <div id='bigLogo' className=' row m-5 p-5  justify-content-center align-self-center'> 
                                <h1 id='bigTopH1' className='justify-content-center pb-2'><b>OK</b></h1>
                                <hr id='bigLogoHr' className='justify-content-center pt-2'/>
                                <h1 id='bigBottomH1' className='pt-2' ><b>Thrift</b></h1>
                        
                                <h4 className='row m-3 p-3 justify-content-center align-self-center mt-5 pt-3 '>
                                    Sorry, No Results Found 
                                </h4>
                            </div>
                        </div>
                    <div className='col'></div>
                </div>
        </div>
            <hr id='horizontalrule' classsName='m-4 p-4'/>
        <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
            <button onClick={() => handleClearSearch()} className="btn btn-secondary">Back to home</button>
        </div>
    </div>
    )
}

export default HomePage;