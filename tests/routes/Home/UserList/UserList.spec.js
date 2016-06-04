import React, { Component, PropTypes } from 'react'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { UserList } from '$root/routes/Home/UserList/UserList'
import Loading from '$root/components/Loading'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore()
const user = {id: 1, fullName: 'Redux'}

describe("(Component) UserList", () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = { users: [] }
    fetchMock.mock('http://0.0.0.0:3000/users', 'GET', { status: 200, body: [] })
    _wrapper = shallow(<UserList {..._props}/>, {
      context: { store }
    })
  })
})
