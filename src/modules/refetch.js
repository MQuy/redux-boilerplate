import React from 'react'
import lodash from 'lodash'
import { get } from './fetch'

const refetch = (config) => (Component) => class _ extends React.Component {
  componentWillMount() {
    lodash.forIn(config, (link, stateName) => {
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
