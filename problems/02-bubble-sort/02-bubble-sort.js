/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. 

*/

let numArray = [6,3,7,8,2,9,5,4,1];

function bubbleSort(numArray) {
    swapped = false;                            //if swapped evaluates to false, bubblesort process stops
    let endOfArray = numArray.length -1;

    for (let i = 0; i < endOfArray; i++) {
        if(numArray[i] > numArray[i + 1]) {     //if number on left (value 1) is greater than right (value 2), swap them
            swapped = true;                     //a swap has been made, continue bubblesort
            let temp = numArray[i];             //temp is now the index position where swap occurred
            numArray[i] = numArray[i + 1];      //the smaller number from the right is now on the left
            numArray[i + 1] = temp;             //the larger number that moved to the right is moved to the right in the array
        };
    }
}

do {
    bubbleSort(numArray);                       //keep sorting the array while swapped is true
}
while(swapped);

bubbleSort(numArray);
console.log(numArray);

 /*
                if(numArray[i] < numArray[i - 1]) {
                    swapped = true;
                    let temp = numArray[i -2];
                    numArray[i - 2] = [i + 1];
                    numArray[i + 1] = temp;
                    console.log;
*/