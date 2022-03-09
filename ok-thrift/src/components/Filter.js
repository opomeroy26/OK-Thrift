import React from 'react';

function Filter ({sortBy, onSortBy}) {
    function handleChangeOnSortBy (e){
        onSortBy(e.target.value)
    }
    return (
        <div className ="filterWrapper">
            <div className = "ui menu">
                <label>Sort by Size</label>
            </div>
            <div className="ui item">
                <select
                    className="ui selection dropdown"
                    name="sort"
                    onChange={handleChangeOnSortBy}
                    value={sortBy}>

                    <option value="All Sizes">All Sizes</option>
                    <option value="Extra Small">Extra Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value ="Extra Large">Extra Large</option>
                </select>
            
            </div>
        
        </div>
    )
}

export default Filter; 