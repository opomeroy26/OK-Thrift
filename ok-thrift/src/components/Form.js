import React from 'react'

function Form({handleSubmit, handleChange, formState}) {
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
                                                value={formState.image}
                                                onChange={handleChange}
                                                name='image'
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
                                            value={formState.name}
                                            onChange={handleChange}
                                            name='name'
                                            >    
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
                                            value={formState.price}
                                            onChange={handleChange}
                                            name='price'>
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
                                            value={formState.description}
                                            onChange={handleChange}
                                            name='description'>
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