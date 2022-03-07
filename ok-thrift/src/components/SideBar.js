import '../styles/SideBar.css'


function SideBar(){
    return (
        <div className='wrapper'>
            <nav id='sidebar'>
                <ul className='list-unstyled components' id='homeSubmenu'>
                <li>
                <button className='btn btn-secondary m-3'>
                    Home
                </button>
                </li>
                <li>
                <button className='btn btn-secondary m-3'>
                    Cart
                </button>
                </li>
                <li>
                <button className='btn btn-secondary m-3'>
                    Profile
                </button>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;