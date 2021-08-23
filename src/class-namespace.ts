export {}

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public lastName: string, public middleName: string) {}
  }
}

const person = new Japanese.Tokyo.Person('test')
const osakajin = new Japanese.Osaka.Person('maido')
const michael = new English.Person('Michael', 'Joseph', 'Jackson')
console.log(person.name)
console.log(osakajin.name)
console.log(michael)
