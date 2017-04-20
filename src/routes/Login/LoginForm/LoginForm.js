import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from '$root/components/Forms/LoginForm'
import { loginAction } from './modules/actions'

export class LoginFormContainer extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  state = { messages: [] }
  constructor(props) {
    super(props)

    this.formSubmit = this.formSubmit.bind(this)
  }
  formSubmit(email, password) {
    const { dispatch } = this.props;
    const { router } = this.context;
    const user = { email , password };

    // NOTE: This then doesn't call in test
    return loginAction(user, dispatch)
      .then(() => { router.push('/') })
      .catch(json => this.setState({messages: json}))
  }
  render() {
    const { messages } = this.state;

    return (
      <LoginForm onSubmit={this.formSubmit} messages={messages}/>
    )
  }
}

export default connect()(LoginFormContainer)
