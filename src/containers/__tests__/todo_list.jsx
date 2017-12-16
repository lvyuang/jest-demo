import React from 'react'
import { mount } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import TodoList from '../todo_list'

describe('业务组件的测试', () => {
  const delay = () => new Promise(resolve => {
    setTimeout(resolve, 0)
  })

  test('render', async () => {
    const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          json: () => {
            return [
              {id: '1', text: '刷牙'},
              {id: '2', text: '洗脸'},
              {id: '3', text: '吃饭'}
            ]
          }
        })
      })
    })

    const reducer = (state = {
      list: []
    }, action) => {
      switch (action.type) {
        case 'get-list':
          return {
            ...state,
            list: [
              ...state.list, ...action.list
            ]
          }
        default:
          return state
      }
    }
    const store = createStore(reducer, applyMiddleware(thunk))

    const com = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )

    await delay()

    com.update()
    expect(com).toMatchSnapshot()

    fetchSpy.mockRestore()
  })
})