/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/


//This assumes we cannot use .splice to solve this problem.
let someArr = [1,2,3,4,5,6,7,8,9];

function spliceElement(someArr, index) {
    let value = index + 1;
    return someArr.filter(function(index) {
        return value !== index;                //returns all array members that do not equal provided index
    });   
}
let newArray = spliceElement(someArr, 7);
console.log(newArray);