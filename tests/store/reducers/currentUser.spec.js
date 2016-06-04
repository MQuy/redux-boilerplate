import { currentUser as reducer } from '$root/store/reducers/currentUser'
import { LOGIN_SUCCESS } from '$root/routes/Login/LoginForm/modules/actions'
import { AUTHORIZED_SUCCESS, SIGNOUT_SUCCESS } from '$root/modules/currentUser'

const user = { id: 1 }
const initialState = undefined;

describe("(Reducer) currentUser", () => {
  it('should return initial state', () => {
    expect(reducer(initialState, {})).to.eql({})
  })

  describe('return user', () => {
    it('after authorize successfully', () => {
      const action = { type: AUTHORIZED_SUCCESS, user }

      expect(reducer(initialState, action)).to.eql(user)
    })

    it('after login successfully', () => {
      const action = { type: LOGIN_SUCCESS, user }

      expect(reducer(initialState, action)).to.eql(user)
    })
  })

  it('should clear user after logout', () => {
    const action = { type: SIGNOUT_SUCCESS }

    expect(reducer(initialState, action)).to.eql({})
  })
})
