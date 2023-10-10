class Person {
  constructor() {
    this.name = 'John Doe';
    this.age= 30;

  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`)
  }
}
module.exports = Person;