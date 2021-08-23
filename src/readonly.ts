export {}

type Profile = {
  name: string
  age: number
}

const me: Profile = {
  name: 'aaa',
  age: 10,
}

me.age++
console.log(me)

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: 'taro',
  age: 14,
}
