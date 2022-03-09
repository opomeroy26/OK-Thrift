import React from 'react'

function ListingDetailCard({product}) {
    const {name, description, price, image} = product
    return (
    <div className="card-detail col-12  p-2 m-2">
        <img className="card-img-top-detail image" src={image} alt= {name}/>
        <div className="card-body h-100">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="price">${price}</p>
            
        </div> 
    </div>
  )
}

export default ListingDetailCard