export {}

interface Article {
  id: number
  title: string
  description: string
}

let data: Article[] = [
  {
    id: 1,
    title: 'title',
    description: 'aaa',
  },
]

console.log({ data })
