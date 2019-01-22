/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

let someNum;

function isEven(someNum) {
    if(someNum % 2 === 0) {
        console.log(someNum + ' is even');
        return true;
    }
    else {
        (someNum % 2 === 1) 
        console.log(someNum + ' is odd');
        return false;
    }
}

isEven(13);