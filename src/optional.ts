export {}

const bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (((height / 100) * height) / 100)
  if (printable) {
    console.log({ bmi })
  } else {
    console.log('printable none')
  }
  return bmi
}

bmi(168, 71, true)
bmi(168, 71, false)
bmi(168, 71)
