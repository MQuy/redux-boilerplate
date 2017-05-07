import { combineReducers } from 'redux'
import { currentUser } from './reducers/currentUser'

export const reducers = (asyncReducers: any = {}) => {
  return combineReducers({
    // Add sync reducers here
    currentUser,
    ...asyncReducers })
}

export const injectReducer = (store: any, { key, reducer }: { key: string, reducer: any }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
