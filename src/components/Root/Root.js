import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Root extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Root
