export {}

let fooCompatible: any
let barComaptible: string = 'typescript'

console.log(typeof fooCompatible)
fooCompatible = barComaptible
console.log(typeof fooCompatible)

let fooIncompatible: string
let barIncompatible: number = 1

// fooIncompatible = barIncompatible

let fooString: string
let barString: string = 'str'
fooString = barString

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'
fooString = fooStringLiteral

interface Animal {
  age: number
  name?: string
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal = new Person(10, 'taro')
console.log(me)
