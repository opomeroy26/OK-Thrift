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
        
        <div>
            <nav id='sidebar' >
                <div id='logo' className='mb-5 pb-5'>
                    <h1 className='toph1 mt-3 pt-1'> <b>OK</b> </h1>
                    <hr  id='logohr'/>
                    <h1 className='bottomh1 mt-2'> <b>Thrift</b> </h1>
                </div>
                
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
                        className='btn-secondary m-3' 
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
            
        </div>    
        
    )
}

export default SideBar;