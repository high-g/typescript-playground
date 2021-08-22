export {}

class Person {
  constructor(public name: string, protected age: number) {}
}

const me: Person = new Person('ore', 30)

console.log(me)
