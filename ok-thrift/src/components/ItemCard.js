import React from 'react';

function ItemCard({inventory}) {
    // const {name, description, price, image} = inventory

    return (
     <div className="card" style="width: 18rem;">
         <img className="card-img-top" src="image" alt= "name"/>
        <div className="card-body">
            <h5 className="card-title">"name"</h5>
            <p className="card-text">"description"</p>
            <span className="price">"price"</span>
            <button className="btn btn-primary">Add to Cart 🛒 </button>
        </div>
    </div>
);
}

export default ItemCard;