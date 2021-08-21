export {}

function bmi(height: number, weight: number): number {
  return weight / (((height / 100) * height) / 100)
}

console.log(bmi(168, 71))
