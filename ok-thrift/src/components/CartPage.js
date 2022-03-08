import CartCard from './CartCard.js'
import '../styles/CartPage.css'

function CartPage({cart, onRemoveFromCart, onCardClick,}){
    const cartItem = cart.map((productObj)=> (
        <div>
            <CartCard
                key={productObj.id + productObj.name}
                product={productObj}
                handleRemoveFromCart = {onRemoveFromCart}
                handleCardClick = {onCardClick}
            />
        </div>
    ))
    return (
        <div className='row' id='cart'>
            {cartItem}
        </div>

    )
}

export default CartPage;