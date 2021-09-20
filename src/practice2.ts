type Func = (a: number) => string
const func: Func = (arg: number) => {
  return String(arg)
}

func(11)

type res = ReturnType<Func>

const test: res = 'sss'

console.log(test)

// generics
interface Something<T> {
  id: number
  flag: T
}

const obj1: Something<string> = {
  id: 1,
  flag: 'test',
}

type flgObj = {
  name: string
  age: number
}

const obj2: Something<flgObj> = {
  id: 1,
  flag: {
    name: 'a',
    age: 11,
  },
}

// Conditional Types
// T, U型の互換性があれば、X型、なければY型
// T extends U ? X : Y
interface Animal {
  name: string
  type: string
}

interface Dog {
  name: string
  type: string
  age: number
}

type IsAnimal<T> = T extends Animal ? T : never

const dog1: IsAnimal<Dog> = {
  name: 'taro',
  type: 'dog',
  age: 11,
}
