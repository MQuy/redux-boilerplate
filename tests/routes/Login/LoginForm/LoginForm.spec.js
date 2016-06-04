import React from 'react'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import { render, shallow } from 'enzyme'
import { LoginFormContainer } from '$root/routes/Login/LoginForm/LoginForm'
import LoginForm from '$root/components/Forms/LoginForm'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore()
const user = { id: 1 }

describe("(Component) LoginFormContainer", () => {
  let _wrapper, _props, _spy;

  beforeEach(() => {
    _wrapper = shallow(<LoginFormContainer/>, {
      conext: { store }
    })
  })

  it('Should render LoginForm', () => {
    expect(_wrapper.containsMatchingElement(<LoginForm/>)).to.be.ok
  })

  it('Should redirect to root after login successfully', () => {
    fetchMock.mock('http://0.0.0.0:3000/users/sign_in', 'POST', { status: 200, body: { id: 1 } })
  })

  it('Should set error for messages state', () => {
    fetchMock.mock('http://0.0.0.0:3000/users/sign_in', 'POST', { status: 403, body: ['Error'] })
    _wrapper.instance().formSubmit().catch(() => {
      expect(_wrapper.state().messages).to.eql(['Error'])
    })
  })
})
