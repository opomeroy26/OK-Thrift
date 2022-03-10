import '../styles/SideBar.css'
import {NavLink} from "react-router-dom"
import '../styles/index.css'
import Search from "./Search";
import Filter from "./Filter";
import ClearSearch from "./ClearSearch";
import { useState } from 'react'

function SideBar({onSearch, sortBy, onSortBy, onClearSearch}){
    
    const [showFilter, setShowFilter] = useState(false)

    function handleShowFilter(){
        setShowFilter(!showFilter)
    }
    
    return (
        
            
            <nav id='sidebar' >
                <h1 >OK Thrift</h1>
                <ul className='list-unstyled components' id='homeSubmenu'>
                    <li>
                    <NavLink  to="/" exact activeStyle = {{background: "white", color:"#7386D5"}} className='btn btn-secondary m-3'>
                        Home
                    </NavLink>
                    </li>
                    
                    <li>
                    <NavLink to ="/cart" exact activeStyle = {{background: "white", color:"#7386D5"}} className='btn btn-secondary m-3'>
                        Cart
                    </NavLink>
                    </li>
                    
                    <li>
                    <NavLink to="/profile" exact activeStyle = {{background: "white", color:"#7386D5"}} className='btn btn-secondary m-3'>
                        Profile
                    </NavLink>
                    </li>
                    <button 
                        className='btn-secondary' 
                        type='button' 
                        data-bs-toggle='collapse' 
                        data-bs-target='#filterandsearch' 
                        aria-expanded='false' 
                        aria-controls='filterandsearch'
                        onClick={handleShowFilter}
                        >
                            {showFilter ? 'Hide Filters' : 'Show Filters'}
                    </button>
                    <div className={showFilter ? 'collapse-show': 'collapse'} id='filterandsearch'>
                        <Filter sortBy={sortBy} onSortBy={onSortBy} />
        
                        <li>
                        <Search onSearch={onSearch} />
                        </li>
                    
                        <ClearSearch handleClearSearch = {onClearSearch} />
                    </div>
                </ul>
            </nav>
            
        
    )
}

export default SideBar;