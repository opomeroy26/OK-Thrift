import React, {useState} from "react";

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
            <button type="submit">Search</button>
        
        </form>
    );
}

export default Search; 