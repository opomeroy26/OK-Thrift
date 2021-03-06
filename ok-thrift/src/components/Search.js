import React, {useState} from "react";
import '../styles/Search.css'

function Search({ onSearch }) {
    const [search, setSearch] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log(search)
        onSearch(search);
        setSearch("")
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder="search for items"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <button className='btn-1 m-2 p-2' type="submit">Search</button>
        
        </form>
    );
}

export default Search; 