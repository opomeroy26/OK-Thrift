import CartCard from './CartCard.js'
import '../styles/CartPage.css'

function CartPage({cart, onRemoveFromCart, handleReturnToHome, total, onAddToLikes, onCartCardClick}){
    const cartItem = cart.map((productObj)=> (
        
            <CartCard
                key={productObj.id + productObj.name}
                product={productObj}
                handleRemoveFromCart = {onRemoveFromCart}
                handleAddToLikes = {onAddToLikes}
                handleCartCardClick = {onCartCardClick}
            />
    ))
    return (
        <div>
            <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
                {cart.length ? cartItem : <h4 className='col d-flex justify-content-center m-2 p-2'>Cart is empty <br />:&#40; </h4>}
                {}
            </div>
            <hr id='horizontalrule'/>
            <div className='row d-flex justify-content-center m-2 p-2'>
                <button className='btn-primary'> Subtotal: ${total.toFixed(2)}</button>
            </div>
            <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
                <button onClick={() => handleReturnToHome()} className="btn btn-secondary">Continue Shopping </button>
            </div>
        </div>
    )
}

export default CartPage;