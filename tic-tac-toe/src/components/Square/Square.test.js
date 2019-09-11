import React from 'react'
import Square from './Square'
import {shallow} from 'enzyme'
import '../../setupTests'
it('renders without crashing', () => {
    shallow(<Square />)
});