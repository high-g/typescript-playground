export {}

class VisaCard {
  constructor(public readonly owner: string) {}
}

const card = new VisaCard('test')
console.log(card)
