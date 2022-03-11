import React from 'react';
import '../styles/ClearSearch.css'

function ClearSearch({handleClearSearch}){
    return (
        <div>
            <button onClick={()=>handleClearSearch()} className='btn-2 m-2 p-2'> Clear Search</button>
        </div>
    )
}

export default ClearSearch;