import React from 'react'

function Form({handleSubmit, handleImageChange, handleDescriptionChange, handleNameChange, handlePriceChange, image, name, price, description}) {
  return (
                    <div id='newItemForm'>
                        <form id='form' className='border border-secondary rounded p-2 m-2' onSubmit={handleSubmit}>
                            <div className='form-row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <label for='image' className='label'>Image</label>
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
                                </div>
                            </div>
                            
                            <div className='form-row'>   
                                <div className='col-6 no-gutters'> 
                                    <div className='form-group'>
                                        <label for='name' className='label'>Name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='name'
                                            placeholder='Item name'
                                            value={name}
                                            onChange={handleNameChange}>
                                        </input>
                                    </div>  
                                </div>
                                <div className='col-4'>
                                    <div className='form-group'>
                                        <label for='price' className='label'>Price</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='price'
                                            placeholder='$'
                                            value={price}
                                            onChange={handlePriceChange}>
                                        </input>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='form-row'>
                                <div className='col'>
                                    <div class='form-group'>
                                        <label for='description' className='label'>Description</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='description'
                                            placeholder='enter a brief desription about your item'
                                            value={description}
                                            onChange={handleDescriptionChange}>
                                        </input>
                                    </div>
                                </div>
                            </div>
                            
                            <button type='submit' className='btn btn-secondary' id='form-button'>Add Listing</button>
                        </form>
                    </div>
  )
}

export default Form