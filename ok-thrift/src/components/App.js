import {Switch, Route} from "react-router-dom"
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
//import Header from "./Header";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import DetailPage from "./DetailPage";
import ProfilePage from "./ProfilePage";
import '../styles/index.css'

function App() {
  const [inventory, setInventory] = useState([])
  const [cart, setCart] = useState([])
  const history = useHistory();
  const [detail, setDetail] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/inventory")
    .then((resp) => resp.json())
    .then(setInventory)
  }, [])

  function onAddToCart(e, product){
    e.stopPropagation();
    if (!cart.includes(product)) {
      setCart([...cart, product])
    }
    history.push("/cart")

  }

  function onRemoveFromCart(e, product){
    e.stopPropagation();
    setCart(cart.filter((cartItem)=> cartItem !== product))
  }

  function onHomeCardClick(product){
    console.log("Show Details of this product", product)
    history.push("/detail")
    setDetail([product])
  }

  function onCartCardClick(product){
    console.log("Show Details of this Cart product", product)
    history.push("/detail")
    setDetail([product])
  }

  function onReturnToHomeClick(){
    history.push("/")

  }

  function onReturnToCartClick(){
    history.push("/cart")

  }

  function onAddToInventory(product){
    setInventory([...inventory, product])

    
  }


  return (
    <div className="container-fluid" >
      
    
      <div className='row '>
      <div className='col-4 sidebar'>
        <SideBar /> 
      </div>
      <div className='col-8 switch p-2 ml-30 '>
      <Switch>
        <Route exact path="/">
          <HomePage 
            inventory={inventory} 
            onAddToCart = {onAddToCart}
            onCardClick = {onHomeCardClick}
          />
        </Route>
      
        <Route exact path="/cart">
          <CartPage 
            cart={cart}
            onRemoveFromCart = {onRemoveFromCart}
            onCardClick= {onCartCardClick}
          />
        </Route>
      
        <Route exact path="/detail">
          <DetailPage 
            detail={detail}
            handleReturnToHome = {onReturnToHomeClick}
            handleReturnToCart = {onReturnToCartClick}
            onAddToCart = {onAddToCart}
            onRemoveFromCart = {onRemoveFromCart}
            
          />
        </Route>

        <Route exact path="/profile">
          <ProfilePage onAddToInventory={onAddToInventory}/>
        </Route>
      </Switch>
      </div>
      </div>
      
    </div>
  );
}

export default App;
