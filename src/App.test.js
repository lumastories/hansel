import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Login} from './Components/Auth'
import {KidList} from './Components/Kids'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

describe('app', () => {
  it('login has .Login and .button', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('.Login').length).toEqual(1)
    expect(wrapper.find('.button').length).toEqual(1)
  })
  it('kids view says Kids', () => {
    const wrapper = shallow(<KidList />)
    const title = <h2>Kids</h2>
    expect(wrapper.contains(title)).toEqual(true);
  })
})

describe('maths', () => {

  it('can add', () => {
    expect(1+2).toBe(3)
    expect(1+2).not.toBeLessThan(0)
    expect(3+2).toBe(5)
    expect(3+1).toBe(4)
  })

  it('can subtract', () => {
    expect(1-2).not.toBe(-2)
    expect(1-2).toBeLessThan(2)
    expect(1-2).toBeGreaterThan(-2)
    expect(1-2).toBe(-1)
  })

  it('can multiply', () => {
    expect(3*2).toEqual(6)
  })

  it('can divide', () => {
    expect(4/2).not.toEqual(3)
    expect(4/2).toBe(2)
  })

})

