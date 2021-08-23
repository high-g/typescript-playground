export {}

class Mahotsukai {}

class Souryo {}

class Taro extends Mahotsukai {}

interface Kuromado {
  mera(): void
}

interface Shiromado {
  hoimi(): void
}

class Akamado implements Kuromado, Shiromado {
  mera() {}

  hoimi() {}
}
