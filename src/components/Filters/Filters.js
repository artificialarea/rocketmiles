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
            Hotel name
            <input 
                type="text" 
                className="input" 
                value={hotelSearch}
                onChange={(e) => onSearch(e)}
            />
            Sort
            <select 
                name="" 
                className="select"
                value={hotelSort} 
                onChange={(e) => onSort(e)}
            >
                <option value="recommended">Recommended</option>
                <option value="ascending">Price low-to-high</option>
                <option value="descending">Price high-to-low</option>
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