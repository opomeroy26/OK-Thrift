import React from 'react';
import '../styles/ClearSearch.css'

function ClearSearch({handleClearSearch}){
    return (
        <div>
            <button onClick={()=>handleClearSearch()} className='btn-primary'> Clear Search</button>
        </div>
    )

}

export default ClearSearch;