import React from 'react'
import { shallow } from 'enzyme'
import { Loading } from '$root/components/Loading/Loading'

describe("(Component) Loading", () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<Loading/>)
  })

  it('Should render loading rect', () => {
    expect(_wrapper.find('div')).to.have.length(6)
  })
})
