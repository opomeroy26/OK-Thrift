import '../styles/ProfilePage.css'


function ProfilePage(){
    return (
        <div className='container p-3 m-3' id='profile'>
            <img src ='https://static9.depositphotos.com/1009634/1075/v/450/depositphotos_10757374-stock-illustration-no-user-profile-picture.jpg' alt='profile'></img>
            <h3 id='username'>John Doe</h3> {/* If we get to authenticate should be dynamic */}
            <h5 id='bio'>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </h5> {/*Should also be dynamic */}
            <div id='newItemForm'>
                <form>
                    <div className='form-group'>
                        <label for='image'>Image</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='image' 
                            placeholder='Please enter a image URL'
                            >
                        </input>
                    </div>
                    <div className='form-group'>
                        <label for='name'>Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='What are you trying to sell?'>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label for='price'>Price</label>
                        <input
                            type='text'
                            className='form-control'
                            id='price'
                            placeholder='$'>
                        </input>
                    </div>
                    <div class='form-group'>
                        <label for='description'>Description</label>
                        <input
                            type='text'
                            class='form-control'
                            id='description'
                            placeholder='enter a brief desription about your item'>
                        </input>
                    </div>
                    <button type='submit' class='btn btn-primary'>Add Listing</button>
                </form>
            </div>
            <div id='currentListings'>
                <p> CURRENT LISTINGS </p> {/* When you add a new listing it should add to a list here, removing one will also update here*/}
            </div>
        </div>
    )
}

export default ProfilePage; 