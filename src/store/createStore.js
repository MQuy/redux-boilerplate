import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default (initialState = {}, history) => {
  let middleware = applyMiddleware(thunk, routerMiddleware(history))

  const store = createStore(reducers(), initialState, middleware)

  store.asyncReducers = {}

  return store
}
