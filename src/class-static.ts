export {}
class Test {
  static isProgramer: boolean = true
  static firstName: string = 'Takeshi'
  static lastName: string = 'Test'

  static work(): string {
    return `wwwwwwwww${this.firstName}`
  }
}

console.log(Test.firstName)
console.log(Test.work())
