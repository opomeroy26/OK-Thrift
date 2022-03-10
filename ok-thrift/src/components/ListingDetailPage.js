import React from 'react'
import ListingDetailCard from './ListingDetailCard'

function ListingDetailPage({detail, handleReturnToProfile, onAddToCart, onRemoveFromLikes}) {
  const detailItem = detail.map((productObj)=> (
      <div>
          <ListingDetailCard
            key={productObj.id + productObj.name}
            product={productObj}
            handleAddToCart={onAddToCart}
            handleRemoveFromLikes={onRemoveFromLikes}
            
          />
      </div>
  ))
  
  
  
  
    return (
    <div>
        <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
            <button onClick={() => handleReturnToProfile()} className="btn btn-secondary"> Back to profile </button>
        </div>
        <div className='row d-flex justify-content-center m-2 p-2' id='cart'>
            {detailItem}
        </div>
    </div>
  )
}

export default ListingDetailPage