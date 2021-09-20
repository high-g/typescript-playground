type Func = (a: number) => string
const func: Func = (arg: number) => {
  return String(arg)
}

func(11)

type res = ReturnType<Func>

const test: res = 'sss'

console.log(test)

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
