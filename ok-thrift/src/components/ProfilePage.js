import { useState } from 'react'
import '../styles/ProfilePage.css'
import ItemCard from './ItemCard.js'
import Form from './Form.js'

function ProfilePage({ onAddToInventory, onCardClick }){
    const initialFormState = {
        name: '',
        description: '',
        image: '',
        price:''
    }
    const [myItems, setMyItems] = useState([])
    const [showForm, setShowForm] = useState(false)


    

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
        fetch('http://localhost:3001/inventory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })
            .then(onAddToInventory(formState))
            .then(setFormState(initialFormState))
            .then(setMyItems([...myItems, formState]) )
            console.log()
        }   
    }
    
   const newItem = myItems.map((productObj)=> (
    <div>
        <ItemCard 
            key={productObj.id + productObj.name}
            product={productObj}
            handleCardClick = {onCardClick}
        />
    </div>
   ))
    
    function handleShowForm() {
        setShowForm(!showForm)
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
                
                
                <button className="btn btn-secondary" 
                        onClick={handleShowForm}
                        >
                        {showForm ? 'Hide Form' : 'Add New Listing'}
                </button>
                {showForm ? <Form handleChange={handleChange} handleSubmit={handleSubmit} formState={formState} /> : null}
                
           
            
               
            <div id='currentListings'>
                <h4 className='p-2 m-2'>My Listings</h4> {/* When you add a new listing it should add to a list here, removing one will also update here*/}
                {newItem}
            </div>
        </div>
    )
}

export default ProfilePage; 