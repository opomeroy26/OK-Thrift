import React from 'react'

function EditForm({handleSubmit, handleChange, formState}) {
  return (
    
        <div id='newItemForm'>
                        <form id='form' className='border border-secondary rounded p-2 m-2' onSubmit={handleSubmit}>
                            <div className='form-row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <label htmlFor='image' className='label'>Image</label>
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
                                <div className='col no-gutters'> 
                                    <div className='form-group'>
                                        <label htmlFor='name' className='label'>Name</label>
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
                            </div>
                            <div className='row'>    
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <label htmlFor='price' className='label'>Price</label>
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
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <label htmlFor='size' className='label'>Size</label>
                                        <select
                                            className='form-control'
                                            id='size'
                                            value={formState.size}
                                            onChange={handleChange}
                                            name='size'>
                                                <option value="NA">NA</option>
                                                <option value='XS'>XS</option>
                                                <option value='S'>S</option>
                                                <option value='M'>M</option>
                                                <option value='L'>L</option>
                                                <option value='XL'>XL</option>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                                <option value='8'>8</option>
                                                <option value='9'>9</option>
                                                <option value='10'>10</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='form-row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <label htmlFor='description' className='label'>Description</label>
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
                            
                            <button type='submit' className='btn btn-secondary m-3 p-3' id='form-button'> Edit Listing </button>
                        </form>
                    </div>
    
  )
}

export default EditForm