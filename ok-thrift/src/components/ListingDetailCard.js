import React,{ useState } from 'react'
import EditForm from './EditForm'


function ListingDetailCard({product, handleRemoveFromLikes, handleAddToCart, onUpdateListing, productId}) {
    const initialFormState = {
        name: '',
        description: '',
        image: '',
        price:'',
        size:''
    }
    const [showForm, setShowForm] = useState(false)
    const [formState, setFormState]= useState(initialFormState)
    
    
    const handleChange =(event) => {
        const {name, value} = event.target;
        setFormState(formState => ({...formState, [name]: value}))
      }
      function handleSubmit(event,){
        console.log()
        event.preventDefault()
        fetch(`http://localhost:3001/mylistings/${productId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        })
        .then(res => res.json())
        .then(updatedListing => {
          onUpdateListing(updatedListing)
        })
      }
      function handleShowForm(){
        setShowForm(!showForm)
        
      }
    
    

    const {name, description, price, image, size} = product

    if (myItems.includes(product)) {
    return (
        <div className="card mb-3 border-light rounded" id='detail-card' >
        <div className="row g-0">
            <div className="col-md-6">
                <img id='detail-image' src={image} className="img-fluid rounded-start" alt={name}></img>
            </div>
            <div className="col-md-6">
                <div className="card-body h-100 w-100">
                    <h5 className="card-title">{name}</h5>
                    <h6 className='card-subtitle text-muted'>Size: {size}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <div className = 'row'>

                        <button onClick={(e)=> handleAddToCart(e, product)} className="btn btn-secondary m-2 p-2">Add to Cart  </button>
                        <button onClick={(e)=> handleRemoveFromLikes(e, product)} className='btn-secondary m-2 p-2'>Remove From Likes</button>
                        <button 
                            className='btn-secondary m-2 p-2'
                            onClick={handleShowForm}> 
                            {showForm ? 'Hide Form' : 'Edit Listing'}
                        </button>
                            {showForm ? <EditForm handleChange={handleChange} handleSubmit={handleSubmit} formState={formState} /> : null}
                    </div>
                    
                     
                     

                </div>
             </div>
         </div>
        </div>
    </div>
  )
} else {
    return (
    <div className="card mb-3 border-light rounded" id='detail-card' >
    <div className="row g-0">
        <div className="col-md-6">
            <img id='detail-image' src={image} className="img-fluid rounded-start" alt={name}></img>
        </div>
        <div className="col-md-6">
            <div className="card-body h-100 w-100">
                <h5 className="card-title">{name}</h5>
                <h6 className='card-subtitle text-muted'>Size: {size}</h6>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <div className = 'row'>
                    <button onClick={(e)=> handleAddToCart(e, product)} className="btn btn-secondary">Add to Cart  </button>
                    <button onClick={(e)=> handleRemoveFromLikes(e, product)} className='btn-secondary'>Remove From Likes</button>
                    
                </div>
            </div>
        </div>
    </div>
</div>
)
}
}

export default ListingDetailCard