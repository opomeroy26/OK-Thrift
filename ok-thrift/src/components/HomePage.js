import ItemCard from './ItemCard.js'

function HomePage({inventory, onAddToCart}){
    const product = inventory.map((productObj)=> (
        <div>
            <ItemCard 
                key={productObj.id + productObj.name}
                product={productObj}
                handleAddToCart = {onAddToCart}
            />
        </div>
    ))
    
    return (
        <div className='row' id='items'>
            {product}
        </div>
    )
}

export default HomePage;