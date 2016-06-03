import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { loginAction, loginSuccess, LOGIN_SUCCESS } from '$root/routes/Login/LoginForm/modules/actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const user = { id: 1 }
const expectedAction = { type: LOGIN_SUCCESS, user };
const store = mockStore({ currentUser: {} })

describe('actions', () => {
  afterEach(() => {
    store.clearActions();
    fetchMock.restore();
  })

  it('should create action to add user', () => {
    expect(loginSuccess(user)).to.deep.equal(expectedAction);
  })

  describe('fetchLogin', () => {
    it('login successfully', () => {
      fetchMock.mock('http://0.0.0.0:3000/users/sign_in', 'POST', { status: 200, body: user })

      return loginAction(user, store.dispatch)
        .then(() => {
          expect(store.getActions()).to.deep.equal([expectedAction])
        })
    })

    it('login fail', () => {
      fetchMock.mock('http://0.0.0.0:3000/users/sign_in', 'POST', { status: 403, body: {} })

      return expect(loginAction(user, store.dispatch)).to.be.rejected;
    })
  })
})
