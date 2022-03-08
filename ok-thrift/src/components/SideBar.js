import '../styles/SideBar.css'
import {NavLink} from "react-router-dom"
import '../styles/index.css'

function SideBar(){
    return (
        <div className='col wrapper nopadding'>
            <nav id='sidebar' className='nopadding'>
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