// TDD
// Test Driven Development
// sum() => 0
// sum(3) => 3
// sum(3, 4, 5) => 12
import sum from '../sum'

describe('求和', () => {
  test('不传参数时返回 0', () => {
    expect(sum()).toBe(0)
  })

  test('传递一个参数时，返回参数本身', () => {
    expect(sum(3)).toBe(3)
  })

  test('传递多个参数时，返回它们的和', () => {
    expect(sum(3, 4, 5)).toBe(12)
  })
})
