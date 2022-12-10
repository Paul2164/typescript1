//any

let age : any = 34;

age = '23';
age = true;

console.log(age)

function log(document : any) {

    console.log(document)
}
log('Hello')

//Array


let array : number[] = [1,2,3,4,5]
let array1 : number[] = [7,8,9,10]


// console.log(array.concat(array1))

// array[0] = 8

// console.log(array)

let myArr : number[] = []

console.log(myArr.push(1,2,3,4))

console.log(myArr)

//Tuples

let myPerson :[number,string] = [12,'John']

console.log(myPerson)

//union

let number : string | number | boolean

number = 12
number = true
number = 'John'

type Point = string | number
const p1 : Point = 1
console.log(p1)

//interfaces as function component

interface Person {

    name : string;
    age : number;
    eyeColor? : string;
    height? : number;
    weight : string
}

interface User {

    name : string;
    id : number;
    age : number
}

interface Car {
    model : number;
    brand : string;
    make : string;
    date : number
}

function getPersonData (person :Person) {
    return `${person.name} ${person.age} ${person.weight}`
}

let johnDoe = {
    name : 'Angel Mike',
    age : 45,
    weight : '60kg'
}

console.log(getPersonData(johnDoe))

//interface function

interface multiplyNum {
    (x:number, y:number, z:number) : number
}

const multiply : multiplyNum = (x,y,z) => {

    return x * y * z
}

console.log(multiply(2,3,9))

//interfacce as class

interface PersonInterface {

    name : string;

    id : number;

    register() : string
}


class User implements PersonInterface {

    name : string;
    id : number;

    constructor(name : string, id : number) {

        this.name = name;
        this.id = id;
    }

    register () {

        return `${this.name} id is ${this.id}`
    }
}
// const user = new User('Eunice',3)

// console.log(user.register())

class Employee extends User {
    position : string;

    constructor(name:string,id:number,position:string) {

        super(name,id)

        this.position = position
    }
}

let emp = new Employee('Paul', 2164,'Developer')
console.log(emp.register())


//object

let myEmployee : {
    name:string,
    id:number
} = {name:'Paul',id:56}

console.log(myEmployee.name)

//type custom

type Employee1 = {
    name : string,
    id : number,
    retire : (date : Date) => void

}

let myOffer : Employee1 = {
    name : 'Grace',
    id : 24,
    retire : (date : Date) => {console.log(date)}
}

// myOffer.retire(2022,12,10)

//enum

const enum Person3 {
    name,
    id,
    age,
    height,
    weight,
    color,
    gender,
    location,

}
let myPerson1 : Person3 = Person3.name;
console.log(myPerson1)