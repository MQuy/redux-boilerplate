import simpleStorage from 'simplestorage.js'
import { get } from './fetch'

export const AUTHORIZED_SUCCESS = 'AUTHORIZED_SUCCESS';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

function authorizedSuccess(json) {
  return {
    type: AUTHORIZED_SUCCESS,
    user: json
  }
}

function signOutSuccess() {
  return {
    type: SIGNOUT_SUCCESS
  }
}

function isGuest(user) {
  return !user || !user.id;
}

export function authorized(store) {
  let { currentUser } = store.getState();

  return currentUser && currentUser.id;
}

export function signOut(dispatch) {
  var result = simpleStorage.deleteKey('currentUser');

  dispatch(signOutSuccess());
  return Promise.resolve(result);
}
