describe('异步调用', () => {
  test('以回调的方式', (done) => {
    expect.assertions(1)

    setTimeout(() => {
      expect(1).toBe(1)
      done()
    }, 500)
  })

  test('Promise 的方式', () => {
    expect.assertions(1)

    const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve('ok')
      }, 500)
    })

    return p.then(res => {
      expect(res).toBe('ok')
    })
  })

  test('async/await 的方式', async () => {
    expect.assertions(1)

    const p = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve('ok')
      }, 500)
    })

    const result = await p()

    expect(result).toBe('ok')
  })
})
