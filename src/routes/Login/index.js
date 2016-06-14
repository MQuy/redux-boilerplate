import React from 'react'
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

const Main = () => (
  <div className={style.login}>
    <LoginForm />
  </div>
)

export default (store) => ({
  component: Main,
  onEnter: checkAuth(store)
})
