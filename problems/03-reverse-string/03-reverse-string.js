/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. 
*/
let someStr = "nonnahS einahpetS";
let myReverseStr = '';                              //loop will append characters to empty string one by one

function reverseStr(someStr) {
    for (let i = someStr.length -1; i >=0; i--)     //last character in string selected, i-- reduces string length each loop
    myReverseStr += someStr[i];                     //last character added to end of new string each iteration of loop
                
};

reverseStr(someStr);
console.log(myReverseStr);

