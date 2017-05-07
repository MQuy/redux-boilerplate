import React, { SyntheticEvent } from 'react'
import { browserHistory } from 'react-router'

const goBack = (e: SyntheticEvent<HTMLButtonElement>) : void => {
  e.preventDefault()
  browserHistory.goBack()
}

export const NotFound = () => (
  <div>
    <h4>Page not found!</h4>
    <p><button onClick={goBack}>← Back</button></p>
  </div>
)

export default NotFound
