import simpleStorage from 'simplestorage.js'

export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

function signOutSuccess() {
  return {
    type: SIGNOUT_SUCCESS
  }
}

export function authorized(store: any) {
  const { currentUser } = store.getState();

  return currentUser && currentUser.id;
}

export function signOut(dispatch: any) {
  const result = simpleStorage.deleteKey('currentUser');

  dispatch(signOutSuccess());
  return Promise.resolve(result);
}
