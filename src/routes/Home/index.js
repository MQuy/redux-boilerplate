import React from 'react'
import UserList from './UserList'
import Report from './Report'
import { authorized } from '$root/modules/currentUser'

function checkAuth(store) {
  return (nextState, replace) => {
    if (!authorized(store)) {
      replace('/login');
    }
  }
}


const Main = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-7">
        <UserList />
      </div>
      <div className="col-sm-5">
        <Report />
      </div>
    </div>
  </div>
)

export default (store) => ({
  component: Main,
  onEnter: checkAuth(store)
})
