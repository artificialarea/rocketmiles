import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import App from './App';
import HotelCard from '../Hotels/HotelCard';

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
};

global.fetch = jest.fn(() => {
    Promise.resolve({
        mockHotels
    })
});

describe('App component', () => {

    const wrapper = shallow(<App />);

    it('should render the component', () => {
        expect(wrapper.find('.app-container').exists()).toBe(true);
    });

});

describe('HotelCard component via App', () => {
    let container = null;

    beforeEach(()=> {
        container = document.createElement('div');
        document.body.append(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    it('should render fetched api data', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => {
            Promise.resolve({
                json: () => Promise.resolve(mockHotel)
            })
        });

        await act(async () => {
            render(<HotelCard hotel={mockHotel}/>, container);
        });
        
        expect(container.querySelector('.image')).toHaveStyle(`background-image: url(${mockHotel.hotelStaticContent.mainImage.url})`);
        expect(container.querySelector('.hotel-name').textContent).toBe(mockHotel.hotelStaticContent.name);
        expect(container.querySelector('.location').textContent).toBe(mockHotel.hotelStaticContent.neighborhoodName);
        expect(container.querySelector('.price').textContent).toContain(mockHotel.lowestAveragePrice.amount);
        expect(container.querySelector('.rewards').textContent).toContain(mockHotel.rewards.miles);

        global.fetch.mockRestore();

    });
});