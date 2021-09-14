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
  name: string
  age: number
  add(): number
}

type PartOfMethod<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type PartOfMethod2 = { name: never; age: 1; add: 'add' }['name' | 'age' | 'add']

type result = PartOfMethod<Part>

console.log(typeof '')

type Keys = keyof Part // 'name' | 'age' | 'add'
let keys: Keys

keys = 'name'
// keys = 'age'
// keys = 'add'

type Keys2 = 'x' | 'y'
type Frags = { [K in Keys2]: boolean }

const frags: Frags = {
  x: true,
  y: true,
}

type Frags2 = {
  x: boolean
  y: boolean
}

type Frags2Key = {
  [K in keyof Frags2]: Frags2[K]
}
