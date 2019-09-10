import React from 'react'
import Square from './Square'
import {shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('renders without crashing', () => {
    shallow(<Square />)
});