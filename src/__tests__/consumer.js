jest.mock('../tools/a')
jest.mock('lodash/merge')
import consumer from '../consumer'
import merge from 'lodash/merge'

test('mock tools', () => {
  console.log(consumer.a)
  console.log(consumer.b)
  console.log(consumer.c)
})

test('mock lodash/merge', () => {
  console.log(merge.toString())
})
