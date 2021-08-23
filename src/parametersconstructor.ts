export {}

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const taro = new Person('taro', 30)

console.log(taro)

type Profile = ConstructorParameters<typeof Person>

const profile: Profile = ['aaa', 100]
const test = new Person(...profile)

console.log(test)
