class A {
  constructor() {
    this.a = 100
  }

  printA() {
    console.log(this.a)
  }
}

const a = new A()
a.printA()