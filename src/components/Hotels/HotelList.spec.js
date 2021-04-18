import React from 'react';
import { mount } from 'enzyme';
import HotelList from "./HotelList";

const mockHotels = [
    {
        id: "907",
        rewards: {
            miles: 100000
        },
        lowestAveragePrice: {
            currency: "USD",
            symbol: "&#36;",
            amount: 579
        },
        hotelStaticContent: {
            name: "Omni Chicago",
            neighborhoodName: "Magnificent Mile",
            mainImage: {
                url: "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
            }
        }
    },
    {
        id: "908",
        rewards: {
            miles: 50000
        },
        lowestAveragePrice: {
            currency: "USD",
            symbol: "&#36;",
            amount: 200
        },
        hotelStaticContent: {
            name: "Chicago Marriot",
            neighborhoodName: "Magnificent Mile",
            mainImage: {
                url: ""
            }
        }
    }
];


describe(`HotelList component`, () => {
    
    it('renders the component', () => {
        const wrapper = mount(<HotelList hotels={mockHotels}/>);
        expect(wrapper.find('.hotel-list').exists()).toBe(true);
    });

});