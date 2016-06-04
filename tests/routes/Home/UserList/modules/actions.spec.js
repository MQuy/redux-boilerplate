import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { activeUser, changeActiveUser, CHANGE_ACTIVE_USER } from '$root/routes/Home/UserList/modules/actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const user = { id: 1 }
const expectedAction = { type: CHANGE_ACTIVE_USER, user };
const store = mockStore({ currentUser: {} })

describe("(Actions) User", () => {
  afterEach(() => {
    store.clearActions();
  })

  it('Should create action for active user', () => {
    expect(activeUser(user)).to.eql(expectedAction)
  })

  it('Should dispatch active user', () => {
    store.dispatch(changeActiveUser(user))
    expect(store.getActions()).to.eql([expectedAction])
  })
})
