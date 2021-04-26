import React, { useState } from 'react';
import defaultImage from '../../img/img_default.png';

export default function HotelCard(props) {
    const { hotel } = props;
    const { 
        rewards,
        lowestAveragePrice 
    } = hotel;
    const {
        name,
        neighborhoodName,
        mainImage,
    } = hotel.hotelStaticContent;

    const [imgSrc, setImgSrc] = useState(true);

    if (!Object.keys(hotel).length) {
        return null;
    }

    const renderImg = () => {
        let input;

        if (imgSrc) {
            input = 
                <div 
                    className="image"
                    style={{ backgroundImage: `url(${mainImage.url})`
                }}></div>
        } else {
            input = 
                <div
                    className="image"
                    style={{ backgroundImage: `url(${defaultImage})`
                }}></div>
        }
        return input;
    }

    return (
        <div className="hotel-card" key={hotel.id}>
            <img
                src={mainImage.url}
                onError={() => setImgSrc(false)}
                style={{ display: 'none' }}
            />
            { renderImg() }
            <div className="hotel-details">
                <div className="hotel-name">
                    {name}
                </div>
                <div className="location">
                    {neighborhoodName}
                </div>
            </div>
            <div className="price-details">
                <span className="price">
                    <span dangerouslySetInnerHTML={{ __html: lowestAveragePrice.symbol }}></span>
                    {lowestAveragePrice.amount}
                </span>
                <span className="rewards">
                    {rewards.miles} miles
                </span>
                <button className="button">Select</button>
            </div>
        </div>
    )
}

HotelCard.defaultProps = {
    hotel: {}
}