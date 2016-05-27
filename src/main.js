import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/createStore'
import { Provider } from 'react-redux'
import Root from './components/Root'
import { getCurrentUser } from './modules/currentUser'

const MOUNT_ELEMENT = document.getElementById('root')

// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: ''
})

// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the key "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const store = createStore(window.__INITIAL_STATE__, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

let render = (key = null) => {
  const routes = require('./routes/index').default(store)
  const App = (
    <Provider store={store}>
      <Router history={history} key={key}>
        <Router childRoutes={routes} component={Root}/>
      </Router>
    </Provider>
  )
  getCurrentUser(store.dispatch)
    .then(() => ReactDOM.render(App, MOUNT_ELEMENT))
}

render()
