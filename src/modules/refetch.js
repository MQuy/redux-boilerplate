import React from 'react'
import { get } from './fetch'
import forEach from 'lodash/forEach'

const refetch = (config) => (Component) => class _ extends React.Component {
  componentWillMount() {
    forEach(config, (link, stateName) => {
      get(link)
        .then(json => this.setState({ [stateName]: json }))
    })
  }
  render() {
    return (
      <Component {...this.props} {...this.state} />
    )
  }
}

export default refetch
