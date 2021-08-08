export function sum(...args) {
  return args.reduce((acc, value) => acc + value, 0)
}
