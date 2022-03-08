import CartCard from './CartCard.js'
import '../styles/CartPage.css'

function CartPage({cart, onRemoveFromCart, handleReturnToHome}){
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
            <button onClick={() => handleReturnToHome()} className="btn btn-secondary">Continue Shopping </button>
        </div>

    )
}

export default CartPage;