import '../styles/SideBar.css'


function SideBar(){
    return (
        <div className='wrapper'>
            <nav id='sidebar'>
                <ul className='list-unstyled components' id='homeSubmenu'>
                <li>
                <button className='btn btn-secondary'>
                    Home
                </button>
                </li>
                <li>
                <button className='btn btn-secondary'>
                    Cart
                </button>
                </li>
                <li>
                <button className='btn btn-secondary'>
                    Profile
                </button>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;