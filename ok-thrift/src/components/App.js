import {Switch, Route} from "react-router-dom"
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import DetailPage from "./DetailPage";
import ProfilePage from "./ProfilePage";
import ListingDetailPage from './ListingDetailPage'
import CartDetailPage from './CartDetailPage'
import '../styles/index.css'
import '../styles/SideBar.css'
import '../styles/App.css'

function App() {
  const [inventory, setInventory] = useState([])
  const [cart, setCart] = useState([])
  const history = useHistory();
  const [homeItemdetail, setHomeItemDetail] = useState([])
  const [cartItemDetail, setCartItemDetail] = useState([])
  const [listingDetail, setListingDetail] = useState([])
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("All Sizes")
  const [myItems, setMyItems] = useState([])
  const [total, setTotal] = useState(0)
  const [myLikedItems, setMyLikedItems] = useState([])
  const [productId, setProductId] = useState('')


  useEffect(()=> {
    fetch("http://localhost:3001/inventory")
    .then((resp) => resp.json())
    .then(setInventory)
  }, [])


  useEffect(()=> {
    fetch('http://localhost:3001/mylistings')
    .then((resp) => resp.json())
    .then(setMyItems)
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

  function onCardClick(product){
    history.push('/listingdetail')
    setListingDetail([product])
  }


  function onListingCardClick(product, productId){
    history.push('/listingdetail')
    setListingDetail([product])
    setProductId([productId])
  }

  function onCartCardClick(product){
    history.push('/cartdetail')
    setCartItemDetail([product])
  }

  function onReturnToHomeClick(){
    history.push("/")

  }

  function onReturnToProfileClick(){
    history.push('/profile')
  }

  function onReturnToCart(){
    history.push('/cart')
  }

  function onAddToInventory(product){
    setInventory([...inventory, product])

  }

  function onAddToListings(product){
    setMyItems([...myItems, product])
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

  
  
    function onUpdateListing(updatedListing){
      const updatedListings = inventory.map(originalListing => {
        if (updatedListing.id === originalListing.id) {
          return updatedListing
        } else {
          return originalListing
        }
      })
      const updatedItems = myItems.map(originalListing => {
        if (updatedListing.id === originalListing.id) {
          return updatedListing
        } else {
          return originalListing
        }
      })
      //setInventory(updatedListings)
      setMyItems(updatedItems)
    }

    function onDeleteListing(product){
      console.log("here i am on app page")
      setInventory(inventory.filter((listingItem) => listingItem !== product))
      setMyItems(myItems.filter((listingItem) => listingItem !== product))
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
            myItems = {myItems}
          />
        </Route>
      
        <Route exact path="/cart">
          <CartPage 
            cart={cart}
            onRemoveFromCart = {onRemoveFromCart}
            handleReturnToHome = {onReturnToHomeClick}
            total={total}
            onAddToLikes={onAddToLikes}
            onCartCardClick = {onCartCardClick}
          />
        </Route>
      
        <Route exact path="/detail">
          <DetailPage 
            detail={homeItemdetail}
            handleReturnToHome = {onReturnToHomeClick}
            onAddToCart = {onAddToCart}
            onRemoveFromCart = {onRemoveFromCart}
            onAddToLikes={onAddToLikes}
            inventory={inventory}
            myItems={myItems}
            
          />
        </Route>
        <Route exact path="/cartdetail">
          <CartDetailPage 
            detail={cartItemDetail}
            onRemoveFromCart = {onRemoveFromCart}
            onAddToLikes={onAddToLikes}
            handleReturnToCart ={onReturnToCart}

            
            
          />
        </Route>
        <Route exact path='/listingdetail'>
          <ListingDetailPage
          detail={listingDetail}
          handleReturnToProfile = {onReturnToProfileClick}
          onAddToCart = {onAddToCart}
          onRemoveFromLikes={onRemoveFromLikes}

          onUpdateListing={onUpdateListing}
          productId={productId}

          myLikedItems={myLikedItems}
          myItems={myItems}
          setMyItems={setMyItems}

          inventory ={inventory}
          setInventory={setInventory}

          onDeleteListing ={onDeleteListing}


          />  
        </Route>
    
        <Route exact path="/profile">
          <ProfilePage 
          onAddToInventory={onAddToInventory} 

          onAddToListings={onAddToListings}

          onCardClick={onCardClick}

          // onCardClick={onProfileCardClick}

          onListingCardClick={onListingCardClick}

          setInventory={setInventory}
          inventory={inventory}

          
          // onLikedCardClick ={onLikedCardClick}

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
