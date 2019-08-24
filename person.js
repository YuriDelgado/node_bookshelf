class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting = (msg = 'hola') => {
    console.log(msg + ' ' + this.name + ', I\'m ' + this.age + ' y.o');
  }
}
// const person = {
//   name: 'john',
//   lastNme: 'Doe'
// };

module.exports = Person;
