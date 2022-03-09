import { useState } from 'react'
import '../styles/ProfilePage.css'
import ItemCard from './ItemCard.js'
import Form from './Form.js'

function ProfilePage({ onAddToInventory }){
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [myItems, setMyItems] = useState([])
    const [showForm, setShowForm] = useState(false)


    function handleImageChange(event) {
        setImage(event.target.value)
        
    }
    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handlePriceChange(event) {
        setPrice(event.target.value)
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }
  
    function handleSubmit(event){
        event.preventDefault()
        const formData ={image: image, name: name, price: price, description: description}
        setMyItems([...myItems, formData])    
        fetch('http://localhost:3001/inventory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(onAddToInventory(formData)
            .then( setImage(''),
                    setName(''),
                    setPrice(''),
                    setDescription('')
            )
        )  
    }
    
   const newItem = myItems.map((productObj)=> (
    <div>
        <ItemCard 
            key={productObj.id + productObj.name}
            product={productObj}
            
        />
    </div>
   ))
    
    function handleShowForm() {
        setShowForm(!showForm)
    }
    

    
    return (
            <div className='container p-3 m-3' id='profile'>
                <img className ='rounded-circle  border profile-image'
                    src ='https://static9.depositphotos.com/1009634/1075/v/450/depositphotos_10757374-stock-illustration-no-user-profile-picture.jpg' 
                    alt='profile'>
                </img>
                <h3 id='username'>John Doe</h3> {/* If we get to authenticate should be dynamic */}
                <h5 id='bio' className='p-2 m-2'>  
                    I sell sick clothes, check out my listings!
                </h5> {/*Should also be dynamic */}
                
                
                <button class="btn btn-secondary" 
                        onClick={handleShowForm}
                        >
                        {showForm ? 'Hide Form' : 'Add New Listing'}
                </button>
                {showForm ? <Form handleDescriptionChange={handleDescriptionChange} handleImageChange={handleImageChange} handleNameChange={handleNameChange} handlePriceChange={handlePriceChange} handleSubmit={handleSubmit} name={name} image={image} description={description} price={price}/> : null}
                
           
            
               
            <div id='currentListings'>
                <h4 className='p-2 m-2'>My Listings</h4> {/* When you add a new listing it should add to a list here, removing one will also update here*/}
                {newItem}
            </div>
        </div>
    )
}

export default ProfilePage; 