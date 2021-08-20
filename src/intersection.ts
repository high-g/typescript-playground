export {}

type Pitcher1 = {
  throwingSpeed: number
}

type Batter1 = {
  battingAverage: number
}

const sasaki: Pitcher1 = {
  throwingSpeed: 154,
}

const ochiai: Batter1 = {
  battingAverage: 0.367,
}

// type TwowayPlayer = {
//   throwingSpeed: number
//   battingAverage: number
// }

type TwowayPlayer = Pitcher1 & Batter1

const otani: TwowayPlayer = {
  throwingSpeed: 156,
  battingAverage: 0.367,
}
