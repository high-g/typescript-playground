export {}

let name: any = 'str'
let length = (<string>name).length
// length = 'foo' // これだと型の意味がない
console.log(length)
