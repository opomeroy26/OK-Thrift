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

  function onAddToCart(product){
    if (!cart.includes(product)) {
      setCart([...cart, product])
    }
  }

  function onRemoveFromCart(product){
    console.log("Remove from cart", product)
    setCart(cart.filter((cartItem)=> cartItem !== product))
  }


  return (
    <div className="container-fluid" >
      
    
      <div className='row nopadding'>
      <div className='col-2 sidebar nopadding'>
        <SideBar /> 
      </div>
      <div className='col-10 switch '>
      <Switch>
        <Route exact path="/">
          <HomePage 
            inventory={inventory} 
            onAddToCart = {onAddToCart}
          />
        </Route>
      
        <Route exact path="/cart">
          <CartPage 
            cart={cart}
            onRemoveFromCart = {onRemoveFromCart}
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
