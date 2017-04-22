import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import { get, post } from '$root/modules/fetch'

export default (initialState = {}) => {
  const thunkWrapper = thunk.withExtraArgument({ get, post })
  const middleware = applyMiddleware(thunkWrapper)

  const store = createStore(reducers(), initialState, middleware)

  store.asyncReducers = {}

  return store
}
