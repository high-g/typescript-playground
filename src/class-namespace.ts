export {}

namespace Japanese {
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public lastName: string, public middleName: string) {}
  }
}

const person = new Japanese.Person('test')
const michael = new English.Person('Michael', 'Joseph', 'Jackson')
console.log(person.name)
console.log(michael)
