import {Switch, Route} from "react-router-dom"
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import DetailPage from "./DetailPage";
import ProfilePage from "./ProfilePage";
import '../styles/index.css'
import '../styles/SideBar.css'

function App() {
  const [inventory, setInventory] = useState([])
  const [cart, setCart] = useState([])
  const history = useHistory();
  const [homeItemdetail, setHomeItemDetail] = useState([])

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
    history.push("/detail")
    setHomeItemDetail([product])
  }

  function onReturnToHomeClick(){
    history.push("/")

  }

  function onAddToInventory(product){
    setInventory([...inventory, product])

  }


  return (
    <div className="container-fluid" >
      
    
      
        <SideBar /> 
      
      <div className='content row' style={{ marginLeft: '200px', marginRight: '25px' }}>
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
            handleReturnToHome = {onReturnToHomeClick}
          />
        </Route>
      
        <Route exact path="/detail">
          <DetailPage 
            detail={homeItemdetail}
            handleReturnToHome = {onReturnToHomeClick}
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
  );
}

export default App;
