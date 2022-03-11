import React from 'react'

function SortByPrice({filterBy, onFilterBy}) {
    function handleChangeOnFilterBy (e){
        onFilterBy(e.target.value)
    }
    return (
    <div className ="filterWrapper">
            <div className = "uimenu">
                <label>Sort by Price</label>
            </div>
            <div>
                <select 
                    className="uiSelectionDropdown"
                    name="sort"
                    onChange={handleChangeOnFilterBy}
                    value={filterBy}
                    >

                    <option value="All Sizes"> Default Sorting</option>
                    <option value="Extra Small">Price: high to low</option>
                    <option value="Small">Price: low to high</option>
                </select>
            
            </div>
        
        </div>
  )
}

export default SortByPrice