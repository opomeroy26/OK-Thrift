import CartCard from './CartCard.js'
import '../styles/CartPage.css'
import ItemCard from './ItemCard.js'

function CartPage({cart}){
    const cartItem = cart.map((productObj)=> (
        <div>
            <CartCard
                key={productObj.id + productObj.name}
                product={productObj}
            />
        </div>
    ))
    return (
        <div id='cart'>
            {cartItem}
        </div>

    )
}

export default CartPage;