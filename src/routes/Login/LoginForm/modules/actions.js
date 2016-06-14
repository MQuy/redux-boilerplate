import simpleStorage from 'simplestorage.js'
import { post } from '$root/modules/fetch'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    user: json
  }
}

function fetchLogin(user, dispatch) {
  return post('/users/sign_in', { user })
    .then(json => dispatch(loginSuccess(json)))
    .then(action => simpleStorage.set('currentUser', action.user))
}

export function loginAction(user, dispatch) {
  return fetchLogin(user, dispatch);
}
