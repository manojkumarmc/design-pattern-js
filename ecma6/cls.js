"use strict";

class Person {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  get getName(){
    return this.name
  }

  set setName(name){
    this.name = name
  }
}


let mc = new Person('Manoj', 37, 'M')
console.log(mc)


