import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render } from 'enzyme'
import { CoreLayout } from '$root/layouts/CoreLayout/CoreLayout'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({ currentUser: {} })

describe("(Component) CoreLayout", () => {
  let _wrapper, _props

  beforeEach(() => {
    _props = { children: <anchor/> }
    _wrapper = render(
      <Provider store={store}>
        <CoreLayout {..._props}/>
      </Provider>
    )
  })

  it('Should render <header>', () => {
    expect(_wrapper.find('header')).to.have.length(1)
  })

  it('Should render <footer>', () => {
    expect(_wrapper.find('footer')).to.have.length(1)
  })

  it('Should render <anchor>', () => {
    expect(_wrapper.find('anchor')).to.have.length(1)
  })
})
