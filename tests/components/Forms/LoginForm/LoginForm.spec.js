import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '$root/components/Forms/LoginForm/LoginForm'

describe("(Component) LoginForm", () => {
  let _wrapper, _props, _spy;

  beforeEach(() => {
    _props = {
      onSubmit: (_spy = chai.spy())
    }
    _wrapper = shallow(<LoginForm {..._props}/>)
  })

  it('Should render as <form>', () => {
    expect(_wrapper.is('form')).to.be.ok
  })

  it('Should update email state when filling', () => {
    let _email = _wrapper.find('input[name="email"]')

    _email.simulate('change', { target: { value: 'abc@example.com' }, preventDefault() {} })
    expect(_wrapper.state('email')).to.equal('abc@example.com')
  })

  it('Should update password state when filling', () => {
    let _password = _wrapper.find('input[name="password"]')

    _password.simulate('change', { target: { value: '0123456' }, preventDefault() {} })
  })

  it('Should update call onSubmit with email, password', () => {
    let [ email, password ] = ['abc@example.com', '0123456']

    _wrapper.setState({ email, password })
    _wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(_spy).to.have.been.called.with(email, password)
  })
})
