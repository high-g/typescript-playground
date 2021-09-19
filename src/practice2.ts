type Func = (a: number) => string
const func: Func = (arg: number) => {
  return String(arg)
}

func(11)

type res = ReturnType<Func>

const test: res = 'sss'

console.log(test)
