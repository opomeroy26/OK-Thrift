import {Switch, Route} from "react-router-dom"
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import DetailPage from "./DetailPage";
import ProfilePage from "./ProfilePage";
import ListingDetailPage from './ListingDetailPage'
import '../styles/index.css'
import '../styles/SideBar.css'
import '../styles/App.css'

function App() {
  const [inventory, setInventory] = useState([])
  const [cart, setCart] = useState([])
  const history = useHistory();
  const [homeItemdetail, setHomeItemDetail] = useState([])
  const [listingDetail, setListingDetail] = useState([])
  const [search, setSearch] = useState("")
  const [myItems, setMyItems] = useState([])


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
    console.log("Adding to cart", product)

  }

  function onRemoveFromCart(e, product){
    e.stopPropagation();
    setCart(cart.filter((cartItem)=> cartItem !== product))
  }

  function onHomeCardClick(product){
    history.push("/detail")
    setHomeItemDetail([product])
  }

  function onProfileCardClick(product){
    history.push('/listingdetail')
    setListingDetail([product])
  }

  function onReturnToHomeClick(){
    history.push("/")

  }

  function onReturnToProfileClick(){
    history.push('/profile')
  }

  function onAddToInventory(product){
    setInventory([...inventory, product])

  }

  const searchedInventory = inventory.filter((product) => 
    product.description.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="container-fluid "  >
      
    
      
        <SideBar onSearch={setSearch}/> 
      
      <div className='content row'  style={{ marginLeft: '200px', marginRight: '25px' }}>
      <Switch>
        <Route exact path="/">
          <HomePage 
            
            inventory={searchedInventory} 
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
        <Route exact path='/listingdetail'>
          <ListingDetailPage
          detail={listingDetail}
          handleReturnToProfile = {onReturnToProfileClick}
          
          />  
        </Route>

        <Route exact path="/profile">
          <ProfilePage 
          onAddToInventory={onAddToInventory} 
          onCardClick={onProfileCardClick}
          myItems={myItems}
          setMyItems={setMyItems}
          />
        </Route>
      </Switch>
      </div>
      
      
    </div>
  );
}

export default App;
