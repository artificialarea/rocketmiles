import React from 'react';
import HotelCard from './HotelCard';

export default function HotelList(props) {
    const { hotels } = props;

    return (
        <div className="hotel-list">
            {hotels.map(hotel => (
                <HotelCard hotel={hotel} key={hotel.id}/>
            ))}
        </div>
    )
}

// HotelList.defaultProps = {
//     hotels: []
// }