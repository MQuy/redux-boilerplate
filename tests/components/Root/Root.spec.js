import React from 'react'
import { shallow } from 'enzyme'
import { Root } from '$root/components/Root/Root'

describe("(Component) Root", () => {
  let _wrapper;

  beforeEach(() => {
    let _props = {
      children: <anchor/>
    }
    _wrapper = shallow(<Root {..._props} />)
  })

  it('Should render <anchor>', () => {
    expect(_wrapper.find('anchor')).to.have.length(1)
  })
})
