/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  
*/

let sumNum = factorial(6);

function factorial(sumNum) {
    if(sumNum === 1) {                          //if sumNum does not equal 1, then moves into diminishing recursive loop
        return 1;
    }
    else
        return sumNum * factorial(sumNum - 1);  //ie 6 * (6-1)!; 6*5!; 6*5*4*3*2*1 = 720
}

console.log(sumNum);