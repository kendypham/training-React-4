import React from 'react'
import Game from './Game'
import { shallow, mount } from 'enzyme'
import '../../setupTests'

it('renders without crashing', () => {
    shallow(<Game />)
});

it('renders game status correctly', () => {
    const wrapper = mount(<Game />)
    const firstPlayer = wrapper.find('div.game-info').children().at(0).text()
    expect(firstPlayer).toEqual('Next player: X')
    const button = wrapper.find('button.square').at(0);
    button.simulate('click')
    const secondPlayer = wrapper.find('div.game-info').children().at(0).text()
    expect(secondPlayer).toEqual('Next player: O')
    //player 2
    const turn2 = wrapper.find('button.square').at(1)
    turn2.simulate('click')
    //player 1
    const turn3 = wrapper.find('button.square').at(4)
    turn3.simulate('click')
    //player 2
    const turn4 = wrapper.find('button.square').at(5)
    turn4.simulate('click')
    //player 1
    const turn5 = wrapper.find('button.square').at(8)
    turn5.simulate('click')

    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Winner: X')

    const turn6 = wrapper.find('button.square').at(2)
    turn6.simulate('click')

    expect(winner).toEqual('Winner: X')
});

it('Check history moves', () => {
    const wrapper = mount(<Game />)
    const button = wrapper.find('div.game-info').children().at(1).find("button");
    button.simulate('click').at(0)
    const firstPlayer = wrapper.find('div.game-info').children().at(0).text()
    expect(firstPlayer).toEqual('Next player: X')
});