import React, { Component, PropTypes } from 'react'
import style from './LoginForm.scss'

export class LoginForm extends Component {
  state = { email: '', password: '' }
  fieldChange = field => e => {
    e.preventDefault();
    this.setState({ [field]: e.target.value })
  }
  formSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { onSubmit } = this.props;

    onSubmit(email, password);
  }
  render() {
    const { email, password } = this.state;
    const { messages } = this.props;

    return (
      <form name="loginForm" className={`blank form-horizontal ${style.loginForm}`} onSubmit={this.formSubmit.bind(this)}>
        <div className={style.title}>Boilerplater</div>
        <div className={style.body}>
          <div className="errors">
            {messages.map((m, i) => { return <p key={i}>{m}</p>})}
          </div>
          <div className="form-group">
            <input type="text" placeholder="abc@studynow.vn" value={email} className="form-control" onChange={this.fieldChange('email')}/>
          </div>
          <div className="form-group">
            <input type="password" placeholder="password" value={password} className="form-control" onChange={this.fieldChange('password')}/>
          </div>
          <div className={style.btnControl}>
            <button className="btn btn-secondary" type="submit">Login</button>
          </div>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
}

export default LoginForm
