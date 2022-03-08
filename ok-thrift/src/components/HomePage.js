import ItemCard from './ItemCard.js'

function HomePage({inventory, onAddToCart, onCardClick}){
    const product = inventory.map((productObj)=> (
        <div>
            <ItemCard 
                key={productObj.id + productObj.name}
                product={productObj}
                handleAddToCart = {onAddToCart}
                handleCardClick = {onCardClick}
            />
        </div>
    ))
    
    return (
        <div className='row content d-flex justify-content-center' id='items' >
            {product}
        </div>
    )
}

export default HomePage;