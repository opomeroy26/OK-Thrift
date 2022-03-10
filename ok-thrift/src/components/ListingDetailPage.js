import React from 'react'
import ListingDetailCard from './ListingDetailCard'



function ListingDetailPage({productId, detail, handleReturnToProfile, onAddToCart, onRemoveFromLikes, onUpdateListing, listingToEdit, myLikedItems, myItems, onDeleteListing}) {

  const detailItem = detail.map((productObj)=> (
      <div>
          <ListingDetailCard
            key={productObj.id + productObj.name}
            product={productObj}
            handleAddToCart={onAddToCart}
            handleRemoveFromLikes={onRemoveFromLikes}
            handleReturnToProfile={handleReturnToProfile}
            onUpdateListing={onUpdateListing}
            listingToEdit={listingToEdit}
            productId={productId}

            myLikedItems={myLikedItems}
            myItems={myItems}

            onDeleteListing = {onDeleteListing}
            handleReturnToProfile = {handleReturnToProfile}
            

          />
      </div>
  ))
    return (
    <div>
        <div className='row d-flex justify-content-center m-2 p-2'>
            <button onClick={() => handleReturnToProfile()} className="btn btn-secondary"> Back to profile </button>
        </div>
        <div className='row d-flex justify-content-center m-2 p-2'>
            {detailItem}
        </div>
        
    </div>
  )
}

export default ListingDetailPage