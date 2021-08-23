export {}

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run'
  }
}

class Lion extends Animal {
  public speed: number

  constructor(name: string, speed: number) {
    super(name)
    this.speed = speed
  }

  run(): string {
    return `${super.run()} ${this.speed}km.`
  }
}

const animal = new Animal('taro')
const lion = new Lion('gao', 80)

console.log(animal)
console.log(animal.run())
console.log('------------')
console.log(lion)
console.log(lion.run())
