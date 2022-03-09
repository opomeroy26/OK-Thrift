import CartCard from './CartCard.js'
import '../styles/CartPage.css'

function CartPage({cart, onRemoveFromCart, handleReturnToHome}){
    const cartItem = cart.map((productObj)=> (
        
            <CartCard
                key={productObj.id + productObj.name}
                product={productObj}
                handleRemoveFromCart = {onRemoveFromCart}
            />
        
    ))
    return (
        <div>
        <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
            <button onClick={() => handleReturnToHome()} className="btn btn-secondary">Continue Shopping </button>
        </div>
        <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
            {cartItem}
        </div>
        </div>

    )
}

export default CartPage;