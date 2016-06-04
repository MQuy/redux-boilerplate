import React from 'react'
import { shallow } from 'enzyme'
import { Report } from '$root/routes/Home/Report/Report'

const user = { id: 1, fullName: 'Redux' }

describe("(Component) Report", () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = { user }
    _wrapper = shallow(<Report {..._props}/>)
  })

  it('Should render user name', () => {
    expect(_wrapper.html()).to.include(user.fullName)
  })

  it('Should rerender name when change user', () => {
    let user1 = { id: 2, fullName: 'React' }

    _wrapper.setProps({ user: user1 })
    expect(_wrapper.html()).to.include(user1.fullName)
  })
})
