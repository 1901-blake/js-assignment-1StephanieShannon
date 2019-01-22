/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. 
*/

function fib(n) {
    let value1 = 0, value2 = 1, value3 = 1;     //value1 is 1st fib #, bvalue2 is 2nd fib #, value3 is 3rd fib #
    for(let i = 2; i <= n; i++) {               //for loop to iterate through fib # sequence
        value3 = value1 + value2;               //first 2 fib #s added become 3rd fib number
        value1 = value2;                        //moves value1's new value one to right in fib sequence
        value2 = value3;                        //moves value2's new value one to right in fib sequence
    }
    console.log(value3);                     //I want to see the number returned to make sure its working
    return value3;                           //return fib #
}

fib(7);                               //call the function