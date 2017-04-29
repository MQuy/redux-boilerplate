import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import createStore from './store/createStore'
import { Provider } from 'react-redux'
import Root from './components/Root'

const MOUNT_ELEMENT = document.getElementById('root')

const store = createStore(__INITIAL_STATE__)

const render = () => {
  const routes = require('./routes/index').default(store)
  const App = (
    <Provider store={store}>
      <Router history={browserHistory} children={routes} component={Root}/>
    </Provider>
  )
  ReactDOM.render(App, MOUNT_ELEMENT)
}

render()

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
