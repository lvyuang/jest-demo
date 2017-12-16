export default (...args) => {
  return args.reduce((next, current) => {
    return next + current
  }, 0)
}
