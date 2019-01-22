/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

function objectProperties(eyeColor, hairColor, personName) {
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.personName = personName;
} 

let newPerson1 = new objectProperties('blue', 'brown', 'Katie');
let newPerson2 = new objectProperties('brown', 'blond', 'Angela');
console.log('Person 1: ', newPerson1);
console.log('Person 2: ', newPerson2);
