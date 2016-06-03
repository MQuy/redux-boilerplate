import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
import { CoreLayout } from '$root/layouts/CoreLayout/CoreLayout'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

describe("(Component) CoreLayout", () => {
  let _wrapper, _props

  beforeEach(() => {
    _props = {
      children: <anchor/>
    }
    _wrapper = shallow(<CoreLayout {..._props}/>, { context: { store } })
  })

  it('Should render Header', () => {
    console.log(_wrapper.html())
    expect(_wrapper.find('Header')).to.have.length(1)
  })

  it('Should render Footer', () => {
    expect(_wrapper.find('Footer')).to.have.length(1)
  })

  it('Should render <anchor>', () => {
    expect(_wrapper.find('anchor')).to.have.length(1)
  })
})
