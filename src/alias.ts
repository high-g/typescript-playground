export {}

type Mojiretsu = String

const fooString: Mojiretsu = 'test'

type Profile = {
  name: 'test'
  age: 40
}

const example1: Profile = {
  name: 'test',
  age: 40,
}

type Profile2 = typeof example1

console.log({ example1 })
