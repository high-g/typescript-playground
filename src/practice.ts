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
