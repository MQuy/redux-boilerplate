import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from '$root/components/Forms/LoginForm'
import { loginAction } from './modules/actions'

export class LoginFormContainer extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  state = { messages: [] }
  formSubmit(email, password) {
    const { dispatch } = this.props;
    const { router } = this.context;
    const user = { email , password };

    // NOTE: This then doesn't call in test
    return loginAction(user, dispatch)
      .then(() => { asdasdas.dasdasdasd; router.push('/') })
      .catch(json => this.setState({messages: json}))
  }
  render() {
    const { messages } = this.state;

    return (
      <LoginForm onSubmit={this.formSubmit.bind(this)} messages={messages}/>
    )
  }
}

export default connect()(LoginFormContainer)
