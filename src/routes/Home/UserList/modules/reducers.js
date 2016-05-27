import { CHANGE_ACTIVE_USER } from './actions'

export function activeUser(state = {}, action) {
  switch(action.type) {
    case CHANGE_ACTIVE_USER:
      return { ...action.user };
    default:
      return state;
  }
}
