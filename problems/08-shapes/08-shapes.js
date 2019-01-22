/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

//print the square
function printShape(shape3, height3, character3) {
  let row3 = height3;
    console.log('# of rows3 ' + row3);
  let myrow3 = '';

  for(let i3 = 1; i3 <= rows; i3++) {


  }
  myrow3 + character3;
  console.log(myrow3);
}
printShape("Square", 3, "%");
/////////////////////////////

//print the triangle
function printShape(shape1, height1, character1) {
  let shape1 = '';
  let row1 = height1;
    console.log('# of rows1 ' + row1);
  let myrow1 = '';

 for(let i1 = 1; i1 <= row1; i1++) {
  myrow1 += character1;
  console.log(myrow1);
  }
}

printShape("Triangle", 3, "$");
///////////////////////////////

function printShape(shape2, height2, character2) {
  //let shape2 = '';
  let row2a = 5; let space2a = 4; let star2a = 1;
   console.log('# of rows 2a ' + row2a);
  let row2b = 4; let space2b = 1; let star2b = 7;
    console.log('# of rows 2b ' + row2b);
  let myrow2a = '';
  let myrow2b = '';

  for (let i2=1; i2<=row2a; i2++) {
    for (let j2=1; j2<=space2a; j2++){
      myrow2a += character2;
      console.log(myrow2a);
    }
    for (let k2=1; k2<=star2a; k2++) {
    //  myrow += character;
    //  console.log(myrow + "*");
    }
    space2a--;
    star2a=star2a+2;
  }

  for (let a=1; a<=row2b; a++) {
    for (let b; b<=space2b; b++) {
      myrow2b += character2;
      console.log(myrow2b);
    }
    for (let c=1; c<=star2b; c++) {
      //myrow += character;
      //console.log(myrow);
    }
    space2b++;
    star2b = star2b-2;
  }

}

/*printShape("Diamond", 5, "*");*/