import ItemCard from './ItemCard.js'

function HomePage({inventory}){
    const product = inventory.map((productObj)=> (
        <div>
            <ItemCard 
                key={productObj.id + productObj.name}
                inventory={productObj}
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