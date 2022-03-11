import CartCard from './CartCard.js'
import '../styles/CartPage.css'

function CartPage({cart, onRemoveFromCart, handleReturnToHome, total, onAddToLikes, onCartCardClick}){
    const cartItem = cart.map((productObj)=> (
        <div className='col-3 m-3 p-3'>
            <CartCard
                key={productObj.id + productObj.name}
                product={productObj}
                handleRemoveFromCart = {onRemoveFromCart}
                handleAddToLikes = {onAddToLikes}
                handleCartCardClick = {onCartCardClick}
            />
        </div>
    ))
    return (
        <div>
            <div id='cart' className='row justify-content-center mb-2 pb-2 align-self-center'>
                {cart.length ? 
                    cartItem : 
                    <div className='row justify-content-center mb-2 pb-2 align-self-center'>
                        <div className='col'></div>
                        <div className='col justify-content-center m-2 p-2'>
                            <div id='bigLogo' className=' row m-5 p-5  justify-content-center align-self-center'> 
                                <h1 id='bigTopH1' className='justify-content-center pb-2'><b>OK</b></h1>
                                <hr id='bigLogoHr' className='justify-content-center pt-2'/>
                                <h1 id='bigBottomH1' className='pt-2' ><b>Thrift</b></h1>
                            
                            <h4 className='row m-3 p-3 justify-content-center align-self-center mt-5 pt-3 '>
                                Cart is Empty
                            </h4>
                            </div>
                        </div>
                        <div className='col'></div>
                        </div>
                }
                
            </div>
            <div className='row d-flex justify-content-center m-2 p-2'>
            <hr id='horizontalrule' classsName='m-4 p-4'/>
            
                <button className='btn-primary'> Subtotal: ${total.toFixed(2)}</button>
            </div>
            <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
                <button onClick={() => handleReturnToHome()} className="btn btn-secondary">Continue Shopping </button>
            </div>
        </div>
    )
}

export default CartPage;