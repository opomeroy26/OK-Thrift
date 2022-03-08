import {Switch, Route} from "react-router-dom"
import React, {useEffect, useState} from "react";
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

  useEffect(()=> {
    fetch("http://localhost:3000/inventory")
    .then((resp) => resp.json())
    .then(setInventory)
  }, [])

  function onAddToCart(e, product){
    e.stopPropagation();
    if (!cart.includes(product)) {
      setCart([...cart, product])
    }
  }

  function onRemoveFromCart(e, product){
    e.stopPropagation();
    setCart(cart.filter((cartItem)=> cartItem !== product))
  }

  function onCardClick(product){
    console.log("Show Details of this product", product)
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
            onCardClick = {onCardClick}
          />
        </Route>
      
        <Route exact path="/cart">
          <CartPage 
            cart={cart}
            onRemoveFromCart = {onRemoveFromCart}
            onCardClick= {onCardClick}
          />
        </Route>
      
        <Route exact path="/detail">
          <DetailPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
      </div>
      </div>
      
    </div>
  );
}

export default App;
