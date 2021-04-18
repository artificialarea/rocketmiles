import React from 'react';

export default function Filters(props) {
    const { 
        searchHotels, 
        sortHotels,
        onSearch,
        onSort, 
        onReset,
    } = props;

    console.log('searchHotels:', searchHotels);
    console.log('sortHotels:', sortHotels);

    return (
        <div className="filters">
            Hotel name
            <input 
                type="text" 
                className="input" 
                value={searchHotels}
                onChange={(e) => onSearch(e)}
            />
            Sort
            <select 
                name="" 
                className="select"
                value={sortHotels} 
                onChange={(e) => onSort(e)}
            >
                <option value="recommended">Recommended</option>
                <option value="low-price">Price low-to-high</option>
                <option value="high-price">Price high-to-low</option>
            </select>
            <button 
                className="button"
                onClick={() => onReset()}
            >
            Reset
            </button>
        </div>
    )
}