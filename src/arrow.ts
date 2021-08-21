export {}

const bmi = (height: number, weight: number): number => weight / ((height / 100) * (height / 100))

console.log(bmi(168, 71))
