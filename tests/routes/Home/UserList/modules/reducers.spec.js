import { CHANGE_ACTIVE_USER } from '$root/routes/Home/UserList/modules/actions'
import { activeUser as reducer } from '$root/routes/Home/UserList/modules/reducers'

const initialState = undefined
const user = { id: 1 }

describe("(Reducer) activeUser", () => {
  it('Should return initial state', () => {
    expect(reducer(initialState, {})).to.eql({})
  })

  it('Should return active user', () => {
    const action = { type: CHANGE_ACTIVE_USER, user }

    expect(reducer(initialState, action)).to.eql(user)
  })
})
