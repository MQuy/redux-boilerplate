import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import createStore from './store/createStore'
import { Provider } from 'react-redux'
import Root from './components/Root'

const MOUNT_ELEMENT = document.getElementById('root')

const store = createStore(__INITIAL_STATE__)

const render = (key = null) => {
  const routes = require('./routes/index').default(store)
  const App = (
    <Provider store={store}>
      <Router history={browserHistory} key={key}>
        <Router childRoutes={routes} component={Root}/>
      </Router>
    </Provider>
  )
  ReactDOM.render(App, MOUNT_ELEMENT)
}

render()
