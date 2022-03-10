import { useState } from 'react'
import '../styles/ProfilePage.css'
import Form from './Form.js'
import ProfileItemCard from './ProfileItemCard'
import LikeItemCard from './LikeItemCard'


function ProfilePage({ myItems, setMyItems, onAddToInventory, onAddToListings, onCardClick, onListingCardClick, myLikedItems, onRemoveFromLikes, onAddToCart,  onLikedCardClick }){

    const initialFormState = {
        name: '',
        description: '',
        image: '',
        price:'',
        size:''
    }
    
    const [showForm, setShowForm] = useState(false)
    const [showLikes, setShowLikes] = useState(false)

    

    const [formState, setFormState]= useState(initialFormState)
  
    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormState(formState => ({...formState, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault()
           
        if (formState.image === '') {
            alert('Please provide an image')
        }
        else if(formState.name === '') {
            alert('Please give your item a name')
        }
        else if(formState.price === '') {
            alert('Please give your item a price')
        }
        
        else if(formState.description === '') {
            alert('Please enter a description')
        }
        else {
       fetch('http://localhost:3001/mylistings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })
            .then(onAddToInventory(formState))
            .then(onAddToListings(formState))
            .then(setFormState(initialFormState))
            .then(setMyItems([...myItems, formState]))
        
        
            

        }   
    }
    
   

   const myItemsCard = myItems.map((productObj) => (
        
            <ProfileItemCard 
                key={productObj.id + productObj.name}
                product={productObj}
                handleCardClick = {onListingCardClick}
                productId={productObj.id}
            />
        
   ))
    

   const likedItem = myLikedItems.map((productObj)=> (
         
           <LikeItemCard
            key={productObj.id + productObj.name}
            product={productObj}
            // handleLikedCardClick = {onLikedCardClick}
            handleCardClick = {onCardClick}
            handleRemoveFromLikes ={onRemoveFromLikes}
            handleAddToCart = {onAddToCart}
        />
       
   )) 
    function handleShowForm() {
        setShowForm(!showForm)
        setShowLikes(false)
    }
    function handleShowLikes() {
        setShowLikes(!showLikes)
        setShowForm(false)
    }

    
    return (
            <div className='container p-3 m-3 ' id='profile'>
                <img className ='rounded-circle  border profile-image'
                    src ='https://static9.depositphotos.com/1009634/1075/v/450/depositphotos_10757374-stock-illustration-no-user-profile-picture.jpg' 
                    alt='profile'>
                </img>
                <h3 id='username'>John Doe</h3> {/* If we get to authenticate should be dynamic */}
                <h5 id='bio' className='p-2 m-2'>  
                    I sell sick clothes, check out my listings!
                </h5> {/*Should also be dynamic */}
                
                <button className='btn-secondary' 
                        onClick={handleShowLikes}
                        > 
                        {showLikes ? 'Hide Likes': 'Show Likes'} 
                </button>
                
                <button className="btn btn-secondary" 
                        onClick={handleShowForm}
                        >
                        {showForm ? 'Hide Form' : 'Add New Listing'}
                </button>

                {showForm ? <Form handleChange={handleChange} handleSubmit={handleSubmit} formState={formState} /> : null}
                <div className='row m-2 p-2' id='likes'>
                    {showLikes ? likedItem : null}
                </div>
            
               
            <div id='currentListings'>
                <h4 className='p-2 m-2'>Active Listings</h4> {/* When you add a new listing it should add to a list here, removing one will also update here*/}
                <div className='row m-2 p-2' id='listings'>
                    {myItemsCard}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage; 