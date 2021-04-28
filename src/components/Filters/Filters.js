import React from 'react';

export default function Filters(props) {
    const { 
        hotelSearch, 
        hotelSort,
        onSearch,
        onSort, 
        onReset,
    } = props;

    return (
        <div className="filters">
            <h2 class="visuallyhidden">Filter</h2>
            <label for="name" className="filters-label">Hotel name</label>
            <input 
                type="text" 
                id="name"
                className="input" 
                tabindex="0"
                value={hotelSearch}
                onChange={(e) => onSearch(e)}
            />
            <label for="sort" className="filters-label">Sort</label>
            <select 
                id="sort"
                name="sort" 
                className="select"
                tabindex="0"
                value={hotelSort} 
                onChange={(e) => onSort(e)}
            >
                <option value="recommended">Recommended</option>
                <option value="ascending">Price low-to-high</option>
                <option value="descending">Price high-to-low</option>
            </select>
            <button 
                className="button"
                tabindex="0"
                onClick={() => onReset()}
            >
            Reset
            </button>
        </div>
    )
}