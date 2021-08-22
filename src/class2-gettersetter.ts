export {}

class MyNumberCard {
  private _owner: string
  private _secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }

  get owner(): string {
    return this._owner
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

const card = new MyNumberCard('takashi', 12234556)
card.secretNumber = 1111
console.log(card.debugPrint())
