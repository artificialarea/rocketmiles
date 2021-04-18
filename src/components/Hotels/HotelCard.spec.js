import React from 'react';
import { mount } from 'enzyme';
import HotelCard from './HotelCard';

const mockHotel = {
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
}

describe('HotelCard component', () => {
    it('renders the component', () => {
        const wrapper = mount(<HotelCard hotel={mockHotel}/>);
        expect(wrapper.find('.hotel-card').exists()).toBe(true);
    });
});