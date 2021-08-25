const {sum, fibonacci, pow} = require('./test-functions')

describe('Test custom functions implementation', () => {
  it('sum', () => {
    expect(sum(1, 2, 3)).toBe(6)
    expect(sum(2, 2)).not.toBe(5)
  })
  it('fibonacci', () => {
    expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5])
    expect(fibonacci(5)).toHaveLength(5)
  })
  it('pow', () => {
    expect(pow(2, -1)).toBeCloseTo(0.5)
    expect(pow(2, 4)).toBe(16)
    expect(pow(5, 3)).toBe(125)
    expect(pow(-5, 3)).toBe(-125)
    expect(pow(-5, 2)).toBe(25)
  })
})
