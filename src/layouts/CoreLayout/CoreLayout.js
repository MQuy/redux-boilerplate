import React, { PropTypes } from 'react'
import Header from '$root/components/Header'
import Footer from '$root/components/Footer'
import classes from './CoreLayout.scss'
import '$root/static/styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
