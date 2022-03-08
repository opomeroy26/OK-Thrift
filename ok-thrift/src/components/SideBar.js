import '../styles/SideBar.css'
import {NavLink} from "react-router-dom"


function SideBar(){
    return (
        <div className='col wrapper'>
            <nav id='sidebar'>
                <ul className='list-unstyled components' id='homeSubmenu'>
                <li>
                <NavLink  to="/" className='btn btn-secondary m-3'>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to ="/cart" className='btn btn-secondary m-3'>
                    Cart
                </NavLink>
                </li>
                <li>
                <NavLink to="/profile" className='btn btn-secondary m-3'>
                    Profile
                </NavLink>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;