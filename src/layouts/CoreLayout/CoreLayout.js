import React, { Component, PropTypes } from 'react'
import Header from '$root/components/Header'
import Footer from '$root/components/Footer'
import classes from './CoreLayout.scss'
import '$root/static/styles/core.scss'

export class CoreLayout extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header/>
        <div className={classes.mainContainer}>
          {children}
        </div>
        <Footer/>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
