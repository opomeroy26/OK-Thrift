import CartCard from './CartCard.js'
import '../styles/CartPage.css'
import ItemCard from './ItemCard.js'

function CartPage({cart, onRemoveFromCart}){
    const cartItem = cart.map((productObj)=> (
        <div>
            <CartCard
                key={productObj.id + productObj.name}
                product={productObj}
                handleRemoveFromCart = {onRemoveFromCart}
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