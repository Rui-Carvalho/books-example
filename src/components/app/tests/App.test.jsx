import React from 'react';
import renderWithRedux from "../../../utils/testUtils";
import App from '../App';

describe('App component', () => {
    it('should render app with error', () => {
        const { asFragment } = renderWithRedux(<App/>, {});
        expect(asFragment()).toMatchSnapshot();
    });
});
