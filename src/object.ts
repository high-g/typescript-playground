export {}

let profile1: object = { name: 'test' }
profile1 = { year: 1 } // 値が切り替わってもエラーにならない
console.log({ profile1 })

let profile2: {} = { name: 'test1' }
profile2 = { aa: 'test2' }
console.log({ profile2 }) // こちらも同様

let profile3: { name: string } = { name: 'test3' }
profile3 = { name: 'test3_2' }
console.log({ profile3 }) // {} の場合は、アノテーションできる'
