export {}

let numbers: number[] = [1, 2, 3]
console.log({ numbers })

let numbers2: Array<number> = [1, 2, 3]
console.log({ numbers2 })

let strings2: Array<string> = ['tokyo', 'osaka', 'kyoto']
console.log({ strings2 })

let strings: string[] = ['a', 'b', 'c']
console.log({ strings })

let nijigen: number[][] = [
  [50, 100],
  [150, 300],
  [200, 300],
]

let hairetsu: (string | number | boolean)[] = [1, false, 'str']
