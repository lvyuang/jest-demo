import tools from './tools'

const wrapper = (key) => {
  return 'my ' + key
}

export default {
  a: wrapper(tools.a()),
  b: wrapper(tools.b()),
  c: wrapper(tools.c())
}