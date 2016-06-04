import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render, shallow } from 'enzyme'
import { CoreLayout } from '$root/layouts/CoreLayout/CoreLayout'
import Footer from '$root/components/Footer'
import Header from '$root/components/Header'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({ currentUser: {} })

describe("(Component) CoreLayout", () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = { children: <anchor/> }
    _wrapper = shallow(
      <CoreLayout {..._props}/>
    , { context: { store } })
  })

  it('Should contain Header', () => {
    expect(_wrapper.containsMatchingElement(<Header/>)).to.be.ok
  })

  it('Should contain Footer', () => {
    expect(_wrapper.containsMatchingElement(<Footer/>)).to.be.ok
  })

  it('Should render <anchor>', () => {
    expect(_wrapper.containsMatchingElement(<anchor/>)).to.be.ok
  })
})
