import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/createStore'
import { Provider } from 'react-redux'
import Root from './components/Root'

const MOUNT_ELEMENT = document.getElementById('root')

const browserHistory = useRouterHistory(createBrowserHistory)({ basename: '' })

const store = createStore(__INITIAL_STATE__, browserHistory)
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
  ReactDOM.render(App, MOUNT_ELEMENT)
}

render()
