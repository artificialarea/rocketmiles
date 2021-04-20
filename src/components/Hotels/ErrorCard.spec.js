import React from 'react';
import { shallow } from 'enzyme';
import ErrorCard from './ErrorCard';


describe('Error component', () => {

    it('should render the component', () => {
        const error = { status: true, message: 'test error message' };
        const wrapper = shallow(<ErrorCard error={error}/>);
        expect(wrapper.find('.error-card').exists()).toBe(true);
    });

});
