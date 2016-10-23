import React from 'react'
import ReactDOM from 'react-dom'
import App, { Login } from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

describe('maths', () => {

  it('can add', () => {
    expect(1+2).toBe(3)
    expect(1+2).not.toBeLessThan(0)
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

