import React from 'react'
import { shallow, mount } from 'enzyme'

import Hello from '../Hello'

describe('React 组件测试', () => {
  test('shallow render Hello', () => {
    const com = shallow(<Hello />)

    expect(com).toMatchSnapshot()
  })

  test('mount render Hello', () => {
    const com = mount(<Hello />)

    expect(com).toMatchSnapshot()
  })

  test('click Hello', () => {
    const com = mount(<Hello />)

    com.find('div').simulate('click')

    expect(com).toMatchSnapshot()
  })

  test('onClick should be called only once', () => {
    const fakeClick = jest.fn()
    const com = mount(<Hello onClick={fakeClick} />)

    com.find('div').simulate('click')

    expect(fakeClick.mock.calls.length).toBe(1)
  })
})
