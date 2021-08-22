export {}

class MyNumberCard {
  protected owner: string
  protected secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this.owner = owner
    this.secretNumber = secretNumber
  }
}

const card = new MyNumberCard('takashi', 12234556)

console.log(card)
