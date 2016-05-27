import React, { Component, PropTypes } from 'react'
import LoginForm from './LoginForm'
import { authorized } from '$root/modules/currentUser'
import style from './index.scss'

function checkAuth(store) {
  return (nextState, replace) => {
    if (authorized(store)) {
      replace('/');
    }
  }
}

class Main extends Component {
  render() {
    return (
      <div className={style.login}>
        <LoginForm></LoginForm>
      </div>
    )
  }
}

export default (store) => ({
  component: Main,
  onEnter: checkAuth(store)
})
