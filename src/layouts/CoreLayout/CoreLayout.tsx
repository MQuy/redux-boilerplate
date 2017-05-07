import React from 'react'
import PropTypes from 'prop-types'
import Header from '$root/components/Header'
import Footer from '$root/components/Footer'
import classes from './CoreLayout.scss'
import '$root/static/styles/core.scss'

interface CoreLayoutProps {
  readonly children: JSX.Element
}

export const CoreLayout = ({ children }: CoreLayoutProps) => (
  <div>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
    <Footer />
  </div>
)

export default CoreLayout
