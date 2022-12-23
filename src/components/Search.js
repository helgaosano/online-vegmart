import React from 'react'
import {useState, useEffect } from 'react'
import '../Product.css';

function Search({filter, OnSetFilter}){

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("/categories")
        .then((r) => r.json())
        .then((cat) => setCategory(cat));
    }, []);


  return (
    <div className='filters'>
        <select className='filter-bar' value={filter} onChange={(event) => OnSetFilter(event.target.value === 0 ? "" : event.target.value)}>
            <option value={0}>Search by category</option>
            {Object.keys(category).length > 0 &&
            category.map((categories) => (
            <option key={categories.id} value={categories.name}>
                {categories.name}
            </option>
            ))}
        </select>
    </div>
)
}
export default Search;
