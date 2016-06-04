import React from 'react'
import { shallow } from 'enzyme'
import { User } from '$root//routes/Home/UserList/components/User'

const user = { id: 1, email: 'abc@example.com', fullName: 'Redux' }

describe("(Component) User", () => {
  let _wrapper, _props, _spy;

  beforeEach(() => {
    _props = {
      user,
      onClick: (_spy = chai.spy())
    }
    _wrapper = shallow(<User {..._props}/>)
  })

  it('Should contain username', () => {
    expect(_wrapper.text()).to.include(user.fullName)
  })

  it('Should call when click', () => {
    _wrapper.simulate('click')
    expect(_spy).to.have.been.called
  })
})
