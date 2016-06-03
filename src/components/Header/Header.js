import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { signOut } from '$root/modules/currentUser'
import style from './Header.scss'

export class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  signOut() {
    const { dispatch } = this.props;
    const { router } = this.context;

    signOut(dispatch)
      .then(() => router.push('/login'));
  }
  render() {
    const { currentUser } = this.props;

    return (
      <header>
        <nav className={`navbar ${style.nav}`}>
          <div className="container">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to='/'>
                  <img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' className={style.logo}/>
                </Link>
              </li>
            </ul>
            <ul className={`nav navbar-nav pull-xs-right ${style.navRight}`}>
              <li className="nav-item">
                {currentUser.fullName}
              </li>
              <li className="nav-item" onClick={this.signOut.bind(this)}>
                <i className={`fa fa-sign-out ${style.icon}`}/>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Header)
