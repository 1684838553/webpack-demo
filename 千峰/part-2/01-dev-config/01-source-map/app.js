class A {
  constructor () {
    this.str = 'hello webpack'
  }

  sayHello() {
    console.log(this.str)
  }
}

const a = new A()

a.sayHello()