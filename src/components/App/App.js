import React, { useState, useEffect } from 'react';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';
import Filters from '../Filters/Filters';
import HotelList from '../Hotels/HotelList';

const App = () => {
    const [hotelMaster, setHotelMaster] = useState([]);
    const [hotelDisplay, setHotelDisplay] = useState([]);
    const [hotelSearch, setHotelSearch] = useState('');
    const [hotelSort, setHotelSort] = useState('recommended');
    const [error, setError] = useState({status: false});

    useEffect(() => {
        hotelResultService
            .get()
            .then(response => {
                setHotelMaster(response.results.hotels);
                setHotelDisplay(response.results.hotels);
                setError({status: false})
            })
            .catch(err => {
                setError({
                    status: true, 
                    message: `Sorry, but we're experiencing some technical difficulties. Please refresh to see hotel listings.`
                });
            })
    }, []);

    useEffect(() => {
        let filteredList = hotelMaster.filter(hotel => {
            return hotel.hotelStaticContent.name.toLowerCase().includes(hotelSearch);
        });
        setError({status: false});

        if (hotelSearch) {
            setHotelDisplay(filteredList);
            if (!filteredList.length) {
                setError({status: true, message: 'No hotels listed under that name.'});
            }
        } else {
            setHotelDisplay(hotelMaster);
        }

        if (hotelSort === 'ascending') {
            const sortedList = filteredList.sort((a, b) => {
                return a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
            });
            setHotelDisplay(sortedList);
        } else if (hotelSort === 'descending') {
            let sortedList = filteredList.sort((a, b) => {
                return b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
            });
            setHotelDisplay(sortedList);
        } else {
            setHotelDisplay(filteredList);
        }

       

    }, [hotelSearch, hotelSort]);

    const handleSearch = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setHotelSearch(value);
    }

    const handleSort = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setHotelSort(value);
    }

    const handleReset = () => {
        setHotelSearch('');
        setHotelSort('recommended');
    }


    return (
        <div className="app-container">
            <div className="content">
                <Filters 
                    hotelSearch = {hotelSearch}
                    hotelSort = {hotelSort}
                    onSearch={handleSearch}
                    onSort={handleSort}
                    onReset={handleReset}
                />
                <HotelList 
                    hotels={hotelDisplay} 
                    error={error}
                />
            </div>
        </div>
    )
}

export default App;
