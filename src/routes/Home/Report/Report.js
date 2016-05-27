import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import lodash from 'lodash'
import { get } from '$root/modules/fetch'
import Loading from '$root/components/Loading'
import style from './Report.scss'

class Report extends Component {
  static propTypes = {
    user: PropTypes.object
  }
  state = {
    chartData: {},
    status: 'init',
    user: {}
  }
  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;

    this.setState({ status: 'loading' });
    get(`/users/${user.id}`)
      .then(json => this.setState({ chartData: json, status: 'done' }))
  }
  render() {
    const { status } = this.state;
    const { user } = this.props;

    return (
      <div className={`panel ${style.panelRight}`}>
        <div className="title">Report {user.fullName ? ` - ${user.fullName}` : ''}</div>
        <img className={style.avatar} src={user.avatarUrl}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(Report)
