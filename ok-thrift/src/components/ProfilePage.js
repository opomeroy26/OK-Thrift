import { useState } from 'react'
import '../styles/ProfilePage.css'


function ProfilePage({ onAddToInventory }){
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

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
    
   
    
    
    
    return (
        <div className='container p-3 m-3' id='profile'>
            <img src ='https://static9.depositphotos.com/1009634/1075/v/450/depositphotos_10757374-stock-illustration-no-user-profile-picture.jpg' alt='profile'></img>
            <h3 id='username'>John Doe</h3> {/* If we get to authenticate should be dynamic */}
            <h5 id='bio'>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </h5> {/*Should also be dynamic */}
            <div id='newItemForm'>
                <form id='form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label for='image'>Image</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='image' 
                            placeholder='Please enter a image URL'
                            value={image}
                            onChange={handleImageChange}
                            >
                        </input>
                    </div>
                    <div className='form-group'>
                        <label for='name'>Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='What are you trying to sell?'
                            value={name}
                            onChange={handleNameChange}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label for='price'>Price</label>
                        <input
                            type='text'
                            className='form-control'
                            id='price'
                            placeholder='$'
                            value={price}
                            onChange={handlePriceChange}>
                        </input>
                    </div>
                    <div class='form-group'>
                        <label for='description'>Description</label>
                        <input
                            type='text'
                            class='form-control'
                            id='description'
                            placeholder='enter a brief desription about your item'
                            value={description}
                            onChange={handleDescriptionChange}>
                        </input>
                    </div>
                    <button type='submit' class='btn btn-secondary'>Add Listing</button>
                </form>
            </div>
            <div id='currentListings'>
                <p> CURRENT LISTINGS </p> {/* When you add a new listing it should add to a list here, removing one will also update here*/}
            </div>
        </div>
    )
}

export default ProfilePage; 