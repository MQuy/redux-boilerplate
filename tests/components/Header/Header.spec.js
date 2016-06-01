import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '$root/components/Header/Header'

const currentUser = { id: 1, fullName: 'Redux' }

describe("(Component) Header", () => {
  let _wrapper;

  beforeEach(() => {
    let _props = {
      currentUser: currentUser
    }
    _wrapper = shallow(<Header {..._props} />)
  })


  it('Should render as a <nav>.', () => {
    expect(_wrapper.is('nav')).to.be.ok
  })

  it('Should render logo in <li>', () => {
    expect(_wrapper.find('li.nav-item img')).to.have.length(1)
  })

  it('Should render with an <li> that includes user name', () => {
    expect(_wrapper.text()).to.include(currentUser.fullName)
  })

  it('Should render logout icon', () => {
    expect(_wrapper.find('i.fa-sign-out')).to.have.length(1)
  })

  it('should rerender user name', () => {
    const user = { id: 2, fullName: 'React' }

    _wrapper.setProps({ currentUser: user })
    expect(_wrapper.text()).to.include(user.fullName)
  })
})
