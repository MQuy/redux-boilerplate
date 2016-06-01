import React from 'react'
import { shallow } from 'enzyme'
import { Footer } from '$root/components/Footer/Footer'

describe("(Component) Footer", () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<Footer/>)
  })

  it('Should render', () => {
    expect(_wrapper.is('div')).to.be.ok
  })
})
