export const CHANGE_ACTIVE_USER = 'CHANGE_ACTIVE_USER';

export function activeUser(user) {
  return {
    type: CHANGE_ACTIVE_USER,
    user: user
  }
}

export function changeActiveUser(user) {
  return (dispatch) => dispatch(activeUser(user));
}
