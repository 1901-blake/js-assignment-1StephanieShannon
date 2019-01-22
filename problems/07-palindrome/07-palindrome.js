/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr) {
    someStr = someStr.toLowerCase()                             //converts string to lower case
    
    let strLength = someStr.length;                             //gets the length of the string

    for (let i = 0; i < strLength/2; i++) {                     //starts begin of string, divide it by 2, start loop
        if (someStr[i] !== someStr[strLength - 1 - i]) {        //compares begin of string to end of string
            console.log(someStr + ' is not a palindrome.');
            return false;                                       //when characters don't match, exit loop, return false
        }
    }
    console.log(someStr + ' is a palindrome.');                 //if statement did not evaluate to false, so it is a palindrome
    return true;
}

isPalindrome('RaceCar');
isPalindrome('Rlacecar');

/*I was having difficulty understanding how to remove non-alphabetical characters from the 
proposed palindrome so I did not include code to do that.*/