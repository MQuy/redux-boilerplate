import React from 'react'
import PropTypes from 'prop-types'
import style from './User.scss'

export const User = ({ user, onClick }) => (
  <div className={`row ${style.row}`} onClick={onClick}>
    <div className={`col-sm-4 ${style.leftPanel}`}>
      <img className={style.avatar} src={user.avatarUrl} alt={user.fullName} />
    </div>
    <div className="col-sm-8">
      <div className={style.userName}>{user.fullName} - {user.email}</div>
    </div>
  </div>
)

User.propTypes = {
  user: PropTypes.object,
  onClick: PropTypes.func
}

export default User
