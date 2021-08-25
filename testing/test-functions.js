function sum(...args) {
  return args.reduce((acc, el) => acc + el, 0)
}

function fibonacci(depth) {
  let n1 = 0
  let n2 = 1
  const result = []
  let nextTerm

  for (let i = 1; i <= depth; i++) {
    result.push(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
  }
  return result
}

function pow(base, exponent) {
  return base ** exponent
}

module.exports = {
  sum,
  fibonacci,
  pow,
}
