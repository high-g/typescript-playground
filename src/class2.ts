export {}

class Person {
  protected name: string
  protected age: number
  protected nationality: string

  constructor(name: string, age: number, nationality: string) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality)
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

let taro: Person = new Person('taro', 10, 'Japan')
let hanako: Person = new Person('hanako', 11, 'U.S.A')
let android: Android = new Android('android', 11, 'China')

// console.log(taro.name)
// console.log(taro.age)
console.log(taro.profile())

console.log('android', android.profile())
