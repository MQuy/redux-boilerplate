import { combineReducers } from 'redux'
import { browserHistory } from 'react-router'
import { LOGIN_SUCCESS } from '$root/routes/Login/LoginForm/modules/actions'
import { AUTHORIZED_SUCCESS, SIGNOUT_SUCCESS } from '$root/modules/currentUser'

export const CURRENT_USER = 'currentUser';

export const currentUser = (state = {}, action: any) => {

  switch(action.type) {
    case LOGIN_SUCCESS:
    case AUTHORIZED_SUCCESS:
      return { ...action.user };
    case SIGNOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
