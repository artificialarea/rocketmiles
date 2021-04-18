import React, { useState, useEffect } from 'react';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';
import Filters from '../Filters/Filters';
import HotelList from '../Hotels/HotelList';

const App = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels)
        })
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                <Filters />
                <HotelList hotels={hotels} />
            </div>
        </div>
    )
}

export default App;
