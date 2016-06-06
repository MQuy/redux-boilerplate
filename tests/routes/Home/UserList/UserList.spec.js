import React, { Component, PropTypes } from 'react'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { UserList } from '$root/routes/Home/UserList/UserList'
import User from '$root/routes/Home/UserList/components/User'
import Loading from '$root/components/Loading'
import { activeUser } from '$root/routes/Home/UserList/modules/actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore()
const user = {id: 1, fullName: 'Redux'}

describe("(Component) UserList", () => {
  let _wrapper, _props, _spy;
  _spy = sinon.stub(UserList.prototype, 'componentWillMount')

  beforeEach(() => {
    store.clearActions();
    _props = { users: [], dispatch: store.dispatch }
    _wrapper = shallow(<UserList {..._props}/>, { context: { store } })
  })

  it('Should show loading in case of empty users', () => {
    expect(_wrapper.find(Loading)).to.have.length(1)
  })

  describe("#setActiveUser", () => {
    beforeEach(() => {
      _wrapper.instance().setActiveUser(user)
    })

    it('Should set user state', () => {
      expect(_wrapper.state('user')).to.equal(user)
    })

    it('Should dispatch user', () => {
      expect(store.getActions()).to.eql([activeUser(user)])
    })
  })

  describe("(Component) User", () => {
    let _cpUser;

    beforeEach(() => {
      _wrapper.setProps({ users: [user] })
      _cpUser = _wrapper.find(User)
    })

    it('Should render one user', () => {
      expect(_cpUser).to.have.length(1)
    })

    it('Should pass user as prop', () => {
      expect(_cpUser.prop('user')).to.equal(user)
    })

    it('Should pass setActiveUser', () => {
      let spy = sinon.stub(_wrapper.instance(), 'setActiveUser')

      _cpUser.prop('onClick')()
      expect(spy.calledWith(user)).to.be.ok
    })
  })
})
