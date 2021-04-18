import React from 'react';
import HotelCard from './HotelCard';
import ErrorCard from './ErrorCard';

export default function HotelList(props) {
    const { hotels, error } = props;

    return (
        <div className="hotel-list">
            {hotels.map(hotel => (
                <HotelCard hotel={hotel} key={hotel.id}/>
            ))}
            {   
                (error.status)
                ? <ErrorCard error={error}/>
                : null
            }
        </div>
    )
}
