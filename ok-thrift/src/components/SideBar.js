import '../styles/SideBar.css'
import {NavLink} from "react-router-dom"
import '../styles/index.css'
import Search from "./Search";


function SideBar({onSearch}){
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
                </ul>
                <Search onSearch={onSearch} />
            </nav>
            
        
    )
}

export default SideBar;