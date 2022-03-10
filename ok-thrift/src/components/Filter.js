import React from 'react';
import '../styles/Filter.css'

function Filter ({sortBy, onSortBy}) {
    function handleChangeOnSortBy (e){
        onSortBy(e.target.value)
    }
    return (
        <div className ="filterWrapper">
            <div className = "uimenu">
                <label>Sort by Size</label>
            </div>
            <div>
                <select 
                    className="uiSelectionDropdown"
                    name="sort"
                    onChange={handleChangeOnSortBy}
                    value={sortBy}>

                    <option value="All Sizes">All Sizes</option>
                    <option value="Extra Small">Extra Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                    <option value ="1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                    <option value ="4">4</option>
                    <option value ="5">5</option>
                    <option value ="6">6</option>
                    <option value ="7">7</option>
                    <option value ="8">8</option>
                    <option value ="9">9</option>
                    <option value ="10">10</option>
                </select>
            
            </div>
        
        </div>
    )
}

export default Filter; 