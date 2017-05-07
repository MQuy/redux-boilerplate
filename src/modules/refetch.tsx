import React, { Component } from 'react'
import { get } from './fetch'
import forEach from 'lodash/forEach'

// TODO: Cannot use Component<any, any>???
const refetch = (config: object) => (RefetchComponent: any) => class _ extends Component<any, any> {
  componentWillMount() {
    forEach(config, (link, stateName) => {
      get(link)
        .then((json: any) => this.setState({ [stateName]: json }))
    })
  }
  render() {
    return (
      <RefetchComponent {...this.props} {...this.state} />
    )
  }
}

export default refetch
