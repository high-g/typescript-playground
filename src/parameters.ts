export {}

const debugProfile = (name: string, age: number): void => {
  console.log({ name, age })
}
debugProfile('taro', 10)

type Profile = Parameters<typeof debugProfile>

const profile: Profile = ['aaa', 1]

debugProfile(...profile)
