export {}

type ObjectType = {
  name: string
  age: number
}

let object: ObjectType = {
  name: 'aaa',
  age: 10,
}

console.log({ object })

interface ObjectInterface {
  name: string
  age: number
}

let object2: ObjectInterface = {
  name: 'bbb',
  age: 2,
}

console.log({ object2 })
