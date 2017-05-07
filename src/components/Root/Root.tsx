import React from 'react'
import PropTypes from 'prop-types'

interface RootProps {
  readonly children: JSX.Element
}

export const Root = ({ children }: RootProps) => (
  <div>{children}</div>
)

export default Root
