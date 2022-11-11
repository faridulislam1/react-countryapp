import React from 'react';
import { useState, useEffect } from '../../node_modules/react/cjs/react.development';

const Search = (props) => {
    const[searchText,setSearchText]=useState("");
    const handleChange=(e)=>{
        setSearchText(e.target.value);
    };
    useEffect(()=>{
        props.onSearch(searchText);

    },[searchText])
    return (
        <div style={{textAlign:"center",backgroundColor:"gray",padding:"8px",margin:"1px"}}>
          <input
          type="text"
        placeholder="Search Country"  
        value={searchText}
        onChange={handleChange}
          
          />
         
        </div>
    );
};

export default Search;