export {}

const obj = {
  a: 1,
  b: 'd',
  c: {},
  e: true,
  d: [],
}

const { a, b, c }: { a: number; b: string; c: object } = obj
