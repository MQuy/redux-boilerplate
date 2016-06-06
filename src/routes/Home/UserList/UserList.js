import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import lodash from 'lodash'
import refetch from '$root/modules/refetch'
import Loading from '$root/components/Loading'
import { injectReducer } from '$root/store/reducers'
import User from './components/User'
import { changeActiveUser, CHANGE_ACTIVE_USER } from './modules/actions'
import { activeUser } from './modules/reducers'
import style from './UserList.scss'

export class UserList extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  static propTypes = {
    users: PropTypes.array
  }
  componentWillMount() {
    const { store } = this.context;

    injectReducer(store, { key: 'activeUser', reducer: activeUser });
  }
  setActiveUser(user) {
    const { dispatch } = this.props;

    this.setState({ user });
    dispatch(changeActiveUser(user));
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { users } = nextProps;

    return !lodash.isEmpty(users);
  }
  render() {
    const { setActiveUser, users } = this.props;

    return (
      <div className="panel">
        <div className="title">Users</div>
        { lodash.isEmpty(users) ?
            <Loading/> :
            users.map(user => <User user={user} key={user.id} onClick={() => this.setActiveUser(user)}/>)
        }
        <br/>
      </div>
    )
  }
}

export default connect()(
  refetch({ users: '/users' })(UserList)
)
