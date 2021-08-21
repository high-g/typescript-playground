export {}

const nextYearSalary = (current: number, rate: number = 1.1): number => {
  return current * rate
}

console.log(nextYearSalary(1000, 1.05))
console.log(nextYearSalary(1000))
