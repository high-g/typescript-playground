interface Foo {
  bar: string
  baz: number
}

const a: Partial<Foo> = {
  baz: 1,
}

type Foo2 = {
  name?: string
  age?: number
}

const b: Required<Foo2> = {
  name: '11',
  age: 2,
}

type Foo3 = {
  name?: string
  age?: number
}

const c: Pick<Foo3, 'name'> = {
  name: '1',
}

type Foo4 = {
  name?: string
  age?: number
}

const d: Omit<Foo4, 'age'> = {
  name: '1',
}

const user = { name: 'kenji', age: 98 } as const

interface Part {
  name?: string
  age?: number
  add?(): number
}

const e: Part = {}

type PartOfMethod<T> = {
  [K in keyof T]: T[K]
}

console.log(typeof '')
console.log(typeof e)
