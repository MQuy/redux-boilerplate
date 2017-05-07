import React, { Component, SyntheticEvent } from 'react'
import PropTypes from 'prop-types'
import style from './LoginForm.scss'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  messages: Array<string>;
}

interface LoginFormState {
  email: string;
  password: string;
}

const initialState: LoginFormState = {
  email: '',
  password: ''
}

const inputChanged = (field: string, value: string) => (state: LoginFormState, props: LoginFormProps) => {
  return { [field]: value };
}

export class LoginForm extends Component<LoginFormProps, LoginFormState> {
  state = initialState
  fieldChange = (field: string) => (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState(inputChanged(field, e.currentTarget.value));
  }
  formSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password } = this.state;
    const { onSubmit } = this.props;

    onSubmit(email, password);
  }
  render() {
    const { email, password } = this.state;
    const { messages } = this.props;

    return (
      <form name="loginForm" className={`blank form-horizontal ${style.loginForm}`} onSubmit={(e) => this.formSubmit(e)}>
        <div className={style.title}>Boilerplater</div>
        <div className={style.body}>
          { !messages ? '' :
              <div className="errors">
                {messages.map((m, i) => { return <p key={i}>{m}</p>})}
              </div>
          }

          <div className="form-group">
            <input type="text" name="email" placeholder="abc@studynow.vn" value={email} className="form-control" onChange={this.fieldChange('email')}/>
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="password" value={password} className="form-control" onChange={this.fieldChange('password')}/>
          </div>
          <div className={style.btnControl}>
            <button className="btn btn-secondary" type="submit">Login</button>
          </div>
        </div>
      </form>
    )
  }
}

export default LoginForm
