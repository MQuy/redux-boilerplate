import { combineReducers } from 'redux'
import { currentUser } from './reducers/currentUser'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    currentUser,
    ...asyncReducers })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
