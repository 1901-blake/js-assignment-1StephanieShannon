/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let person = {name: 'Katie', age: 20};
console.log(person.name + ', ' + person.age);

//constructor function
function personFun(name2, age2) {
    this.name2 = name2;
    this.age2 = age2;
}
let person2 = new personFun('Leslie', 20);
let person3 = new personFun('Jason', 21);
console.log(person2.name2 + ', ' + person2.age2);
console.log(person3.name2 + ', ' + person3.age2);

//es6 class
class personA {
    constructor(name3, age3) {
        this.name3 = name3;
        this.age3 = age3;
    }
}

let person4 = new personA('Mona', 55);
let person5 = new personA('Becky', 56);

console.log(person4.name3 + ', ' + person4.age3);
console.log(person5.name3 + ', ' + person5.age3);