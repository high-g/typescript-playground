export {}

interface Profile {
  name: string
  underTwenty: boolean
  [index: string]: string | number | boolean
}

let profile: Profile = { name: 'test', underTwenty: false }
profile.name = 'test'
profile.age = 40
profile.nationaluty = '40'

// {[index: typeForIndex]: typeForValue}
