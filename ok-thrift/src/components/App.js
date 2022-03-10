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
  const [sortBy, setSortBy] = useState("All Sizes")
  const [myItems, setMyItems] = useState([])
  const [total, setTotal] = useState(0)
  const [myLikedItems, setMyLikedItems] = useState([])


  useEffect(()=> {
    fetch("http://localhost:3000/inventory")
    .then((resp) => resp.json())
    .then(setInventory)
  }, [])

  useEffect(() => {
    setTotal(0)
    for (let i=0; i<cart.length; i++){
      let runningTotal =((total) => total + parseFloat(cart[i].price))
      setTotal(runningTotal)
      
    }
  },[cart])
  
  
  function onAddToCart(e, product){
    e.stopPropagation();
    if (!cart.includes(product)) {
      setCart([...cart, product])
    }
    history.push("/cart")
    
  }
  function onAddToLikes(e, product){
    e.stopPropagation();
    if( !myLikedItems.includes(product)){
      setMyLikedItems([...myLikedItems, product])
    }
  }

  function onRemoveFromLikes(e, product) {
    e.stopPropagation();
    setMyLikedItems(myLikedItems.filter((productCard) => productCard !== product))
    history.push("/profile")

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

  const searchedInventory = inventory
    .filter((product)=> 
      product.description.toLowerCase().includes(search.toLowerCase()) || product.name.toLowerCase().includes(search.toLowerCase())
    )

    .filter((product) => {
      if (sortBy === "All Sizes") {
        return ([...inventory])

      } else {
        return (product.size.toLowerCase().includes(sortBy.toLowerCase()))
      }
    })

    function onClearSearch(product){
      setSearch("")
    }

  return (
    <div className="container-fluid "  >
      
      <SideBar 
        onSearch={setSearch}
        sortBy={sortBy}
        onSortBy = {setSortBy}
        onClearSearch = {onClearSearch}
      /> 
      
      <div className='content row'  style={{ marginLeft: '200px', marginRight: '25px' }}>
      <Switch>
        <Route exact path="/">
          <HomePage 
            
            inventory={searchedInventory} 
            onAddToCart = {onAddToCart}
            onCardClick = {onHomeCardClick}
            onAddToLikes ={onAddToLikes}
          />
        </Route>
      
        <Route exact path="/cart">
          <CartPage 
            cart={cart}
            onRemoveFromCart = {onRemoveFromCart}
            handleReturnToHome = {onReturnToHomeClick}
            total={total}
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
          onAddToCart = {onAddToCart}
          onRemoveFromLikes={onRemoveFromLikes}

          
          />  
        </Route>

        <Route exact path="/profile">
          <ProfilePage 
          onAddToInventory={onAddToInventory} 
          onCardClick={onProfileCardClick}
          myItems={myItems}
          setMyItems={setMyItems}
          myLikedItems={myLikedItems}
          onRemoveFromLikes={onRemoveFromLikes}
          onAddToCart = {onAddToCart}
          />
        </Route>
      </Switch>
      </div>
      
      
    </div>
  );
}

export default App;
