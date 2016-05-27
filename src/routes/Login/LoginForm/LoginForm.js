import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Form from '$root/components/Forms/LoginForm'
import { loginAction } from './modules/actions'

class LoginForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  state = { messages: [] }
  formSubmit(email, password) {
    const { dispatch } = this.props;
    const { router } = this.context;
    const user = { email: email, password: password };

    loginAction(user, dispatch)
      .then(() => router.push('/'))
      .catch(json => this.setState({messages: json}))
  }
  render() {
    const { messages } = this.state;

    return (
      <Form onSubmit={this.formSubmit.bind(this)} messages={messages}></Form>
    )
  }
}

export default connect()(LoginForm)
