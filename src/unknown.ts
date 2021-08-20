export {}

const kansu = (): number => {
  return 40
}

let numberAny: any = kansu()
let numberUnknown: unknown = kansu()

let sumAny = numberAny + 10
let sumUnknown = numberUnknown + 10
