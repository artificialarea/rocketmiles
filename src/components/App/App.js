import React, { useState, useEffect } from 'react';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';
import Filters from '../Filters/Filters';
import HotelList from '../Hotels/HotelList';

const App = () => {
    const [hotelMaster, setHotelMaster] = useState([]);
    const [hotelDisplay, setHotelDisplay] = useState([]);
    const [searchHotels, setSearchHotels] = useState('');
    const [sortHotels, setSortHotels] = useState('recommended');

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotelMaster(response.results.hotels);
            setHotelDisplay(response.results.hotels);
        })
    }, []);

    const filterHotels = (name) => {
        if (name) {
            let filteredList = hotelMaster.filter(hotel => {
                return hotel.hotelStaticContent.name.toLowerCase().includes(name);
            });
            setHotelDisplay(filteredList);
        } else {
            setHotelDisplay(hotelMaster);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setSearchHotels(value);
        filterHotels(value);
    }

    const handleSort = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setSortHotels(value);
    }

    const handleReset = () => {
        setSortHotels('recommended');
        setSearchHotels('');
        filterHotels();
    }

    return (
        <div className="app-container">
            <div className="content">
                <Filters 
                    searchHotels = {searchHotels}
                    sortHotels = {sortHotels}
                    onSearch={handleSearch}
                    onSort={handleSort}
                    onReset={handleReset}
                />
                <HotelList hotels={hotelDisplay} />
            </div>
        </div>
    )
}

export default App;
