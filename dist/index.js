"use strict";
//any
let age = 34;
age = '23';
age = true;
console.log(age);
function log(document) {
    console.log(document);
}
log('Hello');
//Array
let array = [1, 2, 3, 4, 5];
let array1 = [7, 8, 9, 10];
// console.log(array.concat(array1))
// array[0] = 8
// console.log(array)
let myArr = [];
console.log(myArr.push(1, 2, 3, 4));
console.log(myArr);
//Tuples
let myPerson = [12, 'John'];
console.log(myPerson);
//union
let number;
number = 12;
number = true;
number = 'John';
const p1 = 1;
console.log(p1);
function getPersonData(person) {
    return `${person.name} ${person.age} ${person.weight}`;
}
let johnDoe = {
    name: 'Angel Mike',
    age: 45,
    weight: '60kg'
};
console.log(getPersonData(johnDoe));
const multiply = (x, y, z) => {
    return x * y * z;
};
console.log(multiply(2, 3, 9));
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    register() {
        return `${this.name} id is ${this.id}`;
    }
}
// const user = new User('Eunice',3)
// console.log(user.register())
class Employee extends User {
    constructor(name, id, position) {
        super(name, id);
        this.position = position;
    }
}
let emp = new Employee('Paul', 2164, 'Developer');
console.log(emp.register());
//object
let myEmployee = { name: 'Paul', id: 56 };
console.log(myEmployee.name);
let myOffer = {
    name: 'Grace',
    id: 24,
    retire: (date) => { console.log(date); }
};
let myPerson1 = 0 /* Person3.name */;
console.log(myPerson1);
